import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Punt, knopPrimairDonker, knopSecundairDonker } from "./ui";

const KOLOMMEN = [
  {
    kop: "Producten",
    links: [
      { to: "/prijsindicatie", label: "Prijsindicatie" },
      { to: "/producten", label: "Email Responder" },
      { to: "/producten", label: "Review-opvolging" },
    ],
  },
  {
    kop: "brantomicsAI",
    links: [
      { to: "/", label: "Home" },
      { to: "/ontruiming", label: "Voor ontruimers" },
      { to: "/demo-prijsindicatie", label: "Demo" },
      { to: "/over-ons", label: "Over ons" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

const footerLink = "inline-block py-1 whitespace-nowrap text-grijs-licht transition-colors duration-200 hover:text-bot";

export function Footer() {
  return (
    <footer className="bg-zwart text-bot">
      <div className="wrap pt-20 pb-12 grid sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
        <div className="sm:col-span-2 lg:col-span-6">
          <Link to="/" aria-label="brantomicsAI, naar de homepagina" className="inline-block">
            <Logo size="footer" opDonker />
          </Link>
          <p className="mt-6 text-lead text-bot max-w-[26ch]">Werk dat steeds terugkomt? Laten we praten<Punt /></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className={knopPrimairDonker}>
              Plan een gesprek
            </Link>
            <a href="tel:+31643122575" className={knopSecundairDonker}>
              Bel Tom
            </a>
          </div>
        </div>
        {KOLOMMEN.map((k) => (
          <nav key={k.kop} aria-label={k.kop} className="lg:col-span-2">
            <h2 className="font-sans text-sm font-semibold text-bot mb-4 tracking-normal leading-normal">{k.kop}</h2>
            <ul className="space-y-1">
              {k.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={footerLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="lg:col-span-2">
          <h2 className="font-sans text-sm font-semibold text-bot mb-4 tracking-normal leading-normal">Contact</h2>
          <address className="not-italic text-grijs-licht space-y-1">
            <a href="mailto:info@brantomicsai.nl" className="block py-1 whitespace-nowrap hover:text-bot transition-colors duration-200">
              info@brantomicsai.nl
            </a>
            <a href="tel:+31643122575" className="block py-1 whitespace-nowrap hover:text-bot transition-colors duration-200">
              06-43122575
            </a>
            <span className="block py-1">Maarn</span>
          </address>
        </div>
      </div>
      <div className="wrap">
        <div className="border-t border-lijn-donker py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-grijs-licht">
          <div className="flex flex-wrap gap-x-6 gap-y-1 tabular-nums">
            <span>© 2026 Brantomics AI VOF</span>
            <span>KVK: 42032331</span>
            <span>BTW: NL869394964B01</span>
          </div>
          <div className="flex flex-wrap gap-x-6">
            <Link to="/privacybeleid" className={footerLink}>
              Privacybeleid
            </Link>
            <Link to="/algemene-voorwaarden" className={footerLink}>
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
