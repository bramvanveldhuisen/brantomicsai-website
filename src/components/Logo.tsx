/**
 * Logo brantomicsAI (ontworpen door Bram, november 2026): drie rode bladvormen die samen
 * een B vormen, met het woordmerk in de schreefletter van de site ernaast.
 * De vorm is nagetekend uit Brams ontwerp; het bronbestand staat in branding/.
 */
export const LOGO_PAD =
  "M28 0 L392 0 C498.6 0, 593.8 94.8, 585 199 C583.3 223.6, 580.7 251.1, 564 270 C533.6 230.2, 485.3 202.9, 432 204 L277 204 C157.2 205.2, 48.7 109.4, 28 0Z M128 390 C181 290.7, 286.8 221, 402 221 C459 221, 520.8 241.6, 557 287 C526.4 349.8, 454.6 384.6, 387 388 L142 388Z M567 297 C540.3 372.9, 458.6 411.1, 382 411 L232 411 C125.3 411, 39.9 485.3, 0 574 L402 574 C502.1 574, 600.7 500.9, 601 401 C602.3 363.5, 593 325.2, 567 297Z";

/** Alleen het beeldmerk, in vermiljoen. */
export function LogoMerk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 602 575" className={className} aria-hidden="true" focusable="false">
      <path d={LOGO_PAD} className="fill-vermiljoen" />
    </svg>
  );
}

const MATEN = {
  nav: { merk: "h-7", tekst: "text-[1.75rem]", gat: "gap-2.5" },
  footer: { merk: "h-11", tekst: "text-[2.75rem]", gat: "gap-3.5" },
} as const;

export function Logo({ size = "nav", opDonker = false }: { size?: keyof typeof MATEN; opDonker?: boolean }) {
  const m = MATEN[size];
  return (
    <span role="img" aria-label="brantomicsAI" className={`inline-flex items-center ${m.gat}`}>
      <LogoMerk className={`${m.merk} w-auto shrink-0`} />
      <span
        aria-hidden="true"
        className={`${m.tekst} font-serif leading-none tracking-[-0.01em] ${opDonker ? "text-bot" : "text-zwart"}`}
      >
        brantomics<span className="text-vermiljoen">AI</span>
      </span>
    </span>
  );
}
