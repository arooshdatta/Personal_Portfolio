import React from 'react';
import { Layers } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-white/10 w-12 sm:w-32"></div>
            <Layers className="text-brand-primary" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold font-outfit">Technical <span className="text-brand-secondary">Skills</span></h2>
            <div className="h-px bg-white/10 w-12 sm:w-32"></div>
          </div>
          <p className="text-gray-400 max-w-2xl">A snapshot of the languages, frameworks, and tools I use to build scalable and intelligent applications.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 glass rounded-2xl flex items-center justify-center p-4 border border-white/5 group-hover:border-brand-primary/50 group-hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="mt-4 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
