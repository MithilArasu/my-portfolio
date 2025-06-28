import React from 'react';
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ArtGallery from "./pages/ArtGallery";
import Marathon from "./pages/Marathon";

import Skills from "./pages/Skills";
import ResumeAndContact from './pages/ResumeAndContact';


function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ArtGallery />
      <Marathon />
      <ResumeAndContact />
      <Footer />
    </>
  );
}

export default App;
