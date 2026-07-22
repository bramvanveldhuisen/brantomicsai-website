import { useState } from "react";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { CheckItem } from "../components/ui";

export function Contact() {
  const [charCount, setCharCount] = useState(0);

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Neem contact op met Brantomics AI. Vul het intakeformulier in of bel Tom direct op 06-43122575. Eerste week gratis."
        path="/contact"
      />
      <PageHero
        eyebrow="Neem contact op"
        title={
          <>
            Klaar om te starten?
            <br />
            Wij horen graag van je.
          </>
        }
        subtitle="Vul het formulier in en we nemen binnen één werkdag contact op. Of bel Tom direct — hij helpt je snel op weg."
      />

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
          {/* Form */}
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSc14YbvxKvAqC-NUDzxHbY3ESTnTYwV8Q7OeeKW1IUdjAu-aw/viewform"
            method="GET"
            target="_blank"
            className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="naam" className="block text-xs font-semibold text-muted mb-1.5">
                  Naam
                </label>
                <input id="naam" name="naam" type="text" required placeholder="Jouw naam" className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50" />
              </div>
              <div>
                <label htmlFor="bedrijf" className="block text-xs font-semibold text-muted mb-1.5">
                  Bedrijfsnaam
                </label>
                <input id="bedrijf" name="bedrijf" type="text" required placeholder="Naam van je bedrijf" className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-muted mb-1.5">
                  E-mailadres
                </label>
                <input id="email" name="email" type="email" required placeholder="jij@bedrijf.nl" className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50" />
              </div>
              <div>
                <label htmlFor="telefoon" className="block text-xs font-semibold text-muted mb-1.5">
                  Telefoonnummer
                </label>
                <input id="telefoon" name="telefoon" type="tel" placeholder="06-12345678" className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50" />
              </div>
            </div>

            <div>
              <label htmlFor="sector" className="block text-xs font-semibold text-muted mb-1.5">
                Sector
              </label>
              <select id="sector" name="sector" className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50 bg-white">
                <option value="">Selecteer jouw sector...</option>
                <option value="Webshop">Webshop / E-commerce</option>
                <option value="Camping/Recreatie">Camping / Recreatie</option>
                <option value="Verhuur">Verhuur (auto, boot, vakantiewoning)</option>
                <option value="Horeca">Horeca (restaurant, café, hotel)</option>
                <option value="Makelaar">Makelaar</option>
                <option value="Kapper/Beauty">Kapper / Beauty / Wellness</option>
                <option value="Bouw">Bouw / Installatie</option>
                <option value="IT">IT / Software</option>
                <option value="Zorg">Zorg / Gezondheid</option>
                <option value="Anders">Anders</option>
              </select>
            </div>

            <div>
              <span className="block text-xs font-semibold text-muted mb-1.5">Interesse in</span>
              <div className="flex flex-wrap gap-4 text-sm text-ink/85">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="interesse" value="Email Responder" />
                  Email Responder
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="interesse" value="Bestel Assistent" />
                  Bestel Assistent
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="interesse" value="Beide" defaultChecked />
                  Beide
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="emails-dag" className="block text-xs font-semibold text-muted mb-1.5">
                Emails per dag (bij benadering)
              </label>
              <select id="emails-dag" name="emails-dag" className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50 bg-white">
                <option value="">Selecteer...</option>
                <option value="Minder dan 10">Minder dan 10</option>
                <option value="10-30">10–30 emails per dag</option>
                <option value="30-100">30–100 emails per dag</option>
                <option value="Meer dan 100">Meer dan 100 emails per dag</option>
              </select>
            </div>

            <div>
              <label htmlFor="uitdaging" className="block text-xs font-semibold text-muted mb-1.5">
                Grootste uitdaging <span className="font-normal text-muted/70">(optioneel)</span>
              </label>
              <textarea
                id="uitdaging"
                name="uitdaging"
                rows={4}
                maxLength={200}
                onChange={(e) => setCharCount(e.target.value.length)}
                placeholder="Bijv. het kost me elke ochtend een uur voor ik aan echte werk toekom..."
                className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blue/50 resize-none"
              />
              <div className="text-right text-[11px] text-muted/70 mt-1">{charCount} / 200</div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white font-semibold px-6 py-3.5 hover:bg-blue transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Verstuur aanmelding — eerste week gratis
              </button>
              <p className="text-xs text-muted text-center mt-2.5">
                Geen creditcard. Geen verplichtingen. Reactie binnen één werkdag.
              </p>
            </div>
          </form>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm p-7">
              <div className="text-sm font-bold text-navy mb-5">Direct contact</div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="size-9 shrink-0 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Bellen (Tom)</div>
                    <a href="tel:+31643122575" className="text-sm font-semibold text-navy hover:text-blue">
                      06-43122575
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-9 shrink-0 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted">E-mail</div>
                    <a href="mailto:info@brantomicsai.nl" className="text-sm font-semibold text-navy hover:text-blue">
                      info@brantomicsai.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-9 shrink-0 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Reactietijd</div>
                    <div className="text-sm font-semibold text-navy">Binnen 3 werkdagen</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue/20 bg-blue/5 p-7">
              <div className="text-sm font-bold text-navy mb-4">Wat je kunt verwachten</div>
              <ul className="space-y-3">
                <CheckItem>Intake gesprek om te begrijpen wat bij jou past</CheckItem>
                <CheckItem>Persoonlijke installatie door Bram</CheckItem>
                <CheckItem>Eerste week gratis — geen risico</CheckItem>
                <CheckItem>Live binnen één werkdag na akkoord</CheckItem>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm p-7">
              <div className="text-sm font-bold text-navy mb-3">Bedrijfsgegevens</div>
              <div className="space-y-1.5 text-sm text-muted">
                <div>Brantomics AI</div>
                <div>KVK: 42032331</div>
                <div>BTW: NL869394964B01</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
