import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Veeg } from "../components/Beweging";
import { UitslagKaart } from "../components/ProductMockups";
import { Punt, knopPrimair, knopPrimairDonker, knopSecundair, knopSecundairDonker } from "../components/ui";

/**
 * Het prijsindicatie-systeem, kort: hoe het op je website komt, wat je klant ziet en wat jij ziet.
 * De AI schat alleen het volume, de prijs komt altijd uit de tabel van de ontruimer.
 * Namen en bedragen in de voorbeeldkaarten zijn verzonnen en als voorbeeld gemarkeerd.
 */

const GESPREK = "/contact";

const ZONDER = ["Aanvraag sturen", "Wachten op een reactie", "Bezichtiging plannen", "Pas dan een prijs"];
const MET = ["Foto’s maken op jouw website", "Meteen een prijsindicatie", "Bezichtiging plannen, met de prijs al in beeld"];

const INBOUW = [
  { titel: "Tarieven invullen", tekst: "Dat doen we samen met je." },
  { titel: "Eén regel code plakken", tekst: "Werkt op de meeste websites, en anders helpen wij je." },
  { titel: "Live in jouw stijl", tekst: "Met je eigen kleuren en logo." },
];

const AANVRAAG = [
  ["Keuzes", "Hele woning, appartement"],
  ["Foto’s", "11 foto’s, per kamer"],
  ["Volume", "Ongeveer 28 m³, geschat door de AI"],
  ["Kadaster", "92 m², bouwjaar 1974"],
  ["Indicatie", "Je klant zag € 1.850 tot € 2.350"],
];

const KAMERS_VOORBEELD: { naam: string; fotos: number; status: string; klaar: boolean; vraagt?: boolean }[] = [
  { naam: "Woonkamer", fotos: 3, status: "3 foto’s, klaar", klaar: true },
  { naam: "Slaapkamer", fotos: 2, status: "2 foto’s, klaar", klaar: true },
  { naam: "Keuken", fotos: 1, status: "Maak nog een foto van de andere kant", klaar: false, vraagt: true },
  { naam: "Zolder", fotos: 0, status: "Nog geen foto’s", klaar: false },
];

function FotoTegel() {
  return (
    <span className="grid size-9 place-items-center rounded-md bg-mist text-slate" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m21 16-5-5-7 7" />
      </svg>
    </span>
  );
}

