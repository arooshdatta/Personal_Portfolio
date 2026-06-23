import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Load available assets and prefer `image 3.jpeg` or `image 1.jpeg` for avatar
const assets = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
const avatarImage = assets['../assets/image 3.jpeg'] || assets['../assets/image-3.jpeg'] || assets['../assets/image_3.jpeg'] || assets['../assets/image 1.jpeg'] || assets['../assets/image-1.jpeg'] || assets['../assets/image_1.jpeg'] || assets['../assets/hero.png'] || Object.values(assets)[0];

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 18v4"></path></svg>
);
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const LeetcodeIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.835-1.452l2.609-2.636c.514-.514.496-1.365-.039-1.9-.534-.535-1.386-.552-1.9-.038z"/></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-6 mb-8">
              <img
                src={avatarImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-brand-primary shadow-[0_0_20px_rgba(0,210,255,0.2)] shrink-0"
              />
              <h2 className="text-3xl md:text-4xl font-bold font-outfit">Let's <span className="text-brand-primary">Connect</span></h2>
            </div>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Always open to discussing product design, algorithm optimization, or potential collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:adarooshdatta@gmail.com" className="text-white font-medium hover:text-brand-primary transition-colors">
                    adarooshdatta@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+917380476776" className="text-white font-medium hover:text-brand-primary transition-colors">
                    +91-7380476776
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Bhopal / Lucknow, India</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/aroosh-datta-8836403b5" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-brand-primary hover:text-bg-dark transition-all duration-300">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/arooshdatta/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-brand-primary hover:text-bg-dark transition-all duration-300">
                <GithubIcon size={20} />
              </a>
              <a href="https://leetcode.com/u/Aroosh_Datta/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-brand-primary hover:text-bg-dark transition-all duration-300">
                <LeetcodeIcon size={20} />
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border-neon">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                  placeholder="Hello Aroosh, I'd like to discuss..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-brand-primary text-bg-dark font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
