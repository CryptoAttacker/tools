// Dark theme toggle with persistent preference
(function() {
  'use strict';

  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Get theme from localStorage or default to light
  function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  // Set theme and save preference
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  // Add event listener to toggle button
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Initialize theme
  initTheme();

  // Handle system preference changes (optional)
  if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only apply system preference if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      setTheme(darkModeQuery.matches ? 'dark' : 'light');
    }

    // Listen for system preference changes
    darkModeQuery.addEventListener('change', function(e) {
      // Only apply if user hasn't set a manual preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
