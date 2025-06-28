/**
 * Portfolio JavaScript
 * Handles interactive elements, animations, and theme switching
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            alert('Thank you for your message! This is a demo form, so no message was actually sent.');
            contactForm.reset();
        });
    }
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Theme Switching Functionality
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
        
        // Update active button
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === savedTheme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Add click event to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Remove active class from all buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply the selected theme
            applyTheme(theme);
            
            // Save theme preference to localStorage
            localStorage.setItem('theme', theme);
        });
    });
    
    /**
     * Apply the selected theme to the body element
     * @param {string} theme - The theme to apply ('default', 'blue-purple', or 'blue-purple-night')
     */
    function applyTheme(theme) {
        // Remove all theme classes
        document.body.classList.remove('blue-purple-theme', 'blue-purple-night-theme');
        
        // Apply the selected theme
        if (theme === 'blue-purple') {
            document.body.classList.add('blue-purple-theme');
        } else if (theme === 'blue-purple-night') {
            document.body.classList.add('blue-purple-night-theme');
        }
        // Default theme doesn't need a class as it's the base styling
    }
});
