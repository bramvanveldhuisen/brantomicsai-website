import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { ProductStroom } from "../components/ProductStroom";
import { UitslagKaart } from "../components/ProductMockups";
import { Punt, knopPrimairDonker, knopSecundairDonker, tekstLink } from "../components/ui";

const OVERIGE = [
  {
    naam: "Email Responder",
    tekst: "Voor elke klantmail staat een conceptantwoord klaar in je eigen inbox, in jouw toon. Jij leest het na en drukt op verzenden. Klachten en twijfelgevallen krijgen een label, zodat je ze meteen ziet. Je kunt de eerste week gratis proberen in je eigen inbox.",
    link: { to: "/demo-responder", label: "Probeer de demo" },
  },
  {
    naam: "Review-opvolging",
    tekst: "Na een afgeronde klus krijgt je klant een nette vraag om een review. Op nieuwe reviews staat een conceptantwoord klaar dat jij goedkeurt.",
    link: { to: "/contact", label: "Plan een gesprek" },
  },
];

export function Producten() {
  return (
    <Layout>
      <SEO
        title="Producten"
        description="Drie AI-producten voor bedrijven met veel aanvragen en klantvragen, gespecialiseerd in ontruiming: het prijsindicatie-systeem voor je eigen website, de Email Responder en review-opvolging."
        path="/producten"
      />
      <PageHero
        title={
          <>
            Minder regelwerk,
            <br />
            in drie producten<Punt />
          </>
        }
        subtitle="Vaste producten voor bedrijven met veel aanvragen en klantvragen, van ontruimers tot restaurants. Ze werken op je eigen website en in je eigen inbox."
      />

      <section data-onthul className="wrap py-10 md:py-12">
        <ProductStroom />
      </section>

      {/* HET BELANGRIJKSTE PRODUCT */}
      <section className="bg-zwart text-bot py-10 md:py-14">
        <div data-onthul-kinderen className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-7 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-display">
              Prijsindicatie-systeem<Punt />
            </h2>
            <p className="mt-6 text-title font-semibold text-bot">Ons belangrijkste product.</p>
            <p className="mt-4 text-lead text-grijs-licht leading-relaxed max-w-[50ch]">
              Je klant wil niet wachten op een offerte. Met één regel code staat het op je eigen website. Je klanten maken foto’s per kamer, de AI schat in wat er staat en jouw eigen tarieven maken er een prijsindicatie van. Gemaakt voor ontruimers; voor branches met soortgelijke diensten bouwen we het ook.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/demo-prijsindicatie" className={knopPrimairDonker}>
                Bekijk de demo
              </Link>
              <Link to="/prijsindicatie" className={knopSecundairDonker}>
                Zo werkt het
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 min-w-0">
            <UitslagKaart />
          </div>
        </div>
      </section>

      {/* DE ANDERE TWEE */}
      <section className="wrap py-10 md:py-14">
        <div data-onthul-kinderen className="grid md:grid-cols-2 gap-6">
          {OVERIGE.map((p) => (
            <article
              key={p.naam}
              className="flex flex-col rounded-xl bg-creme p-8 md:p-10 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--color-zwart)_40%,transparent)]"
            >
              <h2 className="text-display-s mb-5">{p.naam}</h2>
              <p className="text-lead text-grijs leading-relaxed max-w-[48ch] mb-8">{p.tekst}</p>
              <p className="mt-auto">
                <Link to={p.link.to} className={tekstLink}>
                  {p.link.label}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-zwart-2 text-bot">
        <div data-onthul className="wrap py-10 md:py-14">
          <h2 className="text-section mb-6">Welke past bij jou?</h2>
          <div className="max-w-[58ch]">
            <p className="text-lead text-grijs-licht leading-relaxed mb-8">Twijfel je? Plan een vrijblijvend gesprek. We kijken samen wat het meeste oplevert.</p>
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
