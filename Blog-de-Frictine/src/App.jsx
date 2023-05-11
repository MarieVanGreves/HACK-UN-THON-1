import React from 'react';
import Home from "../src/pages/Accueil"
import styles from "../src/App.module.css"
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

  return (
    <div>
        <Home />
    </div>
  );
}

export default App;
