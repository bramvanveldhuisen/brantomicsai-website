/** Compacte inbox-mockup — hergebruikt in de hero en "Hoe het werkt". */
export function InboxMockupCard() {
  return (
    <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm overflow-hidden shadow-xl shadow-navy/5">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border text-xs font-semibold text-ink/70">
        <span className="size-1.5 rounded-full bg-blue" />
        Inbox — Bloemenwebshop Vera
      </div>
      <div className="p-5 space-y-3">
        <div className="rounded-xl border border-border px-3.5 py-2.5">
          <div className="text-xs font-semibold text-navy mb-1">Linda Jansen — Klacht</div>
          <div className="text-xs text-muted leading-relaxed">
            Er zitten andere bloemen in mijn boeket dan ik had gekozen. Kan dit opgelost worden?
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-blue">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          Brantomics AI reageert automatisch
        </div>
        <div className="rounded-xl border border-blue/25 bg-blue/5 px-3.5 py-2.5">
          <div className="text-xs font-semibold text-blue mb-1">Antwoord — automatisch verstuurd</div>
          <div className="text-xs text-muted leading-relaxed">
            Wat vervelend, we lossen dit vandaag nog voor u op! U ontvangt een aangepast boeket,
            gratis opnieuw samengesteld naar uw wensen.
          </div>
        </div>
      </div>
    </div>
  );
}

/** Compacte bestel-mockup — hergebruikt in de hero en "Hoe het werkt". */
export function OrderMockupCard() {
  return (
    <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm overflow-hidden shadow-xl shadow-navy/5">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border text-xs font-semibold text-ink/70">
        <span className="size-1.5 rounded-full bg-navy" />
        Hanos Shop — Klaargezet door de motor
      </div>
      <div className="p-5 space-y-2.5">
        {[
          { name: "Runderbouillon 5L", qty: "×6" },
          { name: "Pommes frites 10mm", qty: "×12" },
          { name: "Olijfolie extra vierge", qty: "×3" },
        ].map((row) => (
          <div key={row.name} className="flex items-center justify-between rounded-xl border border-border px-3.5 py-2">
            <span className="text-xs text-ink/85">{row.name}</span>
            <span className="text-xs font-semibold text-navy">{row.qty}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-2.5 border-t border-border">
          <span className="text-xs text-muted">21 regels totaal</span>
          <span className="text-base font-extrabold text-navy">€ 421,80</span>
        </div>
        <button type="button" className="w-full rounded-full bg-navy text-white text-xs font-semibold py-2.5" disabled>
          Goedkeuren &amp; bestellen
        </button>
      </div>
    </div>
  );
}
