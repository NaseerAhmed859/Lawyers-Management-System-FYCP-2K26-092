import { useState } from 'react';
import {NavLink, Link, } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';


// Import circular logo
import logo from '../assets/logo.png';

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { currentLang, t, changeLanguage } = useLanguage(); // ✅ Translations ready
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Translation function t() use kiya gaya hai
  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('aboutUs'), path: '/about' },
    { name: t('practiceAreas'), path: '/practice-areas' },
    { name: t('teams'), path: '/teams' },
    { name: t('careers'), path: '/careers' },
    { name: t('contactUs'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 👇 LOGO + TEXT SECTION - LEFT SIDE 👇 */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            {/* Circular Logo - ✅ Fixed className spacing */}
            <img 
              src={logo} 
              alt="LMS Logo" 
              className="h-12 w-12 border-primary-600 dark:border-accent-400 shadow-md"
            />
            {/* Text Right Side of Logo */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-800 dark:text-white">{t('lawyersManagementSystem')}</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                LMS
              </p>
            </div>
          </Link>

          {/* Desktop Menu - CENTER */}
<div className="hidden xl:flex items-center gap-1">
  {navLinks.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          isActive
            ? 'text-primary-700 dark:text-accent-400 font-bold border-b-2 border-primary-700 dark:border-accent-400'
            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-800'
        }`
      }
    >
      {link.name}
    </NavLink>
  ))}
</div>

          {/* Right Side - Language + Dark Mode + Login Button */}
          <div className="hidden xl:flex items-center gap-3">
            
            {/* 🌍 Language Selector Dropdown (✅ ADDED) */}
            <select 
              value={currentLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm cursor-pointer focus:ring-2 focus:ring-primary-500"
            >
              <option value="en">🇬🇧 English</option>
              <option value="ur">🇵🇰 اردو</option>
              <option value="ar">🇸🇦 العربية</option>
            </select>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-transform"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Client Login Button - ✅ Translation applied */}
            <Link 
              to="/login" 
              className="px-6 py-2.5 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm whitespace-nowrap"
            >
              {t('Lawyer Login')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 text-gray-600 dark:text-yellow-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 dark:text-gray-300 p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-md transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            <Link 
              to="/login" 
              className="block px-3 py-3 text-base font-bold text-primary-700 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              {t('clientLogin')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;