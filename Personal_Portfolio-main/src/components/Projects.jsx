import React from 'react';
import { ExternalLink, Globe, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Distributed Task Queue',
      description: 'Engineered a fault-tolerant asynchronous task execution system capable of distributing workloads across multiple worker nodes, similar to Celery. Implemented task persistence and retry logic using Redis to ensure 99.9% reliability during node failures. Optimized job scheduling algorithms, reducing task processing latency by 40%.',
      tags: ['Python', 'Redis', 'Multiprocessing'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/arooshdatta/distributed-task-queue',
demo: null,
    },
    {
      title: 'Skin Lesion Diagnosis',
      description: 'Collaborated in a team of 5 to build a Computer Vision model for early detection of melanoma and skin cancer. Trained a Convolutional Neural Network (CNN) on the HAM10000 dataset, achieving high validation accuracy. Preprocessed over 10,000 dermatoscopic images using OpenCV to reduce noise and improve model generalization.',
      tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     github: 'https://github.com/arooshdatta/skin-lesion-diagnosis',
demo: null,
    },
    {
      title: 'PySticky',
      description: 'Developed a lightweight, persistent sticky-note application with local storage capabilities, allowing users to organize tasks efficiently. Engineered a custom drag-and-drop interface and implemented auto-save functionality. Designed a modular codebase following OOP principles, ensuring scalability.',
      tags: ['Python', 'Tkinter', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     github: 'https://github.com/arooshdatta/PySticky',
demo: null,
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <FolderGit2 className="text-brand-primary" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold font-outfit">Featured <span className="text-brand-primary">Projects</span></h2>
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
  key={index}
  className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary hover:-translate-y-3
hover:rotate-1
hover:scale-[1.02]
hover:shadow-[0_30px_80px_rgba(0,210,255,0.18)]
transition-all
duration-500 group flex flex-col h-full"
>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110
group-hover:rotate-2 transition-transform duration-700"></img>
              </div>
              <div className="p-6 flex flex-col flex-grow">

<div className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold">
Featured Project
</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-all duration-300">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
  key={i}
  className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20 hover:bg-brand-primary hover:text-black transition-all duration-300 cursor-default"
>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">

  {project.github ? (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
    >
      <Globe size={18} />
      GitHub
    </a>
  ) : (
    <span className="text-gray-500 flex items-center gap-2 text-sm">
      <Globe size={18} />
      GitHub Soon
    </span>
  )}

  {project.demo ? (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2 text-sm font-medium"
    >
      <ExternalLink size={18} />
      Live Demo
    </a>
  ) : null}

</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Projects;
