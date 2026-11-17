import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Diensten } from "./pages/Diensten";
import { Ontruiming } from "./pages/Ontruiming";
import { DemoResponder } from "./pages/DemoResponder";
import { OverOns } from "./pages/OverOns";
import { Contact } from "./pages/Contact";
import { Privacybeleid } from "./pages/Privacybeleid";
import { AlgemeneVoorwaarden } from "./pages/AlgemeneVoorwaarden";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/ontruiming" element={<Ontruiming />} />
        <Route path="/demo-responder" element={<DemoResponder />} />
        <Route path="/prijzen" element={<Navigate to="/diensten" replace />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacybeleid" element={<Privacybeleid />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
