import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Search,
  Film,
  Menu,
  User,
  TrendingUp,
} from 'lucide-react';

const   NavBar = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Search', path: '/search' },
    { id: 'trending', icon: TrendingUp, label: 'Trending', path: '/trending' },
    { id: 'reels', icon: Film, label: 'Reels', path: '/reels' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  const NavIcon = ({ item }) => {
    const IconComponent = item.icon;
    const isActive = location.pathname === item.path;

    return (
      <div
        className={`relative flex items-center justify-center w-12 h-12 p-3 rounded-lg transition-all duration-200 ${
          isActive ? 'text-black' : 'text-gray-600'
        }`}
      >
        <div className="relative">
          <IconComponent
            size={24}
            className={`${isActive ? 'scale-110' : ''} transition-transform duration-200`}
            fill={isActive ? 'currentColor' : 'none'}
            strokeWidth={isActive ? 0 : 1.5}
          />
          {item.count && item.count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-5">
              {item.count > 99 ? '99+' : item.count}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-64 border-r border-gray-200 bg-white flex-col z-50 backdrop-blur-md bg-white/80">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            SwiftRead
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <NavIcon item={item} />
              <span className={`font-medium transition-colors duration-200 ${
                location.pathname === item.path ? 'text-black' : 'text-gray-600'
              } group-hover:text-black`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Tablet Top Navigation */}
      <div className="hidden md:flex lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 items-center justify-between px-6 z-50 backdrop-blur-md bg-white/80">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          SwiftRead
        </h1>
        <div className="flex items-center space-x-6">
          {navItems.filter(item => ['home', 'trending', 'search','reels', 'profile'].includes(item.id)).map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`relative flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 ${
                location.pathname === item.path ? 'text-black' : 'text-gray-600'
              }`}
            >
              <div className="relative">
                <item.icon
                  size={24}
                  className={`${location.pathname === item.path ? 'scale-110' : ''} transition-transform duration-200`}
                  fill={location.pathname === item.path ? 'currentColor' : 'none'}
                  strokeWidth={location.pathname === item.path ? 0 : 1.5}
                />
                {item.count && item.count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-5">
                    {item.count > 99 ? '99+' : item.count}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 z-50 backdrop-blur-md bg-white/80">
        <div className="flex items-center justify-around py-3">
          {navItems.filter(item => ['home','search', 'trending', 'profile', 'reels'].includes(item.id)).map((item) => ( // Reverted 'reels'
            <Link
              key={item.id}
              to={item.path}
              className={`relative flex items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.path ? 'text-black' : 'text-gray-600'
              }`}
            >
              <div className="relative">
                <item.icon
                  size={24}
                  className={`${location.pathname === item.path ? 'scale-110' : ''} transition-transform duration-200`}
                  fill={location.pathname === item.path ? 'currentColor' : 'none'}
                  strokeWidth={location.pathname === item.path ? 0 : 1.5}
                />
                {item.count && item.count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-5">
                    {item.count > 99 ? '99+' : item.count}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden fixed top-0 left-0 right-0 h-14  border-b border-gray-200 flex items-center justify-between px-4 z-40 backdrop-blur-md bg-white/80">
        <h1 className="text-lg font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          SwiftRead
        </h1>
      </div>

    </>
  );
};

export default  NavBar;