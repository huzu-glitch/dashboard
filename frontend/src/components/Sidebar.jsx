import React from 'react';
import { X } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-800 dark:bg-gray-950 text-white w-64 shrink-0 h-full z-20 fixed md:relative transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="p-4 flex justify-between items-center md:p-6">
        <span className="text-2xl font-bold hidden md:block">User Dashboard</span>
        <button className="md:hidden" onClick={toggleSidebar}>
          <X />
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
