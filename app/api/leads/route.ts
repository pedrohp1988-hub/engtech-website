import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { serviceAreas, serviceNames } from "@/lib/site-config";

const MAX_BODY_BYTES = 12_000;
const normalize = (value: string) => value.trim().replace(/\s+/g, " ");
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );

const leadSchema = z.object({
  name: z.string().transform(normalize).pipe(z.string().min(2).max(100)),
  email: z.string().transform(normalize).pipe(z.string().email().max(254)),
  phone: z
    .string()
    .transform(normalize)
    .pipe(z.string().min(7).max(30))
    .transform((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length === 10
        ? `+1${digits}`
        : digits.length === 11 && digits.startsWith("1")
          ? `+${digits}`
          : value;
    }),
  service: z.enum(serviceNames),
  city: z.enum([...serviceAreas, "Other South Florida city"]),
  message: z.string().transform(normalize).pipe(z.string().min(10).max(2000)),
  website: z.string().max(0),
  pageUrl: z.string().url().max(500).optional(),
});

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Request is too large." },
      { status: 413 },
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Request is too large." },
      { status: 413 },
    );
  }

  let unknownPayload: unknown;
  try {
    unknownPayload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(unknownPayload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the form and try again." },
      { status: 422 },
    );
  }

  const { RESEND_API_KEY, LEAD_NOTIFICATION_EMAIL, LEAD_FROM_EMAIL } =
    process.env;
  if (!RESEND_API_KEY || !LEAD_NOTIFICATION_EMAIL || !LEAD_FROM_EMAIL) {
    return NextResponse.json(
      { error: "Lead service is temporarily unavailable." },
      { status: 503 },
    );
  }

  const lead = parsed.data;
  const submittedAt = new Date().toISOString();
  const sourcePage =
    lead.pageUrl ?? request.headers.get("referer") ?? "Not provided";
  const rows = [
    ["Source", "website"],
    ["Submitted", submittedAt],
    ["Page", sourcePage],
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["City", lead.city],
    ["Message", lead.message],
  ];
  const html = `<h1>New website lead</h1><table>${rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  try {
    await new Resend(RESEND_API_KEY).emails.send({
      from: LEAD_FROM_EMAIL,
      to: LEAD_NOTIFICATION_EMAIL,
      replyTo: lead.email,
      subject: `Website lead: ${lead.service} in ${lead.city}`,
      html,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "We could not send your request. Please try again." },
      { status: 502 },
    );
  }
}
