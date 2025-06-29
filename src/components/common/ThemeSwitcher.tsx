import React, { useState, useEffect, useRef } from 'react';

/**
 * Theme Switcher Component
 * Provides a floating palette button that displays theme color options
 * Each theme has light and dark variants
 */
interface ThemeSwitcherProps {
  // Optional props can be added here
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<string>('default');
  const themeSwitcherRef = useRef<HTMLDivElement>(null);
  
  // Available themes with their display names
  const themes = [
    { id: 'default', name: 'Default Blue', variant: 'light' },
    { id: 'default-dark', name: 'Default Blue Dark', variant: 'dark' },
    { id: 'purple', name: 'Purple', variant: 'light' },
    { id: 'purple-dark', name: 'Purple Dark', variant: 'dark' },
    { id: 'green', name: 'Green', variant: 'light' },
    { id: 'green-dark', name: 'Green Dark', variant: 'dark' },
    { id: 'orange', name: 'Orange', variant: 'light' },
    { id: 'orange-dark', name: 'Orange Dark', variant: 'dark' },
  ];
  
  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setActiveTheme(savedTheme);
    applyTheme(savedTheme);
    
    // Add click outside listener
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeSwitcherRef.current && 
        !themeSwitcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Toggle theme options panel
  const toggleThemePanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  
  // Apply selected theme
  const applyTheme = (themeId: string) => {
    // Remove all theme classes from body
    document.body.className = '';
    
    // Add the selected theme class
    document.body.classList.add(`${themeId}-theme`);
    
    // Add light or dark mode class
    if (themeId.includes('-dark')) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', themeId);
  };
  
  // Handle theme selection
  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
    
    // Close panel after a short delay
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };
  
  return (
    <div className="theme-switcher" ref={themeSwitcherRef}>
      <div className={`theme-options ${isOpen ? 'active' : ''}`}>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`theme-option ${theme.variant} ${activeTheme === theme.id ? 'active' : ''}`}
            data-theme={theme.id}
            title={theme.name}
            onClick={() => handleThemeChange(theme.id)}
          ></div>
        ))}
      </div>
      <button 
        id="theme-toggle" 
        className="theme-toggle-btn" 
        onClick={toggleThemePanel}
        title="Change Theme"
      >
        <i className="fas fa-palette"></i>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
