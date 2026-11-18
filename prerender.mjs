// Genereert per route een eigen dist/<route>/index.html met de juiste <title>/meta-tags
// al aanwezig in de statische HTML — nodig omdat <SEO> (src/components/SEO.tsx) die tags
// pas via useEffect zet, dus crawlers/linkpreviews zonder JS-uitvoering zagen tot nu toe
// altijd de generieke shell-titel ("Brantomics AI — preview"). React hydrateert de pagina
// hierna gewoon opnieuw (createRoot vervangt #root client-side), dus de body zelf hoeft hier
// niet server-side gerenderd te worden — alleen de <head> moet al kloppen bij binnenkomst.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "dist");
const SITE_URL = "https://brantomicsai.nl";

const ROUTES = [
  {
    path: "/",
    title: "AI-producten voor ontruimers, verhuizers en vastgoed",
    description:
      "brantomicsAI maakt AI-producten voor bedrijven met veel aanvragen: een prijsindicatie op je site, de Email Responder en review-opvolging. Persoonlijk ingericht door Bram en Tom.",
  },
  {
    path: "/producten",
    title: "Producten",
    description:
      "Drie AI-producten voor bedrijven met veel aanvragen: de prijsindicatie met foto's, de Email Responder en review-opvolging.",
  },
  {
    path: "/ontruiming",
    title: "AI en automatisering voor ontruimers",
    description:
      "Voor ontruimingsbedrijven: een prijsindicatie op je site, concept-antwoorden in je inbox en review-opvolging. Met AI, in je eigen accounts, persoonlijk ingericht.",
  },
  {
    path: "/prijsindicatie",
    title: "Prijsindicatie met foto's voor ontruimers",
    description:
      "Een aanvraagpagina op je eigen site: families maken foto's per kamer, de AI telt wat er staat en jouw eigen tarieven maken er een prijsindicatie van.",
  },
  {
    path: "/demo-prijsindicatie",
    title: "Demo prijsindicatie voor ontruimers",
    description:
      "Probeer de prijsindicatie met foto's: doorloop de aanvraag zoals een familie die op de site van een ontruimer ziet.",
  },
  {
    path: "/demo-responder",
    title: "Demo Email Responder",
    description:
      "Probeer de Email Responder demo. Vul in en zie hoe brantomicsAI een concept-antwoord opstelt voor jouw bedrijf.",
  },
  {
    path: "/over-ons",
    title: "Over ons",
    description:
      "brantomicsAI is opgericht door Bram van Veldhuisen en Tom Vaessen. Twee ondernemers die met AI tijd besparen en bedrijven beter vindbaar maken.",
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Plan een vrijblijvend gesprek met brantomicsAI. Vul het formulier in of bel Tom direct op 06-43122575.",
  },
  {
    path: "/privacybeleid",
    title: "Privacybeleid",
    description: "Privacybeleid van Brantomics AI.",
  },
  {
    path: "/algemene-voorwaarden",
    title: "Algemene Voorwaarden",
    description: "Algemene Voorwaarden van Brantomics AI.",
  },
];

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildHead(route, template) {
  const fullTitle = escapeHtml(route.path === "/" ? `${route.title} — Brantomics AI` : `${route.title} — Brantomics AI`);
  const description = escapeHtml(route.description);
  const url = `${SITE_URL}${route.path}`;

  const metaTags = `
    <title>${fullTitle}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Brantomics AI" />
    <meta property="og:locale" content="nl_NL" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${description}" />`;

  return template.replace(/<title>.*?<\/title>/s, metaTags);
}

const template = readFileSync(join(DIST, "index.html"), "utf-8");

for (const route of ROUTES) {
  const html = buildHead(route, template);
  if (route.path === "/") {
    writeFileSync(join(DIST, "index.html"), html);
    console.log("Prerendered: / -> dist/index.html");
    continue;
  }
  const dir = join(DIST, route.path.replace(/^\//, ""));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`Prerendered: ${route.path} -> dist${route.path}/index.html`);
}
