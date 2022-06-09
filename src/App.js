import './App.css';
import React from "react";
import About from "./pages/AboutMe";
import Contact from "./pages/ContactMe";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/Portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/Contact"
            element={<Contact />}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
