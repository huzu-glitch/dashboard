import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@/src/components/ui/switch';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          <Menu />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white hidden md:block">User Profile Dashboard</h1>
      </div>
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
