import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Veeg } from "../components/Beweging";
import { UitslagKaart } from "../components/ProductMockups";
import { Punt, SectieKop, knopPrimair, knopPrimairDonker, knopSecundair, knopSecundairDonker, tekstLink } from "../components/ui";

/**
 * Landingspagina voor de prijsindicatie met foto's.
 * Het product draait nog bij geen klant: geen nauwkeurigheidscijfers, geen klantnamen,
 * en de AI schat alleen het volume. De prijs komt altijd uit de tabel van de ontruimer.
 * Alle namen en bedragen in de voorbeeldkaarten zijn verzonnen en als voorbeeld gemarkeerd.
 */

const GESPREK = "/contact?sector=Ontruiming";
const schaduw = "shadow-[0_24px_48px_-24px_color-mix(in_oklab,var(--color-zwart)_35%,transparent)]";

const PIJNEN = [
  { titel: "Je rijdt naar een bezichtiging die niets wordt.", tekst: "Voor een prijs moet je eerst gaan kijken. Een deel van die afspraken levert geen klus op." },
  { titel: "De eerste vraag is altijd: wat kost het?", tekst: "Families willen een bedrag weten voordat ze bellen. Zonder bedrag vragen ze eerst bij een ander." },
  { titel: "Een aanvraag zegt weinig.", tekst: "Op \"woning leeghalen, graag een offerte\" kun je nog geen prijs noemen." },
  { titel: "Bij de bezichtiging blijkt alles anders.", tekst: "De zolder staat vol, de schuur is vergeten, de lift is kapot." },
];

const STAPPEN = [
  { titel: "Wat moet er leeg", tekst: "Hele woning, deel van de woning, kelder of zolder, of spoed." },
  { titel: "De woning", tekst: "Soort en grootte van de woning." },
  { titel: "Foto's per kamer", tekst: "Met uitleg en controle." },
  { titel: "Gegevens en adres", tekst: "Het adres vult zich aan met gegevens uit het Kadaster: oppervlakte, bouwjaar en type woning." },
  { titel: "De indicatie", tekst: "Met wat er nu gebeurt." },
];

const INSTRUCTIE = [
  "Maak per ruimte 2 tot 4 foto's, zodat alle spullen in beeld zijn.",
  "Doe het licht aan en houd uw telefoon liggend.",
  "Fotografeer vanuit de hoeken van de kamer, niet alleen vanuit de deur.",
  "Zet kasten, lades en bergruimtes open: wat we niet zien, kunnen we niet meetellen.",
  "Vergeet zolder, kelder, schuur, garage en tuin niet.",
  "Zet geen mensen, papieren of medicijnen in beeld.",
];

const TARIEVEN = [
  "Prijs per m³ inclusief afvoer, en een minimumbedrag",
  "Soort klus",
  "Verdieping zonder lift en loopafstand",
  "Spoed, weekend of avond",
  "Werkgebied en reistoeslag, ook per vestiging",
  "Extra's zoals bezemschoon, opleveren aan de woningcorporatie en vloer verwijderen",
  "Bijzondere stukken zoals een piano of kluis",
];

const ZEKERHEDEN = [
  { titel: "De AI is zeker", tekst: "De familie ziet een smalle bandbreedte." },
  { titel: "De AI twijfelt", tekst: "De bandbreedte wordt breder." },
  { titel: "De AI is onzeker", tekst: "Of hij ziet mogelijk asbest. Dan toont de pagina geen AI-prijs en vraagt hij om een bezichtiging." },
];

const MANIEREN = [
  { naam: "Eén regel code", hoe: "Werkt op elke site.", voor: "Elke site" },
  { naam: "WordPress-plugin", hoe: "Installeren en een shortcode plaatsen.", voor: "WordPress-sites" },
  { naam: "Eigen subdomein", hoe: "Bijvoorbeeld analyse.jouwbedrijf.nl.", voor: "Google Ads" },
];

const PRIVACY = [
  "De foto's staan in de EU.",
  "De locatiegegevens worden uit de foto's gehaald.",
  "De foto's worden na 90 dagen verwijderd, tenzij er een opdracht uit komt.",
  "De AI-leverancier traint niet op deze gegevens.",
  "Je tekent een verwerkersovereenkomst met ons.",
  "Op de pagina staat voor de familie dat de foto's met AI worden geanalyseerd en daarna door jou worden gecontroleerd.",
];

