export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Global AI Hub",
    "url": "https://globalaihub.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://globalaihub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Enterprise AI Software Directory and Deep Technical Reviews 2026",
    "publisher": {
      "@type": "Organization",
      "name": "Global AI Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://globalaihub.com/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
