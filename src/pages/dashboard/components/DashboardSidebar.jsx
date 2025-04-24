import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const DashboardSidebar = ({ active }) => {
  const [settingsOpen, setSettingsOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { id: 'products', label: 'Products', icon: 'products', path: '/products' },
    { id: 'users', label: 'Users', icon: 'users', path: '/users' },
    { id: 'settings', label: 'Website Settings', icon: 'settings', hasDropdown: true, open: settingsOpen },
  ];

  const settingsItems = [
    { id: 'offers', label: 'Offers', path: '/offers' },
    { id: 'gallery', label: 'Store Gallery', path: '/gallery' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'terms', label: 'Terms& Privacy', path: '/terms' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Navigate to the landing page after logout
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-3 space-y-1">
          {mainNavItems.map((item) => (
            <div key={item.id}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md ${
                      active === item.id
                        ? 'bg-[#8B6C5C] text-white'
                        : 'bg-[#EAE0D7] text-gray-700 hover:bg-[#D9C7B8]'
                    }`}
                  >
                    <div className="flex items-center">
                      {item.icon === 'settings' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.label}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-200 ${settingsOpen ? 'transform rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Dropdown items - Always render but conditionally show with CSS */}
                  <div className={`mt-1 ml-4 pl-4 border-l border-gray-200 ${settingsOpen ? 'block' : 'hidden'}`}>
                    {settingsItems.map((settingItem) => (
                      <Link
                        key={settingItem.id}
                        to={settingItem.path}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-md mt-1 ${
                          active === settingItem.id
                            ? 'bg-white text-gray-800 font-semibold'
                            : 'text-gray-700 hover:bg-white'
                        }`}
                      >
                        {settingItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    active === item.id
                      ? 'bg-[#8B6C5C] text-white'
                      : 'bg-[#EAE0D7] text-gray-700 hover:bg-[#D9C7B8]'
                  }`}
                >
                  {item.icon === 'dashboard' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  )}
                  {item.icon === 'products' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  )}
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Logout Button */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-md bg-[#EAE0D7] text-gray-700 hover:bg-[#D9C7B8]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar; 