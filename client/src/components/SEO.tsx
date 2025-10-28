import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}='${key}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  let el = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({ title, description, keywords, canonical, ogImage, jsonLd }: SEOProps) {
  useEffect(() => {
    const url = canonical || (typeof window !== "undefined" ? window.location.href : "");
    if (title) document.title = title;
    if (description) upsertMeta("name", "description", description);
    if (keywords?.length) upsertMeta("name", "keywords", keywords.join(", "));
    upsertMeta("name", "robots", "index, follow");

    if (title) upsertMeta("property", "og:title", title);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    if (url) upsertMeta("property", "og:url", url);
    if (ogImage) upsertMeta("property", "og:image", ogImage);

    if (title) upsertMeta("name", "twitter:title", title);
    if (description) upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:card", ogImage ? "summary_large_image" : "summary");
    if (ogImage) upsertMeta("name", "twitter:image", ogImage);

    if (url) upsertLink("canonical", url);

    // Build BreadcrumbList from current pathname
    let breadcrumb: Record<string, any> | null = null;
    if (typeof window !== "undefined") {
      const { pathname, origin } = window.location;
      const parts = pathname.split("/").filter(Boolean);
      const itemListElement = [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: origin + "/",
        },
        ...parts.map((seg, idx) => {
          const name = seg.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
          const href = origin + "/" + parts.slice(0, idx + 1).join("/");
          return {
            "@type": "ListItem",
            position: idx + 2,
            name,
            item: href,
          };
        }),
      ];
      breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
      };
    }

    const scriptId = "page-jsonld";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const payload = jsonLd
      ? Array.isArray(jsonLd)
        ? [...jsonLd, ...(breadcrumb ? [breadcrumb] : [])]
        : [jsonLd, ...(breadcrumb ? [breadcrumb] : [])]
      : breadcrumb
      ? breadcrumb
      : null;
    if (payload) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(payload);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, JSON.stringify(jsonLd), keywords?.join(",")]);

  return null;
}