const PAKKETTEN = [
  { naam: "Basis", voor: "Kleine ontruimer", inhoud: ["Tot 40 aanvragen per maand", "Code of WordPress-plugin", "Mail en dashboard"] },
  {
    naam: "Groei",
    voor: "Bedrijf met een paar bussen",
    inhoud: ["Tot 120 aanvragen per maand", "Eigen subdomein", "Koppeling met CRM of Sheet", "Conversies naar Google Ads", "Elk kwartaal de tabel opnieuw nagerekend"],
  },
  {
    naam: "Groot",
    voor: "15 of meer medewerkers of meerdere vestigingen",
    inhoud: ["Ruim gebruik", "Tarieven en werkgebied per vestiging", "Maandrapport", "Vaste contactpersoon"],
  },
];

const VRAGEN = [
  {
    vraag: "Hoe nauwkeurig is de indicatie?",
    antwoord: "We rekenen de pagina bij de start na op jouw eigen afgeronde klussen. Weet de AI het niet zeker, dan toont de pagina geen AI-prijs en vraagt hij om een bezichtiging. Je ziet en bevestigt elke indicatie zelf.",
  },
  {
    vraag: "Wat als iemand slechte foto's maakt?",
    antwoord: "Een foto die te donker of onscherp is, wordt direct opnieuw gevraagd. Ontbreekt er een deel van de kamer, dan vraagt de pagina om een extra foto. Blijft het onduidelijk, dan wordt de bandbreedte breder of volgt een bezichtiging.",
  },
  {
    vraag: "Ben ik gebonden aan de indicatie?",
    antwoord: "Nee. Op de pagina staat dat het geen offerte is. De vaste prijs spreek je af na je eigen bezichtiging.",
  },
  { vraag: "Moet mijn website opnieuw?", antwoord: "Nee. Eén regel code, een plugin of een subdomein." },
  {
    vraag: "Wie ziet de foto's?",
    antwoord: "Jij, en wij voor ondersteuning. De AI-analyse loopt via een leverancier die niet traint op deze gegevens. De foto's worden na 90 dagen verwijderd.",
  },
  {
    vraag: "Werkt het met mijn CRM?",
    antwoord: "Via een koppeling met de meeste systemen en met Google Sheets. Welke systemen, bespreken we in het gesprek.",
  },
];

const SPULLEN = [
  ["Bankstel", "1"],
  ["Kasten", "4"],
  ["Bedden", "2"],
  ["Eettafel met stoelen", "1"],
  ["Dozen en losse spullen", "ca. 35"],
];

function Rij({ kop, children }: { kop: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-5 gap-y-1 border-t border-mist px-5 py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
      <dt className="text-sm text-slate">{kop}</dt>
      <dd className="min-w-0 text-sm text-zwart leading-relaxed">{children}</dd>
    </div>
  );
}

