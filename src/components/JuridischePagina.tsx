import { Fragment, type ReactNode } from "react";
import { Layout } from "./Layout";
import { SEO } from "./SEO";
import { LegalArticle, LegalMeta } from "./LegalArticle";
import { tekstLink } from "./ui";
import type { JuridischDocument } from "../lib/juridisch";

/** Maakt van **tekst** vet, en van e-mailadressen en de Autoriteit Persoonsgegevens een link. De tekst zelf blijft letterlijk. */
function Opgemaakt({ tekst }: { tekst: string }) {
  const delen: ReactNode[] = [];
  tekst.split(/(\*\*[^*]+\*\*)/g).forEach((stuk, i) => {
    if (stuk.startsWith("**") && stuk.endsWith("**")) {
      delen.push(
        <strong key={i} className="font-semibold text-zwart">
          {stuk.slice(2, -2)}
        </strong>,
      );
      return;
    }
    stuk.split(/(info@brantomicsai\.nl|autoriteitpersoonsgegevens\.nl)/g).forEach((deel, j) => {
      if (deel === "info@brantomicsai.nl") {
        delen.push(
          <a key={`${i}-${j}`} href="mailto:info@brantomicsai.nl" className={tekstLink}>
            {deel}
          </a>,
        );
      } else if (deel === "autoriteitpersoonsgegevens.nl") {
        delen.push(
          <a key={`${i}-${j}`} href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noreferrer" className={tekstLink}>
            {deel}
          </a>,
        );
      } else if (deel) {
        delen.push(<Fragment key={`${i}-${j}`}>{deel}</Fragment>);
      }
    });
  });
  return <>{delen}</>;
}

export function JuridischePagina({ document: doc, seoTitel, pad }: { document: JuridischDocument; seoTitel: string; pad: string }) {
  return (
    <Layout>
      <SEO title={seoTitel} description={`${seoTitel} van Brantomics AI.`} path={pad} />
      <div className="wrap pt-8 md:pt-10 pb-10 md:pb-14">
        <div className="max-w-[46rem]">
          <h1 className="text-display-s mb-6">{doc.titel}</h1>
          <LegalMeta>
            {doc.meta.map((regel, i) => (
              <p key={regel} className={i === 0 ? "font-semibold text-zwart" : undefined}>
                <Opgemaakt tekst={regel} />
              </p>
            ))}
          </LegalMeta>
          {doc.artikelen.map((artikel) => (
            <LegalArticle key={artikel.num} num={artikel.num} title={artikel.titel}>
              {artikel.blokken.map((blok, i) => {
                if (blok.t === "sub") {
                  return (
                    <h3 key={i} className="pt-2 font-semibold text-zwart">
                      {blok.tekst}
                    </h3>
                  );
                }
                if (blok.t === "tabel") {
                  const [eerste, ...rest] = blok.kop;
                  return (
                    <div key={i} className="border-b border-lijn">
                      {blok.rijen.map((rij) => (
                        <div key={rij[0]} className="border-t border-lijn py-4">
                          <p className="font-semibold text-zwart">
                            <span className="sr-only">{eerste}: </span>
                            {rij[0]}
                          </p>
                          <dl className="mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-[7rem_minmax(0,1fr)]">
                            {rest.map((kolom, k) => (
                              <Fragment key={kolom}>
                                <dt className="text-sm text-grijs">{kolom}</dt>
                                <dd>{rij[k + 1]}</dd>
                              </Fragment>
                            ))}
                          </dl>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={i}>
                    <Opgemaakt tekst={blok.tekst} />
                  </p>
                );
              })}
            </LegalArticle>
          ))}
        </div>
      </div>
    </Layout>
  );
}
