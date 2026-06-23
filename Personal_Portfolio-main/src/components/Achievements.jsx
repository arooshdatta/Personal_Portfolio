import React from 'react';
import { Award, Star, Code2, Medal, Trophy } from 'lucide-react';

// Load available assets and prefer `image 2.jpeg` if present
const assets = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
const achievementImage = assets['../assets/image 2.jpeg'] || assets['../assets/image-2.jpeg'] || assets['../assets/image_2.jpeg'] || assets['../assets/hero.png'] || Object.values(assets)[0];

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={28} />,
      title: 'LeetCode | Rating: 1503 (Max)',
      desc: 'Solved 230+ DSA problems, focusing on Graphs & DP. Consistent solver.'
    },
    {
      icon: <Medal className="text-gray-300" size={28} />,
      title: '3rd Position',
      desc: 'Rapid Coding Contest (Mozilla Firefox Club): Optimized algorithms under 45 mins.'
    },
    {
      icon: <Star className="text-brand-primary" size={28} />,
      title: 'Top Performer',
      desc: 'Dawn of Code (MERN Stack Club): Solved complex backend integration challenges.'
    },
    {
      icon: <Code2 className="text-purple-400" size={28} />,
      title: 'Participant',
      desc: "Summer of Code Fest '25 (GSoC Club): Contributed to open-source problem statements."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <Trophy className="text-yellow-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">Achievements & <span className="text-brand-primary">Honors</span></h2>
          <div className="h-px bg-white/10 flex-1 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-full max-w-[520px] h-[360px] bg-brand-primary/20 rounded-[36px] blur-[80px] animate-pulse"></div>
            <div className="relative glass p-6 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,210,255,0.2)] flex items-center justify-center">
              <img
                src={achievementImage}
                alt="Achievement"
                className="w-full max-w-[500px] h-auto aspect-[4/3] object-cover rounded-2xl border border-brand-primary/30 shadow-[0_0_40px_rgba(0,210,255,0.15)] transition-transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
