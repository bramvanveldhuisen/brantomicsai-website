import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Punt, SectieKop, knopPrimair, knopSecundair, tekstLink } from "../components/ui";
import { Veeg } from "../components/Beweging";

/**
 * Uitgelichte pagina voor ontruimers, de branche waarin we gespecialiseerd zijn. Geen klantnamen of resultaten tot die er echt zijn.
 * Alle namen, adressen en tijden in de voorbeelden zijn verzonnen en als voorbeeld gemarkeerd.
 */

const PIJNEN = [
  {
    titel: "Nabestaanden bellen terwijl je een zolder leeghaalt.",
    tekst: "Na een overlijden of een verhuizing naar het verpleeghuis wil men snel iemand spreken. Bel je pas 's avonds terug, dan is er soms al een ander gebeld.",
  },
  {
    titel: "Elke aanvraag begint met mailen over en weer.",
    tekst: "Hoeveel kamers, welke verdieping, bezemschoon of niet. Pas daarna kun je een prijs noemen.",
  },
  {
    titel: "Je laatste review is maanden oud.",
    tekst: "Families kiezen een ontruimer op vertrouwen. Recente reviews wegen dan zwaar.",
  },
  {
    titel: "De eerste vraag is altijd: wat kost het?",
    tekst: "Families willen een bedrag weten voordat ze bellen. Zonder bedrag vragen ze eerst bij een ander.",
  },
];

const STAPPEN = [
  { tijd: "Dinsdag", titel: "Aanvraag binnen", tekst: "Via je formulier, je prijsindicatie of je mail. Meteen in één overzicht, met dienst, plaats en datum." },
  { tijd: "Dinsdag", titel: "Concept klaar", tekst: "Een antwoord in jouw toon staat in je inbox. Jij leest het na en verstuurt." },
  { tijd: "Vrijdag", titel: "Klus gedaan", tekst: "Je zet de aanvraag op afgerond. Meer hoef je niet te doen." },
  { tijd: "Zondag", titel: "Reviewverzoek", tekst: "De klant krijgt automatisch een nette vraag om een review, vanuit jouw eigen mailbox." },
  { tijd: "Maandag", titel: "Review beantwoord", tekst: "Op elke nieuwe review staat een antwoord als concept klaar. Jij leest het na en plaatst het." },
];

const BOUWEN = [
  {
    naam: "Prijsindicatie",
    tekst: "Families maken foto's per kamer, de AI schat in wat er staat en jouw tarieven maken er een indicatie van. De AI bedenkt nooit een prijs.",
    link: { to: "/prijsindicatie", label: "Zo werkt de prijsindicatie" },
  },
  {
    naam: "Email Responder",
    tekst: "Voor elke aanvraag staat een concept klaar in je eigen inbox. Rustig en respectvol, ook bij een sterfgeval.",
    link: { to: "/demo-responder", label: "Probeer de demo" },
  },
  {
    naam: "Review-opvolging",
    tekst: "Na elke klus een nette vraag om een review. Antwoorden op nieuwe reviews staan als concept klaar.",
  },
];

const VRAGEN = [
  {
    vraag: "Klinkt een AI-antwoord niet kil, bij nabestaanden?",
    antwoord:
      "Het concept volgt jouw toon en jouw eigen voorbeelden. Jij leest het na en past aan voordat het weggaat. Er gaat niets naar een klant dat jij niet hebt gezien, tenzij je dat zelf zo afspreekt.",
  },
  {
    vraag: "Moet mijn website opnieuw gebouwd worden?",
    antwoord:
      "Nee. We koppelen aan je bestaande formulier en je eigen mailbox. Een betere of nieuwe site kan, maar het hoeft niet.",
  },
  {
    vraag: "Wat kost het?",
    antwoord:
      "Dat hangt af van wat je kiest. Na het eerste gesprek krijg je een voorstel met vaste bedragen per onderdeel. Dat gesprek is gratis en vrijblijvend.",
  },
  {
    vraag: "Wie heeft straks toegang tot mijn klantgegevens?",
    antwoord:
      "Mails en antwoorden blijven in je eigen mailbox. Foto’s en aanvragen van de prijsindicatie staan op onze eigen server en worden na 90 dagen verwijderd. Je kunt ons de toegang tot je mailbox op elk moment weer afnemen.",
  },
];

