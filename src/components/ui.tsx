import type { ReactNode } from "react";

/**
 * Knoppen: racegroen gevuld (primair) en omlijnd (secundair).
 * De omlijnde knop neemt de tekstkleur over, dus werkt op licht én donker.
 */
const knopBasis =
  "inline-flex items-center justify-center gap-2 min-h-12 rounded-full px-6 font-semibold whitespace-nowrap " +
  "transition-[background-color,border-color,color,translate,scale] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-px " +
  "disabled:opacity-55 disabled:cursor-not-allowed disabled:translate-y-0";

export const knopPrimair = `${knopBasis} bg-zwart text-bot hover:bg-groen-mid`;
export const knopSecundair = `${knopBasis} border border-current hover:bg-zwart hover:text-bot hover:border-zwart`;
/** Op een donker vlak. */
export const knopPrimairDonker = `${knopBasis} bg-bot text-zwart hover:bg-zilver-licht`;
export const knopSecundairDonker = `${knopBasis} border border-bot/60 text-bot hover:bg-bot hover:text-zwart hover:border-bot`;

/** De rode punt die elke grote uitspraak afsluit. */
export function Punt() {
  return <span className="text-vermiljoen">.</span>;
}

/** Een gewone tekstlink. */
export const tekstLink =
  "font-semibold underline decoration-vermiljoen decoration-2 underline-offset-4 transition-colors duration-200 hover:text-groen-mid";

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/** Een regel met vinkje; neemt de tekstkleur over van waar hij staat. */
export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed">
      <CheckIcon className="shrink-0 mt-1.5" />
      <span>{children}</span>
    </li>
  );
}

/** Kop van een sectie: grote schreefkop, met de toelichting eronder. */
export function SectieKop({ titel, regel, id, donker = false }: { titel: ReactNode; regel?: ReactNode; id?: string; donker?: boolean }) {
  return (
    <div data-onthul className="mb-6 md:mb-8 max-w-[50rem]">
      <h2 id={id} className="text-section">
        {titel}
      </h2>
      {regel && <p className={`mt-3 text-lead leading-relaxed max-w-[56ch] ${donker ? "text-grijs-licht" : "text-grijs"}`}>{regel}</p>}
    </div>
  );
}

/** Kleine label-pil, zoals de tags op ELI5. */
export function Label({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-bot px-3 py-1 text-sm font-normal text-zwart">{children}</span>;
}

/**
 * Een fotovak. Zolang er nog geen eigen foto is, staat er een duidelijke plaatshouder
 * met wat er straks op moet. Een echte foto: geef `src` mee.
 */
export function FotoVak({
  wat,
  src,
  alt = "",
  positie = "",
  className = "",
  donker = false,
  children,
}: {
  wat: string;
  src?: string;
  alt?: string;
  /** Welk deel van de foto in beeld blijft, bijv. "object-[50%_17%]". */
  positie?: string;
  className?: string;
  donker?: boolean;
  children?: ReactNode;
}) {
  if (src) {
    return (
      <figure className={`relative overflow-hidden rounded-xl ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 size-full object-cover ${positie}`}
        />
        {children}
      </figure>
    );
  }
  return (
    <figure
      data-slot="foto"
      data-alt={wat}
      className={`relative overflow-hidden rounded-xl ${donker ? "bg-zwart-2 text-grijs-licht" : "bg-creme text-zilver-donker"} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <figcaption className="text-sm font-normal leading-snug max-w-[28ch]">Foto volgt: {wat}</figcaption>
      </div>
      {children}
    </figure>
  );
}
