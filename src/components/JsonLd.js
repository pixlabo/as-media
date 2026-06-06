import { site } from "@/lib/site";
import { faqs } from "@/lib/faqs";

// Safely embed JSON-LD (escape "<" to prevent XSS via injected strings).
function Ld({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function JsonLd() {
  const businessId = `${site.url}/#business`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        description: site.description,
        slogan: "We print brands that people remember.",
        foundingDate: site.foundingYear,
        email: site.email,
        telephone: site.phone,
        image: `${site.url}/opengraph-image`,
        logo: `${site.url}/opengraph-image`,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        areaServed: { "@type": "Country", name: site.areaServed },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Printing & Branding Services",
          itemListElement: site.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.shortDescription,
        publisher: { "@id": businessId },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return <Ld data={graph} />;
}
