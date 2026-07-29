"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { serviceAreas, serviceNames } from "@/lib/site-config";

const inputClass =
  "min-h-12 border border-slate-300 bg-white px-4 outline-none focus:border-amber focus:ring-2 focus:ring-amber/20";

export function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const started = useRef(false);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackEvent("form_start", {
      form_name: "contact_lead",
      page_path: window.location.pathname,
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, pageUrl: window.location.href }),
      });
      if (!response.ok) throw new Error("Lead request failed");

      trackEvent("generate_lead", {
        form_name: "contact_lead",
        service: String(values.service),
        city: String(values.city),
        page_path: window.location.pathname,
      });
      router.push("/thank-you");
    } catch {
      setStatus("error");
      trackEvent("form_error", {
        form_name: "contact_lead",
        service: String(values.service),
        city: String(values.city),
        page_path: window.location.pathname,
      });
    }
  }

  return (
    <form
      className="grid gap-5 bg-frost p-7 sm:grid-cols-2 sm:p-10"
      onSubmit={submit}
      onFocusCapture={markStarted}
    >
      <div
        className="absolute -left-[10000px] top-auto size-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="name">
        Full name
        <input
          id="name"
          required
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="email">
        Email
        <input
          id="email"
          required
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="phone">
        Phone
        <input
          id="phone"
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          minLength={7}
          maxLength={30}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="service">
        Service
        <select
          id="service"
          required
          name="service"
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceNames.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label
        className="grid gap-2 text-sm font-semibold sm:col-span-2"
        htmlFor="city"
      >
        City
        <select
          id="city"
          required
          name="city"
          defaultValue=""
          autoComplete="address-level2"
          className={inputClass}
        >
          <option value="" disabled>
            Select your city
          </option>
          {serviceAreas.map((city) => (
            <option key={city}>{city}</option>
          ))}
          <option>Other South Florida city</option>
        </select>
      </label>
      <label
        className="grid gap-2 text-sm font-semibold sm:col-span-2"
        htmlFor="message"
      >
        How can we help?
        <textarea
          id="message"
          required
          name="message"
          rows={6}
          minLength={10}
          maxLength={2000}
          className="border border-slate-300 bg-white p-4 outline-none focus:border-amber focus:ring-2 focus:ring-amber/20"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Sending request…" : "Send request"}
      </button>
      <p className="text-xs leading-5 text-steel sm:col-span-2">
        By submitting, you agree to be contacted about your service request.
        Service availability is confirmed after review.
      </p>
      <p
        role="status"
        aria-live="polite"
        className="text-sm font-semibold text-red-700 sm:col-span-2"
      >
        {status === "error"
          ? "We could not send your request. Please try again or call us."
          : ""}
      </p>
    </form>
  );
}
