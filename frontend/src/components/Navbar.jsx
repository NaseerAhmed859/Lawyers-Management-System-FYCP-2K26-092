import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  FaMoon, FaSun, FaTimes, FaSignOutAlt, 
  FaBars
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

import logo from '../assets/logo.png';

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { currentLang, t, changeLanguage } = useLanguage();
  const { user, logout } = useAuth();
  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('aboutUs'), path: '/about' },
    { name: t('practiceAreas'), path: '/practice-areas' },
    { name: t('teams'), path: '/teams' },
    { name: t('careers'), path: '/careers' },
    { name: t('contactUs'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO + TEXT SECTION */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="LMS Logo" className="h-12 w-12 border-2 border-primary-600 dark:border-accent-400 rounded-full shadow-md" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-800 dark:text-white">{t('CASE MANAGEMENT SYSTEM')}</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">MEER AHMED MANGRIO & ASSOCIATES</p>
            </div>
          </Link>

          {/* Desktop Menu - CENTER */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive ? 'text-primary-700 dark:text-accent-400 font-bold border-b-2 border-primary-700 dark:border-accent-400' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800'
                }`
              }>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side - Language + Dark Mode + Auth */}
          <div className="hidden xl:flex items-center gap-3">
            <select value={currentLang} onChange={(e) => changeLanguage(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm cursor-pointer focus:ring-2 focus:ring-primary-500">
              <option value="en">🇬🇧 English</option>
              <option value="ur">🇵 اردو</option>
              <option value="ar">🇸 العربية</option>
            </select>

            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-transform">
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <button onClick={logout} className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-6 py-2 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                Lawyer Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-gray-600 dark:text-yellow-400">
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 p-2">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-lg relative z-50">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            {user ? (
              <>
                <Link to="/dashboard" className="block px-3 py-3 text-base font-bold text-primary-700 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-md" onClick={() => setIsOpen(false)}>Go to Dashboard</Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="w-full flex items-center gap-2 px-3 py-3 text-base font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all">
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-3 text-base font-bold text-primary-700 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setIsOpen(false)}>Lawyer Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;