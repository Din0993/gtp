import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Kontakt from "./components/kontakt/kontakt";
import Projekti from "./components/projekti/projekti";
import ProjekatDetail from "./components/projekat-detail/projekat-detail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/projekti" element={<Projekti />} />
          <Route path="/projekti/:param" element={<ProjekatDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
