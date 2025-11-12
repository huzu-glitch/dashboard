import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@/src/components/ui/switch';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">User Profile Dashboard</h1>
      <div className="flex items-center space-x-2">
        <span className="text-gray-800 dark:text-white">{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
