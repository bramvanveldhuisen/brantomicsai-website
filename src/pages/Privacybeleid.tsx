import { JuridischePagina } from "../components/JuridischePagina";
import { PRIVACYBELEID } from "../lib/juridisch";

export function Privacybeleid() {
  return <JuridischePagina document={PRIVACYBELEID} seoTitel="Privacybeleid" pad="/privacybeleid" />;
}
