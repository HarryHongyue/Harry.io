import React from 'react';

/**
 * Footer component for the website
 * Contains copyright information, social links, and contact info
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First footer column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Harry Ji</h3>
            <p className="text-gray-300 leading-relaxed">Software Developer & Tech Enthusiast based in San Francisco, CA. Passionate about creating innovative solutions and sharing knowledge.</p>
          </div>
          
          {/* Second footer column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Third footer column - Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom with copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">&copy; {currentYear} Harry Ji. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
