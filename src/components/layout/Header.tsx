import React, { useState, useEffect } from 'react';

/**
 * Header component containing the navigation bar and language switcher
 */
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const [languageDropdownActive, setLanguageDropdownActive] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('EN');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check if there's a saved language in localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage.toUpperCase());
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  // Toggle language dropdown
  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguageDropdownActive(!languageDropdownActive);
  };

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang.toUpperCase());
    localStorage.setItem('language', lang.toLowerCase());
    setLanguageDropdownActive(false);
    
    // In a real implementation, this would trigger language change throughout the app
    console.log(`Language changed to: ${lang}`);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setLanguageDropdownActive(false);
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-white bg-opacity-100 shadow-md z-10 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
      <div className="w-[90%] max-w-[1200px] mx-auto px-5 flex justify-end items-center">
        <div className="mr-auto">
          <a href="#hero" className="text-2xl font-bold text-blue-500">
            <img src="img/logo.png" alt="Harry Ji" className="max-h-10 w-auto align-middle" />
          </a>
        </div>
        
        <div className={`md:hidden cursor-pointer ${mobileMenuActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="block w-6 h-0.5 bg-gray-800 my-1.5 transition-all"></span>
          <span className="block w-6 h-0.5 bg-gray-800 my-1.5 transition-all"></span>
          <span className="block w-6 h-0.5 bg-gray-800 my-1.5 transition-all"></span>
        </div>
        
        <nav className={`flex justify-between items-center py-5 ${mobileMenuActive ? 'block' : 'hidden md:flex'}`}>
          <ul className="flex flex-col md:flex-row md:items-center">
            <li className="md:ml-8"><a href="#hero" onClick={() => setMobileMenuActive(false)} className="text-gray-800 font-semibold hover:text-blue-500 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Home</a></li>
            <li className="md:ml-8"><a href="#about" onClick={() => setMobileMenuActive(false)} className="text-gray-800 font-semibold hover:text-blue-500 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">About</a></li>
            <li className="md:ml-8 relative group">
              <a href="#projects" className="text-gray-800 font-semibold hover:text-blue-500 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full flex items-center gap-1">Projects</a>
              <ul className="absolute top-full left-0 bg-white min-w-[180px] shadow-md rounded-md py-2.5 opacity-0 invisible transform translate-y-2.5 transition-all group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-20">
                <li><a href="#project1" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500">Project 1</a></li>
                <li><a href="#project2" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500">Project 2</a></li>
                <li><a href="#project3" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500">Project 3</a></li>
              </ul>
            </li>
            <li className="md:ml-8"><a href="#skills" onClick={() => setMobileMenuActive(false)} className="text-gray-800 font-semibold hover:text-blue-500 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Skills</a></li>
            <li className="md:ml-8"><a href="#contact" onClick={() => setMobileMenuActive(false)} className="text-gray-800 font-semibold hover:text-blue-500 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Contact</a></li>
            
            <li className={`md:ml-5 relative ${languageDropdownActive ? 'active' : ''}`}>
              <button 
                className="flex items-center gap-1.5 bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-full font-semibold transition-all hover:bg-blue-500 hover:text-white" 
                onClick={toggleLanguageDropdown}
              >
                {currentLanguage} <i className="fas fa-globe"></i>
              </button>
              <ul className="absolute top-full right-0 bg-white min-w-[150px] shadow-md rounded-md py-2.5 mt-2.5 opacity-0 invisible transform translate-y-2.5 transition-all z-20 list-none ${languageDropdownActive ? 'opacity-100 visible translate-y-0' : ''}">
                <li 
                  data-lang="en" 
                  className={`px-5 py-2 cursor-pointer transition-all hover:bg-gray-100 hover:text-blue-500 ${currentLanguage === 'EN' ? 'text-blue-500 font-semibold' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </li>
                <li 
                  data-lang="zh" 
                  className={`px-5 py-2 cursor-pointer transition-all hover:bg-gray-100 hover:text-blue-500 ${currentLanguage === 'ZH' ? 'text-blue-500 font-semibold' : ''}`}
                  onClick={() => handleLanguageChange('zh')}
                >
                  中文
                </li>
                <li 
                  data-lang="nl" 
                  className={`px-5 py-2 cursor-pointer transition-all hover:bg-gray-100 hover:text-blue-500 ${currentLanguage === 'NL' ? 'text-blue-500 font-semibold' : ''}`}
                  onClick={() => handleLanguageChange('nl')}
                >
                  Nederlands
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
