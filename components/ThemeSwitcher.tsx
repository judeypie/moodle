"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {

  const [theme, setTheme] = useState("light");

  //Runs once checks for existing saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
  }, []);

  // Only runs when the theme has been actively changed
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    
    root.classList.remove("dark", "light");
    root.removeAttribute("data-theme");

    if (theme === "colorblind") {
      root.setAttribute("data-theme", "colorblind");
    } else {
      root.classList.add(isDark ? "dark" : "light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]); // This effect re-runs whenever the `theme` state changes.

  // SVG icons for the theme buttons.
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  );
  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  );
  const GlassesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4" /><circle cx="18" cy="15" r="4" /><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" /><path d="M2.5 13L5 7c.7-1.3 1.4-2 3-2" /><path d="M21.5 13L19 7c-.7-1.3-1.4-2-3-2" /></svg>
  );

  return (
    <div className="flex items-center space-x-1 rounded-full p-1 bg-gray-200 dark:bg-gray-700">
      <button onClick={() => setTheme('light')} aria-label="Switch to Light Theme" className={`p-2 rounded-full ${theme === 'light' ? 'bg-white text-blue-500' : 'text-gray-500'}`}>
        <SunIcon />
      </button>
      <button onClick={() => setTheme('dark')} aria-label="Switch to Dark Theme" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'text-gray-500'}`}>
        <MoonIcon />
      </button>
      <button onClick={() => setTheme('colorblind')} aria-label="Switch to Colorblind Friendly Theme" className={`p-2 rounded-full ${theme === 'colorblind' ? 'bg-blue-900 text-orange-400' : 'text-gray-500'}`}>
        <GlassesIcon />
      </button>
    </div>
  );
}