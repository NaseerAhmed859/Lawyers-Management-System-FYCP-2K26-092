import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaUser, 
  FaTachometerAlt, 
  FaBriefcase, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaCog, 
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaBalanceScale,
  FaFolderOpen,
  FaListAlt,
  FaChartBar,
  FaBell,
  FaUsers,
  FaClock
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: FaTachometerAlt },
    { name: 'My Profile', path: '/dashboard/profile', icon: FaUser },
    { name: 'All Cases', path: '/dashboard/cases', icon: FaBriefcase },
    { name: 'Case File', path: '/dashboard/case-file', icon: FaCalendarAlt },
    { name: 'Case Diary', path: '/dashboard/case-diary', icon: FaCalendarAlt },
    { name: 'Reminders', path: '/dashboard/reminders', icon: FaBell },
    { name: 'Documents', path: '/dashboard/documents', icon: FaFileAlt },
    { name: 'Settings', path: '/dashboard/settings', icon: FaCog },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

   const isActive = (path) => {
  // Case File ke liye - dynamic routes ko bhi handle kare
  if (path === '/dashboard/case-file') {
    return location.pathname.startsWith('/dashboard/case-file');
  }
  // Add Case ke liye
  if (path === '/dashboard/add-case') {
    return location.pathname === '/dashboard/add-case';
  }
  // Case Diary ke liye
  if (path === '/dashboard/case-diary') {
    return location.pathname === '/dashboard/case-diary';
  }
  // Baqi routes ke liye exact match
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

      {/* Main Sidebar Container - Full Blue Professional Theme */}
      <aside
        className={`fixed top-0 left-0 h-full shadow-2xl z-40 transition-all duration-300 flex flex-col ${
          isOpen ? 'w-64' : 'w-0 lg:w-20'
        } overflow-hidden bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900`}
      >
        
        {/* Upper Section: Logo & User Profile */}
        <div className="p-6 flex-shrink-0 border-b border-white/10">
          {/* Logo Area */}
          <div className={`flex items-center ${isOpen ? 'space-x-3 mb-6' : 'justify-center mb-6'}`}>
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
              <FaBalanceScale className="text-accent-400 text-xl" />
            </div>
            {isOpen && (
              <div>
                <h1 className="font-serif text-xl font-bold text-white tracking-wide">LMS</h1>
                <p className="text-[10px] text-primary-200 uppercase tracking-widest">Lawyer Portal</p>
              </div>
            )}
          </div>

          {/* User Profile Area */}
          {isOpen && (
            <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <FaUser className="text-white text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">
                  {user?.name || 'Advocate'}
                </p>
                <p className="text-xs text-primary-200 truncate">
                  {user?.email || 'lawyer@lms.com'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Menu Section - Full Blue Theme */}
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                    className={`flex items-center ${
                      isOpen ? 'px-4' : 'justify-center px-2'
                    } py-3 rounded-lg transition-all duration-200 group relative ${
                      active
                        ? 'bg-white/20 text-white font-semibold shadow-lg border border-white/30'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {/* Active Indicator Line */}
                    {active && isOpen && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-400 rounded-r-full"></span>
                    )}
                    
                    <Icon className={`text-lg ${active ? 'text-accent-400' : 'text-primary-200 group-hover:text-white'}`} />
                    {isOpen && (
                      <span className="ml-3 text-sm">{item.name}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sign Out Button - Bottom Section */}
        <div className="p-3 border-t border-white/10 flex-shrink-0">
          <button
            onClick={handleLogout}
            className={`flex items-center ${
              isOpen ? 'px-4' : 'justify-center px-2'
            } w-full py-3 rounded-lg text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all duration-200 group border border-transparent hover:border-red-500/30`}
          >
            <FaSignOutAlt className="text-lg" />
            {isOpen && (
              <span className="ml-3 font-medium text-sm">Sign Out</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;