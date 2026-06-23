import React, { useState } from 'react';
import { User, GraduationCap, Code2, Trophy, Flame } from 'lucide-react';
import WhoAmIModal from './WhoAmIModal';
const About = () => {
  const [openTerminal, setOpenTerminal] = useState(false);
  const stats = [
    {
      icon: <GraduationCap className="text-brand-primary" size={32} />,
      title: 'BTech CSE',
      subtitle: 'VIT Bhopal',
    },
    {
      icon: <Code2 className="text-brand-secondary" size={32} />,
      title: '3+ Projects',
      subtitle: 'Full Stack & ML',
    },
    {
      icon: <Trophy className="text-yellow-400" size={32} />,
      title: '1500+ Rating',
      subtitle: 'LeetCode',
    },
    {
      icon: <Flame className="text-red-400" size={32} />,
      title: 'Always',
      subtitle: 'Learning',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <User className="text-brand-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">About <span className="text-brand-primary">Me</span></h2>
          <div className="h-px bg-white/10 flex-1 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="glass p-8 rounded-2xl border-neon relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a B.E. Computer Science student at Vellore Institute of Technology who loves coding, algorithmic problem solving, and building impactful products.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                I enjoy exploring Software Engineering, Distributed Systems, and Data-driven solutions. With a strong foundation in Data Structures and Algorithms, I consistently push myself to write efficient, scalable code.
              </p>
              <button
  onClick={() => setOpenTerminal(true)}
  className="group font-mono bg-[#0b0f14] border border-brand-primary/30 text-brand-primary px-7 py-4 rounded-xl hover:bg-brand-primary hover:text-black transition-all duration-300 hover:scale-105"
>
  $ whoami
</button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2">
                  <div className="mb-4 p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                    {stat.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1">{stat.title}</h3>
                  <p className="text-sm text-gray-400">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhoAmIModal
  open={openTerminal}
  onClose={() => setOpenTerminal(false)}
/>
    </section>
  );
};

export default About;