/** Wat de ontruimer binnenkrijgt. */
function AanvraagKaart() {
  return (
    <figure data-kind="product" className={`rounded-2xl border border-mist bg-white overflow-hidden ${schaduw}`}>
      <figcaption className="px-5 py-3.5 text-sm text-slate">Nieuwe aanvraag (voorbeeld, alle gegevens zijn verzonnen)</figcaption>
      <dl>
        <Rij kop="Keuzes">Ontruiming van de gehele woning, appartement, afval afvoeren</Rij>
        <Rij kop="Foto's">Woonkamer 4, slaapkamer 3, keuken 2, berging 2</Rij>
        <Rij kop="Spullenlijst AI">
          <ul className="space-y-0.5">
            {SPULLEN.map(([naam, aantal]) => (
              <li key={naam} className="flex justify-between gap-4">
                <span>{naam}</span>
                <span className="tabular-nums">{aantal}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-semibold">Volume: ca. 28 m³</p>
        </Rij>
        <Rij kop="Kadaster">92 m², bouwjaar 1974, appartement</Rij>
        <Rij kop="Indicatie">De familie zag € 1.850 tot € 2.350</Rij>
      </dl>
      <div className="border-t border-mist bg-creme/50 px-5 py-4">
        <p className="text-sm font-semibold text-zwart mb-1.5">Concept: jij leest het na en verstuurt</p>
        <p className="text-sm text-zwart leading-relaxed">
          Beste mevrouw Bakker, dank voor uw aanvraag en de foto's. Mag ik u morgen bellen om een bezichtiging te plannen? Daarna spreken we een vaste prijs met u af.
        </p>
      </div>
    </figure>
  );
}

export function Prijsindicatie() {
  return (
    <Layout>
      <SEO
        title="Prijsindicatie met foto's voor ontruimers"
        description="Een aanvraagpagina op je eigen site: families maken foto's per kamer, de AI telt wat er staat en jouw eigen tarieven maken er een prijsindicatie van."
        path="/prijsindicatie"
      />

      {/* OPENING */}
      <section className="bg-bot text-zwart">
        <div className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center pt-14 pb-16 md:pt-16 md:pb-20 lg:min-h-[calc(100dvh-4.5rem)]">
          <div className="lg:col-span-7">
            <h1 data-onthul className="text-display max-w-[13ch]">
              Weet wat er staat, voordat je gaat kijken<Punt />
            </h1>
            <p data-onthul data-vertraging="80" className="mt-7 text-lead text-grijs leading-relaxed max-w-[50ch]">
              Een aanvraagpagina op je eigen site. Families maken foto's per kamer, de AI telt wat er staat en jouw eigen tarieven maken er een prijsindicatie van. Jij krijgt een complete aanvraag.
            </p>
            <div data-onthul data-vertraging="150" className="mt-8 flex flex-wrap gap-3">
              <Link to={GESPREK} className={knopPrimair}>
                Plan een gesprek
              </Link>
              <a href="tel:+31643122575" className={knopSecundair}>
                Bel Tom: 06-43122575
              </a>
            </div>
          </div>
          <div data-onthul data-vertraging="200" className="lg:col-span-5 min-w-0">
            <UitslagKaart />
          </div>
        </div>
        <Veeg />
      </section>

      {/* HERKEN JE DIT */}
      <section className="bg-zwart text-bot py-24 md:py-32">
        <div className="wrap">
          <SectieKop donker titel="Herken je dit?" />
          <ol data-onthul-kinderen className="grid md:grid-cols-2 gap-x-16 gap-y-14">
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

      {/* ZO WERKT HET VOOR DE FAMILIE */}
      <section className="wrap py-24 md:py-32" aria-labelledby="voor-de-familie">
        <SectieKop id="voor-de-familie" titel={<>Zo werkt het voor de familie<Punt /></>} regel="Ongeveer vijf minuten, op de telefoon." />
        <ol data-onthul-kinderen className="relative grid gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          <span data-onthul="lijn" className="absolute left-[4px] top-2 bottom-2 w-px bg-zilver lg:left-0 lg:right-0 lg:top-[4px] lg:bottom-auto lg:h-px lg:w-auto" aria-hidden="true" />
          {STAPPEN.map((s, i) => (
            <li key={s.titel} className="relative pl-10 lg:pl-0 lg:pt-12">
              <span className="absolute left-0 top-1.5 size-[9px] rounded-full bg-vermiljoen lg:top-0" aria-hidden="true" />
              <span className="block text-sm text-groen-mid tabular-nums mb-2">Stap {i + 1}</span>
              <h3 className="font-serif text-[clamp(1.75rem,0.8vw+1.4rem,2.25rem)] font-normal leading-tight mb-3">{s.titel}</h3>
              <p className="text-grijs leading-relaxed">{s.tekst}</p>
            </li>
          ))}
        </ol>
        <p data-onthul className="mt-14">
          <Link to="/demo-prijsindicatie" className={tekstLink}>
            Probeer het zelf in de demo
          </Link>
        </p>
      </section>

      {/* FOTO'S */}
      <section className="bg-steen py-24 md:py-32">
        <div data-onthul-kinderen className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-section mb-8">Foto's die genoeg laten zien</h2>
            <div className="space-y-5 text-lead text-grijs leading-relaxed max-w-[52ch]">
              <p>De indicatie is zo goed als de foto's. Daarom laten we de familie niet zomaar uploaden.</p>
              <p>De pagina loopt kamer voor kamer en vraagt per ruimte 2 tot 4 foto's, met een voorbeeldfoto erbij. Een foto die te donker of onscherp is, wordt direct opnieuw gevraagd.</p>
              <p>Daarna kijkt de AI of de hele kamer in beeld is. Mist er iets, dan krijgt de familie een concrete vraag, zoals "maak nog een foto van de linkerwand van de slaapkamer".</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <figure className="rounded-xl bg-bot p-6 md:p-8">
              <figcaption className="text-sm font-semibold text-groen-mid mb-5">Dit leest de familie</figcaption>
              <ul className="divide-y divide-lijn">
                {INSTRUCTIE.map((regel) => (
                  <li key={regel} className="py-3 first:pt-0 last:pb-0 text-zwart leading-relaxed">
                    {regel}
                  </li>
                ))}
              </ul>
            </figure>
            <p className="mt-6 text-grijs leading-relaxed">Wie geen foto's kan maken, kiest liever een bezichtiging. Die aanvraag komt gewoon bij je binnen.</p>
          </div>
        </div>
      </section>

      {/* JOUW PRIJZEN */}
      <section className="bg-zwart-2 text-creme py-24 md:py-32">
        <div className="wrap">
          <p className="text-lead text-zilver-licht mb-6" data-onthul>Jouw prijzen, niet de onze</p>
          <h2 data-onthul className="text-display max-w-[17ch]">De AI telt de spullen. De prijs komt uit jouw tabel<Punt /></h2>
          <p data-onthul className="mt-8 text-lead text-zilver-licht leading-relaxed max-w-[56ch]">
            De AI schat alleen hoeveel er staat, in m³. Elk bedrag komt uit de tarieventabel die je zelf invult.
          </p>
          <ul data-onthul-kinderen className="mt-14 grid md:grid-cols-2 gap-x-16 border-b border-lijn-donker">
            {TARIEVEN.map((t) => (
              <li key={t} className="border-t border-lijn-donker py-4 text-bot leading-relaxed">
                {t}
              </li>
            ))}
          </ul>
          <div data-onthul-kinderen className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-10">
            {ZEKERHEDEN.map((z) => (
              <div key={z.titel}>
                <h3 className="font-serif font-normal text-[clamp(1.75rem,1vw+1.4rem,2.25rem)] leading-tight mb-2">{z.titel}</h3>
                <p className="text-zilver-licht leading-relaxed">{z.tekst}</p>
              </div>
            ))}
          </div>
          <p data-onthul className="mt-16 text-lead text-bot leading-relaxed max-w-[58ch]">
            Bij de start vullen we de tabel samen met je in en rekenen we hem na op je eigen afgeronde klussen.
          </p>
        </div>
      </section>

      {/* WAT JIJ BINNENKRIJGT */}
      <section className="wrap py-24 md:py-32">
        <div data-onthul-kinderen className="grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-section mb-8">Wat jij binnenkrijgt</h2>
            <div className="space-y-5 text-lead text-grijs leading-relaxed max-w-[46ch]">
              <p>Alles staat in je mail en in je dashboard. Je bevestigt of past de indicatie aan voordat je belt.</p>
              <p>Na de klus vul je het echte volume en de eindprijs in. Zo rekent de pagina bij elke klus beter voor jouw bedrijf.</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 min-w-0">
            <AanvraagKaart />
          </div>
        </div>
      </section>

      {/* OP JE EIGEN SITE */}
      <section className="bg-steen py-24 md:py-32">
        <div className="wrap">
          <SectieKop titel="Op je eigen site, in je eigen stijl" regel="De pagina neemt je kleuren, je logo en je lettertype over." />
          <div data-onthul-kinderen className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {MANIEREN.map((m) => (
              <article key={m.naam} className="border-t border-zilver pt-6">
                <h3 className="font-serif font-normal text-[clamp(1.75rem,1vw+1.4rem,2.25rem)] leading-tight mb-3">{m.naam}</h3>
                <p className="text-zwart leading-relaxed">{m.hoe}</p>
                <p className="mt-2 text-grijs">Geschikt voor: {m.voor}</p>
              </article>
            ))}
          </div>
          <div data-onthul className="mt-14 space-y-4 text-lead text-grijs leading-relaxed max-w-[60ch]">
            <p>Aanvragen gaan naar je mail. Wie Google Ads gebruikt, krijgt elke aanvraag als conversie door. Een CRM of Google Sheet koppelen kan ook.</p>
            <p>We streven ernaar dat je binnen één werkdag na de intake live staat.</p>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="wrap py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-10">
          <h2 data-onthul className="lg:col-span-5 text-section">Privacy</h2>
          <ul data-onthul-kinderen className="lg:col-span-7 border-b border-lijn">
            {PRIVACY.map((p) => (
              <li key={p} className="border-t border-lijn py-4 text-lead text-zwart leading-relaxed">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAKKETTEN */}
      <section className="bg-creme py-24 md:py-32">
        <div className="wrap">
          <SectieKop titel="Pakketten" />
          <div data-onthul-kinderen className="grid md:grid-cols-3 gap-6">
            {PAKKETTEN.map((p) => (
              <article key={p.naam} className="flex flex-col rounded-xl bg-bot p-7 md:p-8">
                <h3 className="font-serif font-normal text-[clamp(2.25rem,1.6vw+1.5rem,3rem)] leading-none">{p.naam}</h3>
                <p className="mt-3 text-grijs leading-relaxed">{p.voor}</p>
                <ul className="mt-6 mb-8 divide-y divide-lijn border-y border-lijn">
                  {p.inhoud.map((regel) => (
                    <li key={regel} className="py-3 text-zwart leading-relaxed">
                      {regel}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto font-semibold text-zwart">Prijs in het eerste gesprek</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VRAGEN */}
      <section className="wrap py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
          <h2 data-onthul className="lg:col-span-5 text-section">Veelgestelde vragen</h2>
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

      {/* AFSLUITING */}
      <section className="bg-zwart-2 text-creme">
        <div data-onthul className="wrap py-24 md:py-32">
          <h2 className="text-display max-w-[14ch]">Laat je site het eerste werk doen<Punt /></h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={GESPREK} className={knopPrimairDonker}>
              Plan een gesprek
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
