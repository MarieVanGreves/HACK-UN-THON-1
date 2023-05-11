import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Blog from "./pages/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      
      <Footer />
    </Router>
  );

  
}

export default App;
