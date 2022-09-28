import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Kontakt from "./components/kontakt/kontakt";
import Projekti from "./components/projekti/projekti";
import ProjekatDetail from "./components/projekat-detail/projekat-detail";
import Onama from "./components/onama/onama";
import NasTim from "./components/nas-tim/nas-tim";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/reference" element={<Projekti />} />
          <Route path="/reference/:param" element={<ProjekatDetail />} />
          <Route path="/o-nama" element={<Onama />} />
          <Route path="/nas-tim" element={<NasTim />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
