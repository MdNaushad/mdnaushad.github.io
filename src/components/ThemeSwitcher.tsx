import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const {theme, toggle} = useContext(ThemeContext);
  return (
    <button className="theme-switch" onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;
