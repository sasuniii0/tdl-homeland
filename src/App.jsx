import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about"      element={<About />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
