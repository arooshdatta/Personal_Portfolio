import React, { useState } from 'react';
import { ArrowRight, Send, Globe, Briefcase, Code } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import JudgeModal from './JudgeModal';
// Dynamically load available assets and prefer named JPEGs if present
const assets = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
const imageSrc = assets['../assets/image 1.jpeg'] || assets['../assets/image 3.jpeg'] || assets['../assets/hero.png'] || Object.values(assets)[0];
const Hero = () => {
  const [showJudgeModal, setShowJudgeModal] = useState(false);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-brand-primary font-medium tracking-wider uppercase mb-4 tracking-[0.2em] text-sm">
            Hi, I'm
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold font-outfit mb-4 text-glow leading-tight">
            Aroosh Datta <span className="text-brand-primary opacity-50">{'{ }'}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-outfit mb-6">
            <TypeAnimation
             sequence={[
  "Software Engineer",
  2000,
  "230+ LeetCode Problems Solved",
  2000,
  "Distributed Systems Builder",
  2000,
  "Open Source Contributor",
  2000,
  "AI & ML Enthusiast",
  2000,
]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-brand-primary font-semibold"
  />
</h2>
          <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 text-lg leading-relaxed">
            I build intelligent, user-centric digital experiences and solve complex algorithmic problems. Turning ideas into <span className="text-brand-primary">impactful solutions</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a href="#projects" className="group flex items-center justify-center gap-2 bg-brand-primary text-bg-dark px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center justify-center gap-2 border border-white/20 px-8 py-3 rounded-full font-semibold hover:border-brand-primary hover:text-brand-primary transition-all duration-300 w-full sm:w-auto">
              Contact Me
              <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
  onClick={() => setShowJudgeModal(true)}
  className="group border border-brand-primary/30 bg-brand-primary/10 text-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-black transition-all duration-300 hover:scale-105"
>
  ✨ What Makes This Different?
</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto lg:mx-0">

  <div className="text-center lg:text-left">
    <h3 className="text-3xl font-bold text-brand-primary">230+</h3>
    <p className="text-gray-400 text-sm">DSA Problems</p>
  </div>

  <div className="text-center lg:text-left">
    <h3 className="text-3xl font-bold text-brand-primary">3+</h3>
    <p className="text-gray-400 text-sm">Major Projects</p>
  </div>

  <div className="text-center lg:text-left">
    <h3 className="text-3xl font-bold text-brand-primary">8.33</h3>
    <p className="text-gray-400 text-sm">CGPA</p>
  </div>

  <div className="text-center lg:text-left">
    <h3 className="text-3xl font-bold text-brand-primary">3rd</h3>
    <p className="text-gray-400 text-sm">Coding Contest</p>
  </div>

</div>
</div>
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            {/* The actual image container */}
            <div className="absolute inset-2 border-2 border-brand-primary/50 rounded-full overflow-hidden p-2 glass">
              <div className="w-full h-full rounded-full bg-bg-card overflow-hidden group">
                <img
                  src={imageSrc}
                  alt="Aroosh Datta"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-10 right-0 bg-bg-card border border-white/10 px-4 py-2 rounded-2xl glass flex items-center gap-2 shadow-xl shadow-brand-primary/10">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold">Available for work</span>
            </div>
          </div>
        </div>
      </div>
      <JudgeModal
  open={showJudgeModal}
  onClose={() => setShowJudgeModal(false)}
/>
    </section>
  );
};

export default Hero;
