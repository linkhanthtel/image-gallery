import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Support from "./pages/support";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
        <div>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          <Footer />
          </BrowserRouter>
        </div>
    
  );
}

export default App;
