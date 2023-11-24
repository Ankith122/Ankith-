import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/js/Navbar.js";
import Home from "./components/js/Home.js";
import About from "./components/js/About.js";
import Skills from "./components/js/Skills.js";
import Project from "./components/js/Project.js";
import Contact from "./components/js/Contact.js";
import Skill from "./components/js/Skill.js";
import Footer from "./components/js/Footer.js";

function App() {
  return (
    <>
      <div className="navbar">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            </Routes> 
            <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
