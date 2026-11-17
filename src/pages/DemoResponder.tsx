import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { Punt, knopPrimair, knopSecundair, knopPrimairDonker, tekstLink } from "../components/ui";
import { SEO } from "../components/SEO";
import { generateResponse, type Sector, type EmailType, type Stijl } from "../lib/responderDemo";
import { getDemoUsesLeft, registerDemoUse, MAX_USES } from "../lib/demoLimit";

const veld =
  "w-full min-h-12 rounded-lg border border-rand bg-bot px-4 text-base text-zwart placeholder:text-grijs " +
  "transition-[border-color] duration-200 hover:border-zwart";

export function DemoResponder() {
  const [bedrijfsnaam, setBedrijfsnaam] = useState("");
  const [sector, setSector] = useState<Sector>("Webshop");
  const [emailtype, setEmailtype] = useState<EmailType>("Boeking/Reservering");
  const [stijl, setStijl] = useState<Stijl>("Vriendelijk-zakelijk");
  const [status, setStatus] = useState<"empty" | "generating" | "done">("empty");
  const [result, setResult] = useState<{ subject: string; body: string } | null>(null);
  const [usesLeft, setUsesLeft] = useState(() => getDemoUsesLeft());

  function handleGenerate() {
    if (usesLeft <= 0) return;
    setStatus("generating");
    window.setTimeout(() => {
      setResult(generateResponse({ bedrijfsnaam, sector, emailtype, stijl }));
      setStatus("done");
      setUsesLeft(registerDemoUse());
    }, 900);
  }

  function reset() {
    setStatus("empty");
    setResult(null);
  }

  const limitReached = usesLeft <= 0 && status !== "generating";

  return (
    <Layout>
      <SEO
        title="Demo Email Responder"
        description="Probeer de Email Responder demo. Vul in en zie hoe Brantomics AI een professioneel, gepersonaliseerd antwoord genereert voor jouw bedrijf."
        path="/demo-responder"
      />
      <PageHero
        title={
          <>
            Zie de Email Responder
            <br />
            in actie<Punt />
          </>
        }
        subtitle="Vul je bedrijf in, kies de situatie en zie hoe de AI een professioneel antwoord opstelt, afgestemd op jouw sector en stijl."
      />

      <section className="wrap pb-24 md:pb-32">
        <div className="text-grijs tabular-nums mb-4" role="status">
          {usesLeft > 0
            ? `${usesLeft} van ${MAX_USES} demo-pogingen over`
            : "Je hebt het maximaal aantal demo-pogingen gebruikt"}
        </div>
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Form panel */}
          <div className="lg:col-span-5 rounded-lg border border-lijn bg-steen overflow-hidden">
            <h2 className="px-6 py-4 border-b border-lijn text-title text-zwart font-sans font-semibold tracking-normal leading-tight">Voer de gegevens in</h2>
            <div className="p-6 space-y-6">
              <div>
                <label htmlFor="bedrijfsnaam" className="block text-sm font-semibold text-zwart mb-2">
                  Jouw bedrijfsnaam
                </label>
                <input
                  id="bedrijfsnaam"
                  type="text"
                  value={bedrijfsnaam}
                  onChange={(e) => setBedrijfsnaam(e.target.value)}
                  placeholder="Bijv. Bloemenwebshop Vera"
                  className={veld}
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-semibold text-zwart mb-2">
                  Sector
                </label>
                <select
                  id="sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value as Sector)}
                  className={veld}
                >
                  <option>Webshop</option>
                  <option>Camping/Recreatie</option>
                  <option>Verhuur</option>
                  <option>Horeca</option>
                  <option>Makelaar</option>
                  <option>Kapper/Beauty</option>
                  <option>Anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="emailtype" className="block text-sm font-semibold text-zwart mb-2">
                  Type inkomende email
                </label>
                <select
                  id="emailtype"
                  value={emailtype}
                  onChange={(e) => setEmailtype(e.target.value as EmailType)}
                  className={veld}
                >
                  <option>Boeking/Reservering</option>
                  <option>Productvraag</option>
                  <option>Klacht</option>
                  <option>Informatieverzoek</option>
                  <option>Annulering</option>
                </select>
              </div>

              <div>
                <span className="block text-sm font-semibold text-zwart mb-2">Schrijfstijl</span>
                <div className="flex flex-wrap gap-2">
                  {(["Formeel", "Vriendelijk-zakelijk", "Informeel"] as Stijl[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStijl(s)}
                      aria-pressed={stijl === s}
                      className={`min-h-11 rounded-full px-4 font-semibold border transition-colors duration-200 active:translate-y-px ${
                        stijl === s ? "bg-zwart text-bot border-zwart" : "border-rand text-zwart bg-bot hover:border-zwart"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={status === "generating" || limitReached}
                className={`${knopPrimair} w-full`}
              >
                {limitReached ? "Limiet bereikt" : status === "generating" ? "Bezig…" : "Genereer antwoord"}
              </button>
              {limitReached && (
                <p className="text-grijs text-center">
                  Wil je dit ook voor jouw bedrijf?{" "}
                  <Link to="/contact" className={tekstLink}>
                    Neem contact op
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>

          {/* Output panel */}
          <div className="lg:col-span-7 rounded-lg border border-lijn bg-steen overflow-hidden flex flex-col" aria-live="polite">
            <h2 className="px-6 py-4 border-b border-lijn text-title text-zwart font-sans font-semibold tracking-normal leading-tight">Gegenereerd antwoord</h2>
            <div className="p-6 flex-1 flex flex-col">
              {status === "empty" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-grijs py-16">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-edge" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p>
                    Vul de gegevens links in en klik op <strong className="text-zwart">Genereer antwoord</strong> om te
                    starten.
                  </p>
                </div>
              )}
              {status === "generating" && (
                <div className="flex-1 flex flex-col items-center justify-center gap-3 text-grijs py-16">
                  <span className="size-6 rounded-full border-2 border-zwart/25 border-t-zilver animate-spin keep-motion" aria-hidden="true" />
                  AI stelt antwoord op…
                </div>
              )}
              {status === "done" && result && (
                <div className="flex-1 flex flex-col">
                  <div className="text-sm text-grijs mb-1">Onderwerp</div>
                  <div className="text-lead font-semibold text-zwart mb-5">{result.subject}</div>
                  <div className="flex-1 text-zwart leading-relaxed whitespace-pre-line">{result.body}</div>
                  <div className="flex flex-wrap gap-3 pt-6 mt-6 border-t border-lijn">
                    <Link
                      to="/contact"
                      className={knopPrimair}
                    >
                      Dit wil ik voor mijn bedrijf
                    </Link>
                    {usesLeft > 0 && (
                      <button
                        type="button"
                        onClick={reset}
                        className={knopSecundair}
                      >
                        Opnieuw proberen
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zwart text-bot">
        <div className="wrap py-24 md:py-28 grid md:grid-cols-12 gap-x-8 gap-y-8 items-end">
          <h2 className="md:col-span-7 text-section">Overtuigd? Zet het live voor jouw bedrijf.</h2>
          <div className="md:col-span-5">
            <p className="text-lead text-grijs-licht leading-relaxed mb-8">
              Binnen één werkdag operationeel. Eerste week volledig gratis, geen creditcard nodig.
            </p>
            <Link to="/contact" className={knopPrimairDonker}>
              Vrijblijvend aanmelden
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
