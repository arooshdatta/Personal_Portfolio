import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

// Load available assets and prefer `image 4.jpeg` for the background watermark
const assets = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
const experienceBgImage = assets['../assets/image 4.jpeg'] || assets['../assets/image-4.jpeg'] || assets['../assets/image_4.jpeg'] || assets['../assets/hero.png'] || Object.values(assets)[0];

const Experience = () => {
  const experiences = [
    {
      role: 'Creative Lead',
      company: 'Fine Arts Club, VIT Bhopal',
      date: 'Feb 2025 - Present',
      description: 'Managed event documentation and digital content for major college cultural fests, coordinating with a team of 10+ members. Streamlined communication channels between the design and executive teams, ensuring timely project delivery.',
      type: 'experience',
      icon: <Briefcase size={20} />
    },
    {
      role: 'Technical Content Strategist',
      company: 'BashCraft Club (Linux & DevOps)',
      date: 'Dec 2024 - Present',
      description: 'Curated technical blogs and documentation on Linux commands and shell scripting, simplifying complex concepts for 500+ student members. Spearheaded the content strategy for the club\'s "Bash Series," increasing social media engagement by 20%.',
      type: 'experience',
      icon: <Briefcase size={20} />
    },
    {
      role: 'B.E. Computer Science',
      company: 'Vellore Institute of Technology',
      date: 'Sep 2024 - Present',
      description: 'GPA: 8.33. Focused on Data Structures & Algorithms, OOP, and Distributed Systems.',
      type: 'education',
      icon: <GraduationCap size={20} />
    },
    {
      role: 'Intermediate (Class XII)',
      company: 'Lucknow Public School',
      date: '2023 - 2024',
      description: 'Percentage: 89.57%. Strong foundation in Mathematics and Sciences.',
      type: 'education',
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background waves/glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cGF0aCBkPSJNMCA1MCBRIDI1MCAxMDAgNTAwIDUwIFQgMTAwMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDIxMCwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTAgNTAgUSAyNTAgMCA1MDAgNTAgVCAxMDAwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTgsIDEyMywgMjEzLCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')] bg-no-repeat bg-cover opacity-30 pointer-events-none -z-10"></div>

      {/* Subtle background watermark texture */}
      <img
        src={experienceBgImage}
        alt="Background texture"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none mix-blend-overlay z-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-brand-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">Experience & <span className="text-brand-primary">Education</span></h2>
          <div className="h-px bg-white/10 flex-1 ml-4"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(0,210,255,0.5)]"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-bg-card rounded-full border-2 border-brand-primary -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] transition-all duration-300 text-brand-primary">
                  {item.icon}
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-brand-primary/40 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-primary to-brand-secondary"></div>
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold mb-3 tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <h4 className="text-brand-secondary font-medium mb-4">{item.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
