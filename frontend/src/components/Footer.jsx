import { FaBalanceScale, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaBalanceScale className="text-2xl text-primary-700 dark:text-accent-500" />
              <span className="font-serif text-2xl font-bold text-primary-800 dark:text-white">LexiLaw</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Empowering lawyers and clients with a modern, secure, and AI-driven case management ecosystem.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-accent-400">Practice Areas</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-accent-400">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-accent-400">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-600 hover:text-white transition"><FaFacebook /></a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-600 hover:text-white transition"><FaTwitter /></a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-600 hover:text-white transition"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} LexiLaw. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;