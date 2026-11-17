/**
 * Voorbeelden van de twee producten, gebouwd in HTML (geen schermafdruk: de echte
 * inbox en de echte groothandel bevatten klantgegevens). De namen zijn voorbeelden.
 */
export function InboxMockupCard({ className = "" }: { className?: string }) {
  return (
    <figure data-kind="product" className={`rounded-2xl border border-mist bg-white overflow-hidden shadow-[0_24px_48px_-24px_color-mix(in_oklab,var(--color-zwart)_35%,transparent)] ${className}`}>
      <figcaption className="px-5 py-3.5 border-b border-mist text-sm text-slate">Inbox: verhuisbedrijf (voorbeeld)</figcaption>
      <div className="p-5 space-y-3">
        <div className="rounded-xl border border-mist px-4 py-3">
          <div className="text-sm font-semibold text-zwart mb-1">Lisa Janssen: offerteaanvraag</div>
          <div className="text-sm text-slate leading-relaxed">
            We verhuizen op 14 maart van Utrecht naar Zeist, een driekamerappartement op de
            tweede verdieping. Kunnen jullie een prijs geven?
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-zwart">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          brantomicsAI zet een concept klaar
        </div>
        <div className="rounded-xl border-2 border-zilver bg-white px-4 py-3">
          <div className="text-sm font-semibold text-zwart mb-1">Concept: jij leest het na en verstuurt</div>
          <div className="text-sm text-zwart leading-relaxed">
            Hoi Lisa, dank voor je aanvraag! 14 maart kan nog. Mogen we je even bellen om de inboedel
            door te nemen? Dan krijg je dezelfde dag een prijs op maat.
          </div>
        </div>
      </div>
    </figure>
  );
}

export function OrderMockupCard({
  rows = [
    { name: "Runderbouillon 5L", qty: "×6" },
    { name: "Pommes frites 10mm", qty: "×12" },
    { name: "Olijfolie extra vierge", qty: "×3" },
  ],
  total = "21 regels totaal",
  amount = "€ 421,80",
  className = "",
}: {
  rows?: { name: string; qty: string }[];
  total?: string;
  amount?: string;
  className?: string;
}) {
  return (
    <figure data-kind="product" className={`rounded-2xl border border-mist bg-white overflow-hidden shadow-[0_24px_48px_-24px_color-mix(in_oklab,var(--color-zwart)_35%,transparent)] ${className}`}>
      <figcaption className="px-5 py-3.5 border-b border-mist text-sm text-slate">Hanos Shop: klaargezet door de motor</figcaption>
      <div className="p-5 space-y-2.5">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between rounded-xl border border-mist px-4 py-2.5">
            <span className="text-sm text-zwart">{row.name}</span>
            <span className="text-sm font-semibold text-zwart tabular-nums">{row.qty}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-3 border-t border-mist">
          <span className="text-sm text-slate">{total}</span>
          <span className="text-lg font-semibold text-zwart tabular-nums">{amount}</span>
        </div>
        <div className="w-full rounded-full bg-zwart text-bot text-sm font-semibold py-3 text-center" aria-hidden="true">
          Goedkeuren &amp; bestellen
        </div>
      </div>
    </figure>
  );
}
