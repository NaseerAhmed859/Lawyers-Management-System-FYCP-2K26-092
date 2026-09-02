import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFileContract, FaGavel, FaUsers, FaBuilding, FaHome, 
  FaBalanceScale, FaBriefcase, FaFileSignature, FaTimes, 
  FaArrowRight, FaCheckCircle, FaCalendarAlt
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  // Practice Areas Data
  const practiceAreas = [
    {
      id: 1, icon: FaFileContract, title: 'Civil Law', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30',
      desc: 'We provide professional legal assistance in civil disputes and litigation.',
      subAreas: ['Property disputes', 'Contract disputes', 'Recovery matters', 'Civil litigation']
    },
    {
      id: 2, icon: FaGavel, title: 'Criminal Law', color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30',
      desc: 'Strong defense and representation in all criminal matters and bail hearings.',
      subAreas: ['Criminal cases', 'Bail matters', 'FIR-related matters', 'Criminal defense']
    },
    {
      id: 3, icon: FaUsers, title: 'Family Law', color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/30',
      desc: 'Compassionate handling of sensitive family matters and disputes.',
      subAreas: ['Divorce / Khula', 'Child custody', 'Maintenance', 'Family disputes']
    },
    {
      id: 4, icon: FaBuilding, title: 'Corporate & Business Law', color: 'text-indigo-600', bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      desc: 'Expert legal counsel for businesses, startups, and corporate entities.',
      subAreas: ['Business agreements', 'Company matters', 'Legal documentation', 'Corporate disputes']
    },
    {
      id: 5, icon: FaHome, title: 'Property & Real Estate Law', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30',
      desc: 'Secure your real estate investments with our expert property legal services.',
      subAreas: ['Property disputes', 'Sale/purchase agreements', 'Land matters', 'Ownership issues']
    },
    {
      id: 6, icon: FaBalanceScale, title: 'Constitutional & Public Law', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      desc: 'Protecting fundamental rights and handling matters of public interest.',
      subAreas: ['Constitutional matters', 'Fundamental rights', 'Public authority disputes', 'Constitutional petitions']
    },
    {
      id: 7, icon: FaBriefcase, title: 'Employment / Labor Law', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30',
      desc: 'Resolving workplace issues and ensuring fair employment practices.',
      subAreas: ['Employment disputes', 'Service matters', 'Workplace issues', 'Employment agreements']
    },
    {
      id: 8, icon: FaFileSignature, title: 'Legal Documentation & Consultation', color: 'text-teal-600', bg: 'bg-teal-100 dark:bg-teal-900/30',
      desc: 'Drafting, reviewing, and providing expert opinions on legal documents.',
      subAreas: ['Legal notices', 'Agreements/contracts', 'Legal opinions', 'General legal consultation']
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        
        {/* Page Header */}
        <section className="bg-hero-gradient dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 py-16 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Practice Areas</h1>
          <p className="text-gray-200 max-w-2xl mx-auto px-4">
            Comprehensive legal solutions tailored to protect your rights and interests across various domains.
          </p>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {practiceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.id} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1 flex flex-col">
                    <div className={`w-16 h-16 ${area.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`text-3xl ${area.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{area.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{area.desc}</p>
                    <button 
                      onClick={() => setSelectedArea(area)}
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-accent-400 font-semibold hover:gap-3 transition-all"
                    >
                      View Details <FaArrowRight />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">Need Legal Assistance?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Consult with our expert lawyers today to discuss your case and find the best legal solution.
            </p>
            <Link to="/login" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <FaCalendarAlt /> Book an Appointment
            </Link>
          </div>
        </section>

      </main>

      {/* Details Modal */}
      {selectedArea && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative transform transition-all scale-100">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <FaTimes className="text-gray-600 dark:text-gray-300" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 ${selectedArea.bg} rounded-xl flex items-center justify-center`}>
                <selectedArea.icon className={`text-3xl ${selectedArea.color}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">{selectedArea.title}</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedArea.desc}</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Services Included:</h3>
              <ul className="space-y-2">
                {selectedArea.subAreas.map((sub, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/login" 
                onClick={() => setSelectedArea(null)}
                className="flex-1 py-3 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-lg text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <FaCalendarAlt /> Book Consultation
              </Link>
              <button 
                onClick={() => setSelectedArea(null)}
                className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PracticeAreas;