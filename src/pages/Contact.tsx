import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { CheckItem, Punt, knopPrimair, tekstLink } from "../components/ui";

const veld =
  "w-full min-h-12 rounded-lg border border-rand bg-bot px-4 text-base text-zwart placeholder:text-grijs " +
  "transition-[border-color] duration-200 hover:border-zwart disabled:opacity-55 disabled:cursor-not-allowed";

export function Contact() {
  const [charCount, setCharCount] = useState(0);
  // Een landingspagina kan de sector meegeven, bijv. /contact?sector=Ontruiming.
  const [params] = useSearchParams();
  const SECTOREN = ["Ontruiming", "Verhuizing", "Makelaar/Vastgoed", "Bouw", "Schoonmaak", "Anders"];
  const gevraagd = params.get("sector") ?? "";
  const startSector = SECTOREN.includes(gevraagd) ? gevraagd : "";

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Plan een vrijblijvend gesprek met brantomicsAI. Vul het formulier in of bel Tom direct op 06-43122575."
        path="/contact"
      />
      <PageHero
        title={
          <>
            Klaar om te starten?
            <br />
            Wij horen graag van je<Punt />
          </>
        }
        subtitle="Vul het formulier in en we nemen binnen één werkdag contact op. Of bel Tom direct: hij helpt je snel op weg."
      />

      <section className="wrap pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
          {/* Form */}
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSc14YbvxKvAqC-NUDzxHbY3ESTnTYwV8Q7OeeKW1IUdjAu-aw/viewform"
            method="GET"
            target="_blank"
            className="lg:col-span-7 min-w-0 rounded-lg border border-lijn bg-steen p-6 md:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-6">
              <div>
                <label htmlFor="naam" className="block text-sm font-semibold text-zwart mb-2">
                  Naam
                </label>
                <input id="naam" name="naam" type="text" required placeholder="Jouw naam" className={veld} />
              </div>
              <div>
                <label htmlFor="bedrijf" className="block text-sm font-semibold text-zwart mb-2">
                  Bedrijfsnaam
                </label>
                <input id="bedrijf" name="bedrijf" type="text" required placeholder="Naam van je bedrijf" className={veld} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zwart mb-2">
                  E-mailadres
                </label>
                <input id="email" name="email" type="email" required placeholder="jij@bedrijf.nl" className={veld} />
              </div>
              <div>
                <label htmlFor="telefoon" className="block text-sm font-semibold text-zwart mb-2">
                  Telefoonnummer
                </label>
                <input id="telefoon" name="telefoon" type="tel" placeholder="06-12345678" className={veld} />
              </div>
            </div>

            <div>
              <label htmlFor="sector" className="block text-sm font-semibold text-zwart mb-2">
                Sector
              </label>
              <select id="sector" name="sector" defaultValue={startSector} className={veld}>
                <option value="">Selecteer jouw sector…</option>
                <option value="Ontruiming">Ontruiming</option>
                <option value="Verhuizing">Verhuizing</option>
                <option value="Makelaar/Vastgoed">Makelaardij / vastgoedbeheer</option>
                <option value="Bouw">Bouw / renovatie / klussen</option>
                <option value="Schoonmaak">Schoonmaak / opleveren</option>
                <option value="Anders">Anders</option>
              </select>
            </div>

            <div>
              <span className="block text-sm font-semibold text-zwart mb-2">Waar wil je hulp bij?</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-zwart">
                <label className="inline-flex min-h-11 items-center gap-2.5 cursor-pointer">
                  <input className="size-5 accent-groen-mid" type="radio" name="interesse" value="Tijd besparen" />
                  Tijd besparen
                </label>
                <label className="inline-flex min-h-11 items-center gap-2.5 cursor-pointer">
                  <input className="size-5 accent-groen-mid" type="radio" name="interesse" value="Beter gevonden worden" />
                  Beter gevonden worden
                </label>
                <label className="inline-flex min-h-11 items-center gap-2.5 cursor-pointer">
                  <input className="size-5 accent-groen-mid" type="radio" name="interesse" value="Beide" defaultChecked />
                  Beide
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="uitdaging" className="block text-sm font-semibold text-zwart mb-2">
                Grootste uitdaging <span className="font-normal text-grijs">(optioneel)</span>
              </label>
              <textarea
                id="uitdaging"
                name="uitdaging"
                rows={4}
                maxLength={200}
                onChange={(e) => setCharCount(e.target.value.length)}
                placeholder="Bijv. het kost me elke ochtend een uur voor ik aan echte werk toekom…"
                className={`${veld} py-3 resize-y min-h-28`}
              />
              <div className="text-right text-sm text-grijs mt-1.5 tabular-nums" aria-live="polite">{charCount} / 200</div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className={`${knopPrimair} w-full`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                <span>Verstuur aanvraag</span>
              </button>
              <p className="text-sm text-grijs text-center mt-3">
                Vrijblijvend. Je hoort binnen één werkdag van ons.
              </p>
            </div>
          </form>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div>
              <h2 className="text-title text-zwart mb-6 break-words min-w-0 font-sans font-semibold tracking-normal leading-tight">Direct contact</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="size-10 shrink-0 rounded-full border border-lijn bg-steen flex items-center justify-center text-groen-mid">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-grijs">Bellen (Tom)</div>
                    <a href="tel:+31643122575" className={`text-lead ${tekstLink}`}>
                      06-43122575
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-10 shrink-0 rounded-full border border-lijn bg-steen flex items-center justify-center text-groen-mid">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-grijs">E-mail</div>
                    <a href="mailto:info@brantomicsai.nl" className={`text-lead ${tekstLink}`}>
                      info@brantomicsai.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-10 shrink-0 rounded-full border border-lijn bg-steen flex items-center justify-center text-groen-mid">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-grijs">Reactietijd</div>
                    <div className="text-lead font-semibold text-zwart">Binnen één werkdag</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-lijn pt-10">
              <h2 className="text-title text-zwart mb-5 break-words min-w-0 font-sans font-semibold tracking-normal leading-tight">Wat je kunt verwachten</h2>
              <ul className="space-y-3">
                <CheckItem>Een gesprek over waar je tijd verliest of klanten misloopt</CheckItem>
                <CheckItem>Een voorstel met wat we bouwen en wat het kost</CheckItem>
                <CheckItem>Alles persoonlijk ingericht door Bram en Tom</CheckItem>
              </ul>
            </div>

            <div className="border-t border-lijn pt-10">
              <h2 className="text-title text-zwart mb-4 break-words min-w-0 font-sans font-semibold tracking-normal leading-tight">Bedrijfsgegevens</h2>
              <div className="space-y-1 text-zwart tabular-nums">
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
