import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import Blog from "./pages/Blog";

function App() {



    return (
        <Router>
            <div className={styles.appBackground}>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/" element={<Blog />} />
                </Routes>


            </div>
        </Router>
    )
}

export default App;