/** De opening: een ontruimingsaanvraag die binnenkomt, met het concept-antwoord eronder. */
function AanvraagKaart() {
  return (
    <figure data-kind="product" className="rounded-2xl border border-mist bg-white overflow-hidden shadow-[0_24px_48px_-24px_color-mix(in_oklab,var(--color-zwart)_35%,transparent)]">
      <figcaption className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-mist text-sm text-slate">
        <span>Inbox: ontruimingsbedrijf (voorbeeld)</span>
        <span>Voorbeeld</span>
      </figcaption>
      <div className="p-5 space-y-4">
        <div className="rounded-xl border border-mist px-4 py-3">
          <div className="text-sm font-semibold text-zwart mb-2">Nieuwe aanvraag via je website</div>
          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 text-sm">
            <dt className="text-slate">Dienst</dt>
            <dd className="text-zwart">Woningontruiming</dd>
            <dt className="text-slate">Woning</dt>
            <dd className="text-zwart">Driekamerappartement, 2e verdieping, lift</dd>
            <dt className="text-slate">Plaats</dt>
            <dd className="text-zwart">Arnhem</dd>
            <dt className="text-slate">Opleveren</dt>
            <dd className="text-zwart">Bezemschoon aan de woningcorporatie, vóór 1 december</dd>
          </dl>
        </div>
        <div className="rounded-xl border-2 border-zilver px-4 py-3">
          <div className="text-sm font-semibold text-zwart mb-1.5">Concept: jij leest het na en verstuurt</div>
          <p className="text-sm text-zwart leading-relaxed">
            Beste mevrouw De Vries, dank voor uw bericht, en gecondoleerd met het verlies van uw moeder. Mag
            ik u morgen bellen om een kijkafspraak te plannen? Dan weet u snel waar u aan toe bent.
          </p>
        </div>
      </div>
    </figure>
  );
}

