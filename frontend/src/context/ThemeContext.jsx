import { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const userId = 1;

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await fetch(`${backendUrl}/theme/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setTheme(data.theme);
        }
      } catch (error) {
        console.error('Error fetching theme:', error);
      }
    };
    fetchTheme();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    try {
      await fetch(`${backendUrl}/theme/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: newTheme }),
      });
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
