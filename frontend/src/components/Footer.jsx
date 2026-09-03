import { FaBalanceScale, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6 border-t-4 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-primary-700 pb-8">
          
          {/* Brand & Name */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaBalanceScale className="text-3xl text-accent-400" />
              <h3 className="text-xl font-bold font-serif text-white">Lawyers Management System</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering you with expert legal guidance, transparent case tracking, and dedicated representation for all your legal matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-accent-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent-400 transition-colors">About Us</Link></li>
              <li><Link to="/practice-areas" className="hover:text-accent-400 transition-colors">Practice Areas</Link></li>
              <li><Link to="/teams" className="hover:text-accent-400 transition-colors">Teams</Link></li>
              <li><Link to="/contact" className="hover:text-accent-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent-400">Contact Info</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" />
                <span>Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent-400 flex-shrink-0" />
                <span>0301-3504227</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent-400 flex-shrink-0" />
                <span>contact@meerahmedmangrio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-400">
          
          <p>
            © {new Date().getFullYear()} <span className="text-accent-400 font-semibold">Lawyers Management System</span>. 
            All rights reserved in FYCP/2K26/092.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><FaFacebook size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors"><FaLinkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;