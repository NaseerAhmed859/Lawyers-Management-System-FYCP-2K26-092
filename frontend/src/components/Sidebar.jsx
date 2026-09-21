import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaUser, 
  FaBriefcase, 
  FaCalendarAlt, 
  FaBell, 
  FaCog, 
  FaBook,
  FaTimes,
  FaBars,
  FaSignOutAlt
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  // ✅ Documents wala option yahan se delete kar diya gaya hai
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: FaTachometerAlt },
    { name: 'My Profile', path: '/dashboard/profile', icon: FaUser },
    { name: 'All Cases', path: '/dashboard/cases', icon: FaBriefcase },
    { name: 'Case File', path: '/dashboard/case-file', icon: FaCalendarAlt },
    { name: 'Case Diary', path: '/dashboard/case-diary', icon: FaCalendarAlt },
    { name: 'Library', path: '/dashboard/library', icon: FaBook },
    { name: 'Reminders', path: '/dashboard/reminders', icon: FaBell },
    { name: 'Settings', path: '/dashboard/settings', icon: FaCog },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    if (path === '/dashboard/case-file') {
      return location.pathname.startsWith('/dashboard/case-file');
    }
    if (path === '/dashboard/add-case') {
      return location.pathname === '/dashboard/add-case';
    }
    if (path === '/dashboard/case-diary') {
      return location.pathname === '/dashboard/case-diary';
    }
    if (path === '/dashboard/library') {
      return location.pathname === '/dashboard/library';
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-primary-700 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Sidebar - COMPACT & WITHOUT SCROLL */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] shadow-2xl z-30 transition-all duration-300 flex flex-col ${
          isOpen ? 'w-64' : 'w-0 lg:w-20'
        } overflow-hidden bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900`}
      >
        
        {/* User Profile Section - Compact */}
        <div className="p-3 flex-shrink-0 border-b border-white/10">
          {isOpen ? (
            <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <FaUser className="text-white text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  {user?.name || 'Advocate'}
                </p>
                <p className="text-[10px] text-primary-200 truncate">
                  {user?.email || 'lawyer@lms.com'}
                </p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-lg mx-auto">
              <FaUser className="text-white text-base" />
            </div>
          )}
        </div>

        {/* Menu Section - Compact (No Scroll Needed) */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-0.5 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                    className={`flex items-center ${
                      isOpen ? 'px-3' : 'justify-center px-1'
                    } py-2 rounded transition-all duration-200 group relative text-sm ${
                      active
                        ? 'bg-white/20 text-white font-semibold shadow border border-white/30'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {active && isOpen && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-accent-400 rounded-r-full"></span>
                    )}
                    
                    <Icon className={`text-base ${active ? 'text-accent-400' : 'text-primary-200 group-hover:text-white'}`} />
                    {isOpen && (
                      <span className="ml-2 text-xs">{item.name}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sign Out Button - Compact */}
        <div className="p-2 border-t border-white/10 flex-shrink-0">
          <button
            onClick={handleLogout}
            className={`flex items-center ${
              isOpen ? 'px-3' : 'justify-center px-1'
            } w-full py-2 rounded text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all duration-200 group text-sm`}
          >
            <FaSignOutAlt className="text-base" />
            {isOpen && (
              <span className="ml-2 font-medium">Sign Out</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;