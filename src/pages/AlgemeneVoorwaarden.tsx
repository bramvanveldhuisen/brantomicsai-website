import { JuridischePagina } from "../components/JuridischePagina";
import { ALGEMENE_VOORWAARDEN } from "../lib/juridisch";

export function AlgemeneVoorwaarden() {
  return <JuridischePagina document={ALGEMENE_VOORWAARDEN} seoTitel="Algemene Voorwaarden" pad="/algemene-voorwaarden" />;
}
