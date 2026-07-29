import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/sections/service-page";
import { servicePageMap, servicePages } from "@/content/service-pages";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = servicePageMap[params.slug];
  if (!page) return {};
  return {
    title: `${page.title} | EngTech HVAC`,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: `${page.title} | EngTech HVAC`,
      description: page.description,
      url: `${siteConfig.url}/${page.slug}`,
      type: "website",
    },
  };
}

export default function ServiceLandingPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = servicePageMap[params.slug];
  if (!page) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${siteConfig.url}/${page.slug}`,
    areaServed: "South Florida",
    provider: {
      "@type": "HVACBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.url,
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ServicePageView page={page} />
    </>
  );
}
