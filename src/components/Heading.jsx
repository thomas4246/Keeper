import React, { useState } from 'react';
import { useEffect } from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';

export default function Heading() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bodyClass = document.body.classList;

  //// Theme ////

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
      setIsDarkMode(true);
    }
  }, []);

  //// Local Storage Theme ////

  useEffect(() => {
    const handelToggle = () => {
      if (isDarkMode) {
        bodyClass.add('dark-theme');
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        bodyClass.remove('dark-theme');
        localStorage.setItem('dark-mode', 'disabled');
      }
    };
    handelToggle();
  }, [isDarkMode]);

  return (
    <header>
      <h1>Note Keeper</h1>
      <DarkModeToggle
        className='theme-toggle'
        onChange={setIsDarkMode}
        isDarkMode={isDarkMode}
        size={70}
      />
    </header>
  );
}