/** Nagebouwd voorbeeld: het systeem bij stap 3, zoals het op de website van een ontruimer staat. */
function SysteemVoorbeeld() {
  return (
    <figure>
      <figcaption className="mb-3 text-sm text-grijs">Voorbeeld: zo staat het systeem op de website van een ontruimer</figcaption>
      <div className="overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_24px_48px_-24px_color-mix(in_oklab,var(--color-zwart)_35%,transparent)]">
        <div className="flex items-center gap-3 border-b border-mist px-5 py-3.5">
          <span className="grid size-8 place-items-center rounded-lg bg-zwart text-sm font-semibold text-bot" aria-hidden="true">
            VO
          </span>
          <span className="font-semibold text-zwart">Voorbeeld Ontruimingen</span>
        </div>
        <div className="p-5">
          <div className="mb-1.5 flex justify-between text-sm text-slate tabular-nums">
            <span>Stap 3 van 5</span>
            <span>60%</span>
          </div>
          <div className="h-1.5 rounded-full bg-mist" aria-hidden="true">
            <div className="h-full w-3/5 rounded-full bg-zwart" />
          </div>
          <p className="mt-5 font-serif text-[2rem] leading-none text-zwart">Foto’s per kamer</p>
          <ul className="mt-4 divide-y divide-mist border-y border-mist">
            {KAMERS_VOORBEELD.map((k) => (
              <li key={k.naam} className="flex items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="font-semibold text-zwart leading-snug">{k.naam}</p>
                  <p className={`text-sm leading-snug ${k.klaar ? "text-groen-mid" : k.vraagt ? "font-semibold text-zwart" : "text-slate"}`}>{k.status}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {Array.from({ length: k.fotos }, (_, i) => (
                    <FotoTegel key={i} />
                  ))}
                  {!k.klaar && (
                    <span className={`grid size-9 place-items-center rounded-md border border-dashed border-rand text-slate ${k.vraagt ? "tegel-vraagt" : ""}`} aria-hidden="true">
                      +
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-full bg-zwart py-3 text-center text-sm font-semibold text-bot" aria-hidden="true">
            Volgende stap
          </div>
        </div>
        <p className="border-t border-mist py-2.5 text-center text-sm text-slate">Prijsindicatie-systeem door Brantomics AI</p>
      </div>
    </figure>
  );
}

/** Wat de ontruimer binnenkrijgt. */
function AanvraagKaart() {
  return (
    <figure data-kind="product" className="h-full rounded-2xl border border-mist bg-white overflow-hidden shadow-[0_24px_48px_-24px_color-mix(in_oklab,var(--color-zwart)_35%,transparent)]">
      <figcaption className="px-5 py-3.5 text-sm text-slate">Zo komt de aanvraag bij jou binnen (voorbeeld, alle gegevens zijn verzonnen)</figcaption>
      <dl>
        {AANVRAAG.map(([kop, waarde]) => (
          <div key={kop} className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-4 border-t border-mist px-5 py-3">
            <dt className="text-sm text-slate">{kop}</dt>
            <dd className="text-sm text-zwart leading-relaxed">{waarde}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-mist bg-creme/50 px-5 py-4">
        <p className="text-sm font-semibold text-zwart mb-1.5">Concept: jij leest het na en verstuurt</p>
        <p className="text-sm text-zwart leading-relaxed">
          Beste mevrouw Bakker, dank voor uw aanvraag en de foto’s. Mag ik u morgen bellen om een bezichtiging te plannen?
        </p>
      </div>
    </figure>
  );
}

export function Prijsindicatie() {
  return (
    <Layout>
      <SEO
        title="Prijsindicatie-systeem voor ontruimers"
        description="Een prijsindicatie-systeem voor je eigen website: klanten maken foto’s per kamer en zien meteen een indicatie op basis van jouw tarieven."
        path="/prijsindicatie"
      />

      {/* OPENING: wat het is en hoe het op je website komt */}
      <section className="bg-bot text-zwart">
        <div className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-8 items-center py-10 md:py-14">
          <div className="lg:col-span-7">
            <h1 data-onthul className="text-display max-w-[16ch]">
              Het prijsindicatie-systeem voor je eigen website<Punt />
            </h1>
            <p data-onthul data-vertraging="80" className="mt-5 text-lead text-grijs leading-relaxed max-w-[46ch]">
              Je klant wil meteen weten wat het kost. Hij maakt foto’s, de AI schat in wat er staat en jouw tarieven maken er direct een prijsindicatie van.
            </p>
            <div data-onthul data-vertraging="150" className="mt-7 flex flex-wrap gap-3">
              <Link to="/demo-prijsindicatie" className={knopPrimair}>
                Bekijk de demo
              </Link>
              <Link to={GESPREK} className={knopSecundair}>
                Plan een gesprek
              </Link>
            </div>
            <ol data-onthul data-vertraging="200" className="mt-8 grid gap-x-6 gap-y-4 border-t border-lijn pt-5 sm:grid-cols-3 max-w-[44rem]">
              {INBOUW.map((stap, i) => (
                <li key={stap.titel} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2">
                  <span className="font-serif text-[1.75rem] leading-none text-vermiljoen tabular-nums" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-sans text-base font-semibold leading-snug tracking-normal text-zwart">{stap.titel}</h2>
                    <p className="text-sm text-grijs leading-snug">{stap.tekst}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div data-onthul data-vertraging="200" className="lg:col-span-5 min-w-0">
            <SysteemVoorbeeld />
          </div>
        </div>
        <Veeg />
      </section>

      {/* WAAROM: niemand wil wachten op een offerte */}
      <section className="bg-zwart text-bot">
        <div className="wrap py-10 md:py-14">
          <div data-onthul className="max-w-[48rem]">
            <h2 className="text-section">Je klant wil niet wachten op een offerte<Punt /></h2>
            <p className="mt-4 text-lead text-grijs-licht leading-relaxed">
              Wie een ontruiming zoekt, wil meteen weten wat het ongeveer kost. Moet hij eerst een aanvraag sturen en wachten op een reactie, dan kijkt hij intussen verder bij een ander. Daarom hebben we dit systeem gebouwd, speciaal voor ontruimers. Werk je in een branche met soortgelijke diensten, zoals verhuizen of opruimen? Dan bouwen we het ook voor jou.
            </p>
          </div>
          <div data-onthul-kinderen className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-lijn-donker p-6 md:p-7">
              <h3 className="text-title font-semibold text-grijs-licht">Zonder prijsindicatie</h3>
              <ol className="mt-4 divide-y divide-lijn-donker">
                {ZONDER.map((stap, i) => (
                  <li key={stap} className="grid grid-cols-[2rem_minmax(0,1fr)] items-baseline py-3 text-grijs-licht">
                    <span className="font-serif text-[1.5rem] leading-none text-zilver-donker tabular-nums" aria-hidden="true">
                      {i + 1}
                    </span>
                    {stap}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl bg-bot p-6 md:p-7 text-zwart">
              <h3 className="text-title font-semibold">Met het prijsindicatie-systeem</h3>
              <ol className="mt-4 divide-y divide-lijn">
                {MET.map((stap, i) => (
                  <li key={stap} className="grid grid-cols-[2rem_minmax(0,1fr)] items-baseline py-3 font-semibold">
                    <span className="font-serif text-[1.5rem] font-normal leading-none text-vermiljoen tabular-nums" aria-hidden="true">
                      {i + 1}
                    </span>
                    {stap}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* WAT JE KLANT ZIET EN WAT JIJ ZIET */}
      <section className="wrap py-10 md:py-14">
        <div data-onthul-kinderen className="grid lg:grid-cols-2 gap-x-8 gap-y-10">
          <div className="flex flex-col">
            <h2 className="text-section">Wat je klant ziet</h2>
            <p className="mt-3 mb-6 text-lead text-grijs leading-relaxed">Foto’s maken, gegevens invullen en meteen een prijsindicatie.</p>
            <div className="flex-1">
              <UitslagKaart />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-section">Wat jij ziet</h2>
            <p className="mt-3 mb-6 text-lead text-grijs leading-relaxed">Een complete aanvraag in je mail en in je dashboard, klaar om de klant te bellen.</p>
            <div className="flex-1">
              <AanvraagKaart />
            </div>
          </div>
        </div>
      </section>

      {/* AFSLUITING */}
      <section className="bg-zwart-2 text-creme">
        <div data-onthul className="wrap py-10 md:py-14 grid lg:grid-cols-12 gap-x-8 gap-y-6 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-section max-w-[24ch]">De AI schat in wat er staat. De prijs komt altijd uit jouw eigen tabel<Punt /></h2>
            <p className="mt-4 text-lead text-zilver-licht leading-relaxed max-w-[54ch]">Twijfelt de AI, dan toont het systeem geen bedrag en stelt het een bezichtiging voor.</p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link to="/demo-prijsindicatie" className={knopPrimairDonker}>
              Bekijk de demo
            </Link>
            <a href="tel:+31643122575" className={knopSecundairDonker}>
              Bel Tom
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
