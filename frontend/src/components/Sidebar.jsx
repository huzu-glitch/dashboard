import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 dark:bg-gray-950 text-white shrink-0">
      <div className="p-4 text-2xl font-bold">User Dashboard</div>
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
