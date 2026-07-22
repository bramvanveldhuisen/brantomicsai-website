import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/demo-responder", label: "Demo" },
  { to: "/prijzen", label: "Prijzen" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <Link to="/">
            <Logo size="footer" />
          </Link>
          <div className="mt-3 text-sm text-muted max-w-xs">AI-automatisering voor het MKB</div>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-ink/80">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-blue transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div>© 2026 Brantomics AI. Alle rechten voorbehouden.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>KVK: 42032331</span>
            <span>BTW: NL869394964B01</span>
            <Link to="/privacybeleid" className="hover:text-blue transition-colors">
              Privacybeleid
            </Link>
            <Link to="/algemene-voorwaarden" className="hover:text-blue transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