export function Ontruiming() {
  return (
    <Layout>
      <SEO
        title="AI voor ontruimers"
        description="Ontruiming is onze specialiteit: een prijsindicatie-systeem op je eigen website, conceptantwoorden in je inbox en review-opvolging, persoonlijk ingericht."
        path="/ontruiming"
      />

      {/* HERO */}
      <section className="bg-bot text-zwart">
        <div className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-7 items-center pt-12 pb-10 md:pt-14 md:pb-14">
          <div className="lg:col-span-6">
            <h1 data-onthul className="text-display max-w-[11ch]">
              AI voor ontruimers<Punt />
            </h1>
            <p data-onthul data-vertraging="80" className="mt-8 text-lead text-grijs leading-relaxed max-w-[38ch]">
              Ontruiming is onze specialiteit. Een prijs meteen op je website, conceptantwoorden in je inbox en reviews gevraagd, terwijl jij ontruimt.
            </p>
            <div data-onthul data-vertraging="150" className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className={knopPrimair}>
                Plan een gesprek
              </Link>
              <a href="tel:+31643122575" className={knopSecundair}>
                Bel Tom: 06-43122575
              </a>
            </div>
          </div>
          <div data-onthul data-vertraging="200" className="lg:col-span-6 lg:col-start-7 min-w-0">
            <AanvraagKaart />
          </div>
        </div>
        <Veeg />
      </section>

      {/* HERKEN JE DIT */}
      <section className="bg-zwart text-bot py-10 md:py-14">
        <div className="wrap">
          <SectieKop donker titel="Herken je dit?" regel="Je verdient je geld op de klus. Het werk eromheen loopt intussen door." />
          <ol data-onthul-kinderen className="grid md:grid-cols-2 gap-x-10 gap-y-7">
            {PIJNEN.map((p, i) => (
              <li key={p.titel} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-x-6">
                <span className="font-serif text-[4rem] leading-none text-zilver tabular-nums" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-title mb-2">{p.titel}</h3>
                  <p className="text-grijs-licht leading-relaxed max-w-[46ch]">{p.tekst}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EEN AANVRAAG, VAN MAIL TOT REVIEW */}
      <section className="wrap py-10 md:py-14" aria-labelledby="een-aanvraag">
        <SectieKop
          id="een-aanvraag"
          titel={<>Eén aanvraag, van eerste mail tot review<Punt /></>}
          regel="Zo loopt een ontruiming als het werk eromheen geregeld is. De dagen zijn een voorbeeld."
        />
        <ol data-onthul-kinderen className="relative grid gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          <span data-onthul="lijn" className="absolute left-[4px] top-2 bottom-2 w-px bg-zilver lg:left-0 lg:right-0 lg:top-[4px] lg:bottom-auto lg:h-px lg:w-auto" aria-hidden="true" />
          {STAPPEN.map((s) => (
            <li key={s.titel} className="relative pl-10 lg:pl-0 lg:pt-12">
              <span className="absolute left-0 top-1.5 size-[9px] rounded-full bg-vermiljoen lg:top-0" aria-hidden="true" />
              <span className="block text-sm text-groen-mid tabular-nums mb-2">{s.tijd}</span>
              <h3 className="font-serif text-[clamp(1.75rem,0.8vw+1.4rem,2.25rem)] font-normal leading-tight mb-3">{s.titel}</h3>
              <p className="text-grijs leading-relaxed">{s.tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WAT WE BOUWEN */}
      <section className="bg-steen py-10 md:py-14">
        <div className="wrap">
          <SectieKop titel="Onze producten voor ontruimers" regel="Kies wat je nodig hebt. Alles werkt los, en samen nog beter." />
          <div data-onthul-kinderen className="grid md:grid-cols-3 gap-x-10 border-b border-lijn">
            {BOUWEN.map((b) => (
              <article key={b.naam} className="border-t border-lijn py-10">
                <h3 className="font-serif font-normal text-[clamp(1.75rem,1.2vw+1.25rem,2.5rem)] leading-tight mb-3">{b.naam}</h3>
                <p className="text-lead text-grijs leading-relaxed max-w-[46ch]">{b.tekst}</p>
                {b.link && (
                  <p className="mt-4">
                    <Link to={b.link.to} className={tekstLink}>
                      {b.link.label}
                    </Link>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JIJ HOUDT DE REGIE */}
      <section className="bg-zwart-2 text-creme">
        <div data-onthul className="wrap py-10 md:py-14">
          <p className="font-serif text-display max-w-[14ch] leading-[0.95]">Jij houdt de regie<Punt /></p>
          <p className="mt-8 text-lead text-zilver-licht leading-relaxed max-w-[52ch]">
            Antwoorden staan als concept in je eigen inbox. Je kiest zelf wat automatisch mag en wat eerst langs jou gaat.
          </p>
        </div>
      </section>

      {/* VRAGEN */}
      <section className="wrap py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-7">
          <h2 data-onthul className="lg:col-span-5 text-section">Vragen van ontruimers</h2>
          <div data-onthul-kinderen className="lg:col-span-7 border-b border-lijn">
            {VRAGEN.map((v) => (
              <details key={v.vraag} className="group border-t border-lijn">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-title font-semibold transition-colors duration-200 hover:text-groen-mid [&::-webkit-details-marker]:hidden">
                  {v.vraag}
                  <span className="relative size-4 shrink-0" aria-hidden="true">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-vermiljoen" />
                    <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-vermiljoen transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="pb-6 text-lead text-grijs leading-relaxed max-w-[56ch]">{v.antwoord}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-creme py-10 md:py-14">
        <div data-onthul-kinderen className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-7 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-section mb-6">Vertel waar je tijd in zit<Punt /></h2>
            <p className="text-lead text-grijs leading-relaxed mb-8 max-w-[44ch]">
              In een eerste gesprek kijken we waar je aanvragen misloopt of uren kwijt bent. Gratis en
              vrijblijvend.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={knopPrimair}>
                Plan een gesprek
              </Link>
              <Link to="/over-ons" className={knopSecundair}>
                Wie we zijn
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-center gap-5 rounded-xl bg-bot p-5">
            <img src="/portretten/tom.jpg" alt="Tom Vaessen" width={800} height={1200} loading="lazy" className="size-20 shrink-0 rounded-full object-cover object-top" />
            <div className="min-w-0">
              <h3 className="text-title">Tom Vaessen</h3>
              <p className="text-grijs">Sales en klantcontact</p>
              <a href="tel:+31643122575" className={`${tekstLink} inline-block mt-1`}>
                06-43122575
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
