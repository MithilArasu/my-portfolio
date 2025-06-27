import React from 'react';
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ArtGallery from "./pages/ArtGallery";
import Marathon from "./pages/Marathon";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <ArtGallery />
      <Marathon />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
