import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Aroosh Datta. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center gap-1">
          Built with <span className="text-red-500">❤️</span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
