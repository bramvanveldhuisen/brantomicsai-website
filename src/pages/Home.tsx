import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { SectionEyebrow, ArrowIcon } from "../components/ui";
import { InboxMockupCard, OrderMockupCard } from "../components/ProductMockups";

export function Home() {
  return (
    <Layout>
      <SEO
        title="Jouw inbox en bestellingen. Automatisch op orde."
        description="Brantomics AI automatiseert e-mailcommunicatie en groothandelbestellingen voor het MKB. Email Responder en Bestel Assistent. Eerste week gratis."
        path="/"
      />
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/5 px-4 py-1.5 text-xs font-semibold text-blue uppercase tracking-wide">
          <span className="size-1.5 rounded-full bg-blue animate-pulse" />
          AI-automatisering voor het MKB
        </span>
        <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-navy text-balance">
          Elk bedrijf heeft werk dat terugkomt en onnodig veel tijd kost.
          <br />
          <span className="text-blue">Wij bouwen de AI die het overneemt.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted leading-relaxed text-balance">
          Van webshops en horeca tot campings en verhuurders — Brantomics AI bouwt AI-tools die
          het herhalende werk overnemen dat jouw tijd kost. Geen generieke chatbot, maar een
          oplossing die is afgestemd op hoe jouw bedrijf werkt.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/diensten"
            className="inline-flex items-center gap-2 rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors"
          >
            Bekijk wat we bouwen
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-border bg-white/70 text-ink font-semibold px-7 py-3.5 hover:border-blue/40 transition-colors"
          >
            Eerste week gratis — geen risico
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted">
          <div className="flex -space-x-2">
            <span className="size-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-2 border-paper">
              B
            </span>
            <span className="size-8 rounded-full bg-success text-white text-xs font-bold flex items-center justify-center border-2 border-paper">
              T
            </span>
          </div>
          Persoonlijk onboarded door Bram &amp; Tom
        </div>
      </section>

      {/* WAAR WE VOOR STAAN */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <div className="text-2xl font-extrabold text-navy mb-1">Eén bedrijf</div>
            <p className="text-sm text-muted leading-relaxed">
              Geen los productenpakket, maar één team dat voor elk terugkerend probleem in jouw
              bedrijf een passende AI-oplossing bouwt.
            </p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-navy mb-1">Op maat</div>
            <p className="text-sm text-muted leading-relaxed">
              Elke oplossing wordt ingericht op jouw sector, schrijfstijl en werkwijze — geen
              standaardantwoord dat overal hetzelfde aanvoelt.
            </p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-navy mb-1">Persoonlijk</div>
            <p className="text-sm text-muted leading-relaxed">
              Bram en Tom zetten alles zelf voor je op en blijven aanspreekbaar — geen ticket­systeem,
              gewoon direct contact.
            </p>
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="text-center mb-14">
          <SectionEyebrow center>Twee voorbeelden uit de praktijk</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight text-balance">
            Zo ziet dat er in de praktijk uit
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Responder flow */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-blue mb-4">Email Responder</div>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3.5">
                <div className="size-7 shrink-0 rounded-full bg-blue/10 text-blue text-xs font-bold flex items-center justify-center">1</div>
                <div>
                  <div className="text-sm font-bold text-navy">Email komt binnen</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Een klant mailt naar jouw bedrijfsadres. De AI analyseert direct inhoud, toon
                    en urgentie.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="size-7 shrink-0 rounded-full bg-blue/10 text-blue text-xs font-bold flex items-center justify-center">2</div>
                <div>
                  <div className="text-sm font-bold text-navy">AI stelt antwoord op</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Een persoonlijk, contextueel antwoord in jouw bedrijfstoon — binnen 60
                    seconden.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="size-7 shrink-0 rounded-full bg-blue/10 text-blue text-xs font-bold flex items-center justify-center">3</div>
                <div>
                  <div className="text-sm font-bold text-navy">Verstuurd of ter goedkeuring</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Jij kiest: automatisch versturen, of eerst zelf even bekijken.
                  </p>
                </div>
              </div>
            </div>
            <InboxMockupCard />
          </div>

          {/* Bestel Assistent flow */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-navy mb-4">Bestel Assistent</div>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3.5">
                <div className="size-7 shrink-0 rounded-full bg-navy/10 text-navy text-xs font-bold flex items-center justify-center">1</div>
                <div>
                  <div className="text-sm font-bold text-navy">Vul je lijstje in</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Typ op wat je nodig hebt, in je eigen woorden — geen productcodes nodig.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="size-7 shrink-0 rounded-full bg-navy/10 text-navy text-xs font-bold flex items-center justify-center">2</div>
                <div>
                  <div className="text-sm font-bold text-navy">De motor bestelt</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Logt in bij je groothandel, zoekt elk product op en vult het winkelmandje.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="size-7 shrink-0 rounded-full bg-navy/10 text-navy text-xs font-bold flex items-center justify-center">3</div>
                <div>
                  <div className="text-sm font-bold text-navy">Jij keurt goed</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Controleer per leverancier wat klaarstaat en bestel in twee tikken.
                  </p>
                </div>
              </div>
            </div>
            <OrderMockupCard />
          </div>
        </div>
      </section>

      {/* DIENSTEN PREVIEW */}
      <section id="diensten" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/diensten"
            className="block rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8 hover:shadow-xl hover:shadow-blue/5 transition-shadow"
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div className="size-11 shrink-0 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-blue">Dienst 01</div>
                <div className="text-lg font-bold text-navy">Email Responder</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Automatisch klantmails beantwoorden voor webshops, campings, horeca en verhuurders.
              Persoonlijk, snel en zonder handmatig werk.
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-sm font-semibold text-blue">
              Meer lezen <ArrowIcon />
            </div>
          </Link>

          <Link
            to="/diensten"
            className="block rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8 hover:shadow-xl hover:shadow-navy/5 transition-shadow"
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div className="size-11 shrink-0 rounded-xl bg-navy/10 flex items-center justify-center text-navy">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M5 3v18h14V3M9 9h6M9 13h6M9 17h3" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-navy">Dienst 02</div>
                <div className="text-lg font-bold text-navy">Bestel Assistent</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Automatisch bestellingen klaarzetten bij je groothandel voor de horeca. Vul één
              lijstje in, de motor doet de rest — jij keurt in twee tikken goed.
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-sm font-semibold text-navy">
              Meer lezen <ArrowIcon />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionEyebrow center>Geen verplichtingen</SectionEyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4 text-balance">
          Eerste week volledig gratis.
          <br />
          Geen creditcard nodig.
        </h2>
        <p className="text-lg text-muted max-w-lg mx-auto mb-9 leading-relaxed">
          Bram en Tom zetten de automatisering persoonlijk voor je op. Binnen één werkdag live.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors"
          >
            Nu starten — eerste week gratis
          </Link>
          <Link
            to="/prijzen"
            className="rounded-full border border-border bg-white/70 text-ink font-semibold px-7 py-3.5 hover:border-blue/40 transition-colors"
          >
            Bekijk prijzen
          </Link>
        </div>
      </section>
    </Layout>
  );
}
