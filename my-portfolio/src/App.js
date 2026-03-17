import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/project";  // Capital P to match file
import Skills from "./components/Skills";
import Services from "./components/Services";
import Certification from "./components/Certification";
// import Certification from "./components/Certification"; // Uncomment if you add it later
import Blog from "./components/Blog";

import Footer from "./components/Footer";
import Section from "./components/Section";

import "./App.css";

function App() {
  return (
     <div>
      <Navbar />

      <Section>
        <Hero />
      </Section>

      <Section>
        <About />
      </Section>

      <Section>
        <Project />
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Services />
      </Section>

      <Section>
        <Certification />
      </Section>

      <Section>
        <Blog />
      </Section>

      <Section>
        <Footer />
      </Section>
    </div>
  );
}

export default App;