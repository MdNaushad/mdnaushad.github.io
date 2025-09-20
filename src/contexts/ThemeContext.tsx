import React, {createContext, useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext({
  theme: 'light' as Theme,
  toggle: () => {},
});

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return (saved as Theme) || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
