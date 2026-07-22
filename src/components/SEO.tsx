import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = "https://brantomicsai.nl";

function setMeta(nameOrProperty: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Werkt document.title + meta-tags bij per pagina (client-side, geen SSR nodig). */
export function SEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} — Brantomics AI`;
    const url = `${SITE_URL}${path}`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Brantomics AI", true);
    setMeta("og:locale", "nl_NL", true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setCanonical(url);
  }, [title, description, path]);

  return null;
}
