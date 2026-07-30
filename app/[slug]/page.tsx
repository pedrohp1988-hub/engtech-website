import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/sections/service-page";
import { servicePageMap, servicePages } from "@/content/service-pages";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageMap[slug];
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

export default async function ServiceLandingPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = servicePageMap[slug];
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
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${siteConfig.url}/${page.slug}`,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ServicePageView page={page} />
    </>
  );
}
