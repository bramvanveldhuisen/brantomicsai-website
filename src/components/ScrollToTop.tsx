import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrollt naar boven bij elke route-wissel (react-router doet dit niet vanzelf). */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
