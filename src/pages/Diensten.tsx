import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { FotoVak, Punt, SectieKop, knopPrimairDonker, knopSecundairDonker, tekstLink } from "../components/ui";

type Dienst = { naam: string; tekst: string; link?: { to: string; label: string } };

const TIJD: Dienst[] = [
  {
    naam: "E-mails beantwoorden",
    tekst:
      "De Email Responder zet voor elke klantmail een concept-antwoord klaar in je eigen inbox, in jouw toon. Jij leest het na en drukt op verzenden. Klachten en twijfelgevallen krijgen een label, zodat je ze meteen ziet.",
    link: { to: "/demo-responder", label: "Probeer de demo" },
  },
  {
    naam: "Aanvragen opvolgen",
    tekst:
      "Een duidelijk aanvraagformulier of een prijsindicatie die bezoekers zelf invullen. Elke aanvraag komt meteen bij je binnen en in één overzicht, zodat er niets blijft liggen.",
  },
  {
    naam: "Reviews vragen",
    tekst:
      "Na een afgeronde klus krijgt je klant een nette vraag om een review. Voor nieuwe reviews zetten we een antwoord als concept klaar, dat jij goedkeurt.",
  },
];

const GEVONDEN: Dienst[] = [
  {
    naam: "Google Ads",
    tekst:
      "We zetten je campagnes op of nemen ze over, lopen ze elke week na en sturen je één keer per maand een helder bericht over wat er gebeurde. Wat geld kost, keur jij eerst goed.",
  },
  {
    naam: "Je website",
    tekst:
      "We verbeteren je bestaande site of bouwen een nieuwe: per dienst en per regio duidelijk wat je doet, en op elke pagina een makkelijke manier om aan te vragen.",
  },
  {
    naam: "Google Bedrijfsprofiel",
    tekst: "Een volledig en actueel profiel met recente reviews, zodat wie je in Google Maps vindt meteen ziet wat je doet en hoe je bereikbaar bent.",
  },
];

function Rijen({ diensten }: { diensten: Dienst[] }) {
  return (
    <div className="border-b border-lijn">
      {diensten.map((d) => (
        <div key={d.naam} className="grid md:grid-cols-12 gap-x-8 gap-y-3 border-t border-lijn py-10">
          <h3 className="md:col-span-4 font-serif font-normal text-[clamp(1.75rem,1.2vw+1.25rem,2.5rem)] leading-tight">{d.naam}</h3>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lead text-grijs leading-relaxed">{d.tekst}</p>
            {d.link && (
              <p className="mt-4">
                <Link to={d.link.to} className={tekstLink}>
                  {d.link.label}
                </Link>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Diensten() {
  return (
    <Layout>
      <SEO
        title="Diensten"
        description="Tijd besparen en beter gevonden worden: e-mails, aanvragen en reviews automatiseren, en Google Ads, je website en je Bedrijfsprofiel op orde. Voor ontruimers, verhuizers en vastgoed."
        path="/diensten"
      />
      <PageHero
        title={
          <>
            Tijd besparen.
            <br />
            Beter gevonden worden<Punt />
          </>
        }
        subtitle="Wat we bouwen voor ontruimers, verhuizers en vastgoedbedrijven, en voor elk bedrijf met veel aanvragen."
      />

      <section className="wrap py-24 md:py-28">
        <SectieKop titel="Tijd besparen" regel="Het handwerk rond klanten en aanvragen, klaargezet of overgenomen." />
        <Rijen diensten={TIJD} />
      </section>

      <section className="bg-steen py-24 md:py-28">
        <div className="wrap">
          <SectieKop titel="Beter gevonden worden" regel="Zichtbaar waar klanten zoeken, en makkelijk om contact op te nemen." />
          <Rijen diensten={GEVONDEN} />
        </div>
      </section>

      <section className="wrap py-24 md:py-28">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
          <FotoVak wat="Bram en Tom aan het werk bij een klant" className="lg:col-span-6 aspect-[4/3]" />
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-section mb-6">Iets anders dat steeds terugkomt?</h2>
            <p className="text-lead text-zwart leading-relaxed mb-6">
              Planningen, facturen, de vaste vragen aan de telefoon: vertel ons waar je tijd in gaat
              zitten. Dan kijken we eerlijk of AI daar iets aan kan doen, en wat het kost.
            </p>
            <ul className="space-y-2 text-grijs">
              <li>Alles in je eigen accounts, zodat jij eigenaar blijft.</li>
              <li>Wat geld kost of naar buiten gaat, keur jij eerst goed.</li>
              <li>Persoonlijk ingericht door Bram en Tom.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-zwart text-bot">
        <div className="wrap py-24 md:py-28 grid md:grid-cols-12 gap-x-8 gap-y-8 items-end">
          <div className="md:col-span-7">
            <h2 className="text-section">Welke past bij jou?</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lead text-grijs-licht leading-relaxed mb-8">
              Twijfel je? Plan een vrijblijvend gesprek. We kijken samen wat het meeste oplevert.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={knopPrimairDonker}>
                Plan een gesprek
              </Link>
              <a href="tel:+31643122575" className={knopSecundairDonker}>
                Bel Tom: 06-43122575
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
