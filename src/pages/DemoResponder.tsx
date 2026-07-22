import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { generateResponse, type Sector, type EmailType, type Stijl } from "../lib/responderDemo";
import { getDemoUsesLeft, registerDemoUse, MAX_USES } from "../lib/demoLimit";

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
        eyebrow="Interactieve demo"
        title={
          <>
            Zie de Email Responder
            <br />
            in actie
          </>
        }
        subtitle="Vul je bedrijf in, kies de situatie en zie hoe de AI een professioneel antwoord opstelt — afgestemd op jouw sector en stijl."
      />

      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="text-center text-xs font-medium text-muted">
          {usesLeft > 0
            ? `${usesLeft} van ${MAX_USES} demo-pogingen over`
            : "Je hebt het maximaal aantal demo-pogingen gebruikt"}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Form panel */}
          <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border text-sm font-semibold text-navy">
              <span className="size-1.5 rounded-full bg-blue" />
              Voer de gegevens in
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label htmlFor="bedrijfsnaam" className="block text-xs font-semibold text-muted mb-1.5">
                  Jouw bedrijfsnaam
                </label>
                <input
                  id="bedrijfsnaam"
                  type="text"
                  value={bedrijfsnaam}
                  onChange={(e) => setBedrijfsnaam(e.target.value)}
                  placeholder="Bijv. Bloemenwebshop Vera"
                  className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-xs font-semibold text-muted mb-1.5">
                  Sector
                </label>
                <select
                  id="sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value as Sector)}
                  className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50 bg-white"
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
                <label htmlFor="emailtype" className="block text-xs font-semibold text-muted mb-1.5">
                  Type inkomende email
                </label>
                <select
                  id="emailtype"
                  value={emailtype}
                  onChange={(e) => setEmailtype(e.target.value as EmailType)}
                  className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50 bg-white"
                >
                  <option>Boeking/Reservering</option>
                  <option>Productvraag</option>
                  <option>Klacht</option>
                  <option>Informatieverzoek</option>
                  <option>Annulering</option>
                </select>
              </div>

              <div>
                <span className="block text-xs font-semibold text-muted mb-1.5">Schrijfstijl</span>
                <div className="flex flex-wrap gap-2">
                  {(["Formeel", "Vriendelijk-zakelijk", "Informeel"] as Stijl[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStijl(s)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-colors ${
                        stijl === s ? "bg-navy text-white border-navy" : "border-border text-ink/70 hover:border-blue/40"
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white font-semibold px-6 py-3 hover:bg-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {limitReached ? "Limiet bereikt" : status === "generating" ? "Bezig..." : "Genereer antwoord"}
              </button>
              {limitReached && (
                <p className="text-xs text-muted text-center">
                  Wil je dit ook voor jouw bedrijf?{" "}
                  <Link to="/contact" className="text-blue font-semibold hover:underline">
                    Neem contact op
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>

          {/* Output panel */}
          <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border text-sm font-semibold text-navy">
              <span className="size-1.5 rounded-full bg-success" />
              Gegenereerd antwoord
            </div>
            <div className="p-5 flex-1 flex flex-col">
              {status === "empty" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-sm text-muted py-12">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 opacity-40">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p>
                    Vul de gegevens links in en klik op <strong className="text-ink">Genereer antwoord</strong> om te
                    starten.
                  </p>
                </div>
              )}
              {status === "generating" && (
                <div className="flex-1 flex flex-col items-center justify-center gap-3 text-sm text-muted py-12">
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-blue animate-bounce [animation-delay:0s]" />
                    <span className="size-2 rounded-full bg-blue animate-bounce [animation-delay:0.15s]" />
                    <span className="size-2 rounded-full bg-blue animate-bounce [animation-delay:0.3s]" />
                  </div>
                  AI stelt antwoord op...
                </div>
              )}
              {status === "done" && result && (
                <div className="flex-1 flex flex-col">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">Onderwerp</div>
                  <div className="text-sm font-bold text-navy mb-4">{result.subject}</div>
                  <div className="flex-1 text-sm text-ink/85 leading-relaxed whitespace-pre-line">{result.body}</div>
                  <div className="flex gap-3 pt-5 mt-5 border-t border-border">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-semibold px-5 py-2.5 hover:bg-blue transition-colors"
                    >
                      Dit wil ik voor mijn bedrijf
                    </Link>
                    {usesLeft > 0 && (
                      <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center justify-center rounded-full border border-border text-sm font-semibold px-5 py-2.5 hover:border-blue/40 transition-colors"
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
      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-border">
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight mb-4">
          Overtuigd? Zet het live voor jouw bedrijf.
        </h2>
        <p className="text-lg text-muted mb-8 leading-relaxed">
          Binnen één werkdag operationeel. Eerste week volledig gratis, geen creditcard nodig.
        </p>
        <Link to="/contact" className="inline-flex rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors">
          Vrijblijvend aanmelden
        </Link>
      </section>
    </Layout>
  );
}
