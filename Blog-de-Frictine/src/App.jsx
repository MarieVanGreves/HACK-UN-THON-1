// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./App.module.css";
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
