import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Onthullen, Veeg } from "./Beweging";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <Nav />
      <main id="inhoud" className="flex-1">
        {children}
      </main>
      <Footer />
      <Onthullen />
    </div>
  );
}

/** Kop van een subpagina: grote schreefkop met de uitleg eronder. */
export function PageHero({ title, subtitle }: { title: ReactNode; subtitle: string }) {
  return (
    <header className="bg-bot text-zwart">
      <div className="wrap flex flex-col justify-end pt-16 pb-14 md:pt-24 md:pb-16 md:min-h-[min(46svh,28rem)]">
        <h1 data-onthul className="text-display max-w-[20ch]">{title}</h1>
        <p data-onthul data-vertraging="80" className="mt-8 text-lead text-grijs leading-relaxed max-w-[58ch]">{subtitle}</p>
      </div>
      <Veeg />
    </header>
  );
}
