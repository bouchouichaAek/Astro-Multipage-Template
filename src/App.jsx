import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
