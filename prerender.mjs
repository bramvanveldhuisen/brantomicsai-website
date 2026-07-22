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
    title: "Jouw inbox en bestellingen. Automatisch op orde.",
    description:
      "Brantomics AI automatiseert e-mailcommunicatie en groothandelbestellingen voor het MKB. Email Responder en Bestel Assistent. Eerste week gratis.",
  },
  {
    path: "/diensten",
    title: "Diensten",
    description:
      "Email Responder en Bestel Assistent. AI-automatisering op maat voor webshops, horeca, campings en B2B-dienstverleners.",
  },
  {
    path: "/demo-responder",
    title: "Demo Email Responder",
    description:
      "Probeer de Email Responder demo. Vul in en zie hoe Brantomics AI een professioneel, gepersonaliseerd antwoord genereert voor jouw bedrijf.",
  },
  {
    path: "/prijzen",
    title: "Prijzen",
    description: "Transparante prijzen voor Email Responder en Bestel Assistent. Vanaf €99/maand. Eerste week gratis, geen creditcard.",
  },
  {
    path: "/over-ons",
    title: "Over ons",
    description:
      "Brantomics AI is opgericht door Bram van Veldhuisen en Tom Vaessen. Twee gedreven ondernemers die geloven in de kracht van slimme AI voor het MKB.",
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Neem contact op met Brantomics AI. Vul het intakeformulier in of bel Tom direct op 06-43122575. Eerste week gratis.",
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
