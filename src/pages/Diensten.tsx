import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { CheckItem } from "../components/ui";

export function Diensten() {
  return (
    <Layout>
      <SEO
        title="Diensten"
        description="Email Responder en Bestel Assistent. AI-automatisering op maat voor webshops, horeca, campings en B2B-dienstverleners."
        path="/diensten"
      />
      <PageHero
        eyebrow="Wat we bieden"
        title={
          <>
            Twee gerichte AI-diensten
            <br />
            voor jouw bedrijf
          </>
        }
        subtitle="Geen generieke chatbot. Geen duur maatwerk. Gewoon slimme automatisering die werkt op dag één."
      />

      {/* DIENST 01 — EMAIL RESPONDER */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-blue mb-2">Dienst 01</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight mb-4">Email Responder</h2>
            <p className="text-muted leading-relaxed mb-6">
              Elke inkomende klantmail wordt automatisch beantwoord in jouw naam — met de juiste
              toon, de juiste informatie en een menselijk gevoel. Jij beslist of je de AI volledig
              laat sturen of elke reactie eerst goedkeurt.
            </p>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wide text-muted mb-1.5">Voor wie</div>
              <div className="text-sm text-ink/85">
                Bedrijven die regelmatig dezelfde soort emails ontvangen of versturen, en daar
                minder tijd aan willen besteden.
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <CheckItem>
                <strong className="text-navy">Nooit meer een email laten liggen</strong> — de AI
                beantwoordt dag en nacht, ook in het weekend en tijdens vakanties.
              </CheckItem>
              <CheckItem>
                <strong className="text-navy">Consistent merkgeluid</strong> — elke reactie past
                bij jouw schrijfstijl en is nooit generiek of afstandelijk.
              </CheckItem>
              <CheckItem>
                <strong className="text-navy">Minder tijd kwijt aan emails</strong> — die je kunt
                investeren in je werk, klanten of groei.
              </CheckItem>
              <CheckItem>
                <strong className="text-navy">Jij behoudt altijd de regie</strong> — stel in welke
                emails automatisch verstuurd worden en welke eerst ter controle aan jou worden
                aangeboden.
              </CheckItem>
            </ul>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-2xl font-extrabold text-navy">
                  &lt;<em className="not-italic">60</em>s
                </div>
                <div className="text-xs text-muted mt-0.5">Gem. reactietijd</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-navy">
                  <em className="not-italic">24</em>/7
                </div>
                <div className="text-xs text-muted mt-0.5">Beschikbaarheid</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-navy">∞</div>
                <div className="text-xs text-muted mt-0.5">Emails per maand</div>
              </div>
            </div>

            <Link
              to="/demo-responder"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-white font-semibold px-6 py-3 hover:bg-blue transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
                />
              </svg>
              Demo proberen
            </Link>
          </div>

          {/* Visual — inbox mockup */}
          <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border text-xs font-semibold text-ink/70">
              <span className="size-1.5 rounded-full bg-blue" />
              Inbox — Live voorbeeld
            </div>
            <div className="p-5 space-y-3">
              {[
                { name: "Boeking — Mark Willems", msg: "Kan ik volgende week een chalet huren?" },
                { name: "Klacht — Sandra de Bruin", msg: "Mijn bestelling klopt niet, ik wil een oplossing" },
                { name: "Informatieverzoek — Kevin Post", msg: "Wat zijn jullie openingstijden dit weekend?" },
              ].map((row) => (
                <div key={row.name} className="flex items-center gap-3 rounded-xl border border-border px-3.5 py-2.5">
                  <div className="size-8 shrink-0 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.981l7.5-4.039a2.25 2.25 0 012.134 0l7.5 4.039a2.25 2.25 0 011.183 1.98V19.5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-navy truncate">{row.name}</div>
                    <div className="text-xs text-muted truncate">{row.msg}</div>
                  </div>
                  <div className="shrink-0 rounded-full bg-success/10 text-success text-[11px] font-semibold px-2.5 py-1">
                    Beantwoord
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-xl border border-blue/25 bg-blue/5 px-3.5 py-2.5">
                <div className="size-8 shrink-0 rounded-lg bg-blue/20 flex items-center justify-center text-blue">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-blue truncate">AI bezig met beantwoorden...</div>
                  <div className="text-xs text-muted truncate">Annulering — Petra van Dijk</div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <span className="size-1.5 rounded-full bg-blue animate-pulse" />
                  <span className="size-1.5 rounded-full bg-blue animate-pulse [animation-delay:0.15s]" />
                  <span className="size-1.5 rounded-full bg-blue animate-pulse [animation-delay:0.3s]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIENST 02 — BESTEL ASSISTENT */}
      <section id="bestel-assistent" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Visual — bestelling mockup */}
          <div className="order-2 md:order-1 rounded-3xl border border-border bg-white/85 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border text-xs font-semibold text-ink/70">
              <span className="size-1.5 rounded-full bg-navy" />
              Hanos Shop — Klaargezet door de motor
            </div>
            <div className="p-5 space-y-3">
              {[
                { name: "Runderbouillon 5L", qty: "×6" },
                { name: "Pommes frites 10mm", qty: "×12" },
                { name: "Olijfolie extra vierge", qty: "×3" },
                { name: "Parmezaan 24m", qty: "×2" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between rounded-xl border border-border px-3.5 py-2.5">
                  <span className="text-sm text-ink/85">{row.name}</span>
                  <span className="text-sm font-semibold text-navy">{row.qty}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-sm text-muted">23 regels totaal</span>
                <span className="text-lg font-extrabold text-navy">€ 486,20</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-navy text-white text-sm font-semibold py-2.5"
                disabled
              >
                Goedkeuren &amp; bestellen
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="text-xs font-bold uppercase tracking-wide text-navy mb-2">Dienst 02</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight mb-0.5">Bestel Assistent</h2>
            <p className="text-xs font-medium text-muted mb-4">Powered by Brantomics Kitchen</p>
            <p className="text-muted leading-relaxed mb-6">
              Vul één lijstje in met wat je nodig hebt. Onze motor logt in bij je groothandel, zoekt
              elk product op en zet de bestelling klaar in het winkelmandje. Jij controleert en
              keurt per leverancier in twee tikken goed.
            </p>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wide text-muted mb-1.5">Voor wie</div>
              <div className="text-sm text-ink/85">
                Horecazaken en keukens die meerdere keren per week bij dezelfde groothandels
                bestellen en het handmatig overtypen beu zijn.
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <CheckItem>
                <strong className="text-navy">Werkt met elke groothandel</strong> — Hanos,
                Driessen, Sligro, Bidfood en meer, allemaal op één plek.
              </CheckItem>
              <CheckItem>
                <strong className="text-navy">Geen extensies of installaties</strong> — wij regelen
                de koppeling met je groothandel, jij hoeft niets te installeren.
              </CheckItem>
              <CheckItem>
                <strong className="text-navy">Twijfelgevallen worden gemarkeerd</strong> — onzekere
                producttreffers vraag je zelf even na, de rest gaat automatisch.
              </CheckItem>
              <CheckItem>
                <strong className="text-navy">Volledig kostenoverzicht</strong> — zie precies wat je
                per leverancier en per periode uitgeeft.
              </CheckItem>
            </ul>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-2xl font-extrabold text-navy">2</div>
                <div className="text-xs text-muted mt-0.5">Tikken om te bestellen</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-navy">4+</div>
                <div className="text-xs text-muted mt-0.5">Groothandels gedekt</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-navy">~10u</div>
                <div className="text-xs text-muted mt-0.5">Bespaard per maand</div>
              </div>
            </div>

            <a
              href="https://brantomicsaikitchen.nl/welkom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-white font-semibold px-6 py-3 hover:bg-blue transition-colors"
            >
              Bekijk de tool zelf
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center border-t border-border">
        <span className="block text-xs font-bold uppercase tracking-widest text-blue mb-3">Klaar om te starten?</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-4">Welke dienst past bij jou?</h2>
        <p className="text-lg text-muted mb-9 leading-relaxed">
          Twijfel je? Neem gewoon contact op. We kijken samen wat de beste oplossing is voor jouw
          bedrijf.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors">
            Vrijblijvend gesprek inplannen
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
