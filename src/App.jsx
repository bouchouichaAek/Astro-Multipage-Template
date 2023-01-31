import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Blogger from "./pages/Blogger/Blogger";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/bouchouichaAek.github.io/Astro-Multipage-Template/Astro-Multipage-Template/"
          element={<HomePage />}
        />
        <Route
          path="/bouchouichaAek.github.io/Astro-Multipage-Template/Astro-Multipage-Template//services"
          element={<ServicesPage />}
        />
        <Route
          path="/bouchouichaAek.github.io/Astro-Multipage-Template/about"
          element={<AboutPage />}
        />
        <Route
          path="/bouchouichaAek.github.io/Astro-Multipage-Template/blog"
          element={<Blogger />}
        />
        <Route
          path="/bouchouichaAek.github.io/Astro-Multipage-Template/contact"
          element={<ContactPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
