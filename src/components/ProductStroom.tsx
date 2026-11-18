import { useEffect, useRef, useState } from "react";

const STAPPEN = [
  { naam: "Prijsindicatie", tekst: "De familie maakt foto's en ziet een indicatie uit jouw tarieven." },
  { naam: "Email Responder", tekst: "Op elke vraag staat een concept-antwoord klaar in je inbox." },
  { naam: "Review-opvolging", tekst: "Na de klus krijgt de klant een nette vraag om een review." },
];

/**
 * Eén klant loopt door de drie producten: een rood lichtje schuift over de lijn en
 * elk product licht op zodra het wordt bereikt. Alleen transform en opacity bewegen.
 * Er is een pauzeknop, buiten beeld staat hij stil en bij "minder beweging" ook.
 */
export function ProductStroom() {
  const [gepauzeerd, setGepauzeerd] = useState(false);
  const [inBeeld, setInBeeld] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const kijker = new IntersectionObserver(([melding]) => setInBeeld(melding.isIntersecting));
    kijker.observe(el);
    return () => kijker.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stroom ${gepauzeerd || !inBeeld ? "is-stil" : ""}`}>
      <div className="mb-8 flex items-center justify-between gap-6">
        <h2 className="font-sans text-title font-semibold tracking-normal leading-tight">Van eerste vraag tot review</h2>
        <button
          type="button"
          onClick={() => setGepauzeerd((p) => !p)}
          aria-pressed={gepauzeerd}
          className="raster-knop flex size-11 shrink-0 items-center justify-center rounded-full border border-lijn bg-bot text-grijs transition-colors duration-200 hover:border-zwart hover:text-zwart"
        >
          <span className="sr-only">{gepauzeerd ? "Animatie afspelen" : "Animatie pauzeren"}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            {gepauzeerd ? <path d="M3 1.5v11l9-5.5z" /> : <path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" />}
          </svg>
        </button>
      </div>
      <div className="relative">
        <span className="stroom-spoor" aria-hidden="true">
          <span className="stroom-puls" />
        </span>
        <ol className="relative grid gap-y-10 md:grid-cols-3 md:gap-x-8">
          {STAPPEN.map((s, i) => (
            <li key={s.naam} className="relative pl-10 md:pl-0 md:pt-12">
              <span className={`stroom-knoop stroom-knoop-${i + 1}`} aria-hidden="true" />
              <h3 className="font-serif text-[clamp(2rem,1.2vw+1.5rem,2.75rem)] font-normal leading-tight mb-2">{s.naam}</h3>
              <p className="text-lead text-grijs leading-relaxed max-w-[34ch]">{s.tekst}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
