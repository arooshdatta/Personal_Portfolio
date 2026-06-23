import React, { useState, useEffect } from 'react';
import BackToTop from './components/BackToTop';
import MouseGlow from "./components/MouseGlow";
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
const [loading, setLoading] = useState(true);
if (loading) {
  return <LoadingScreen onFinish={() => setLoading(false)} />;
}

return (
    <div className="min-h-screen bg-bg-dark text-text-main font-inter">
      <ScrollProgress />
      <MouseGlow /> 
      <BackToTop />
       <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
