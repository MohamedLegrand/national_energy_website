import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Accueil from "./pages/accueil/Accueil";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import Apropos from "./pages/apropos/Apropos";
import Mentions from "./pages/mentions/Mentions";
import Politiques from "./pages/politiques/Politiques";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/mentions" element={<Mentions />} />
            <Route path="/politiques" element={<Politiques />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;