import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <Nav />
      <main id="inhoud" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

/** Kop van een subpagina: grote schreefkop links, de uitleg ernaast, op het donkere vlak. */
export function PageHero({ title, subtitle }: { title: ReactNode; subtitle: string }) {
  return (
    <header className="bg-bot text-zwart border-b border-lijn">
      <div className="wrap flex flex-col justify-end pt-16 pb-14 md:pt-24 md:pb-16 md:min-h-[min(46svh,28rem)]">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-6 items-end">
          <h1 className="md:col-span-8 text-display">{title}</h1>
          <p className="md:col-span-4 text-lead text-grijs leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
