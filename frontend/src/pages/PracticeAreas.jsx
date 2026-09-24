import { FaGavel, FaLandmark, FaUsers, FaBalanceScale, FaHome, FaBriefcase, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PracticeAreas = () => {
  const { t } = useLanguage();

  const practiceAreas = [
    {
      icon: FaGavel,
      title: 'Criminal Law',
      desc: 'Strong defense and representation in all criminal matters including bail hearings, trials, and appeals.',
      color: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
      hoverColor: 'group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-600'
    },
    {
      icon: FaLandmark,
      title: 'Constitutional Law',
      desc: 'Protecting fundamental rights and constitutional remedies. We handle writ petitions and constitutional matters.',
      color: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
      hoverColor: 'group-hover:bg-yellow-600 group-hover:text-white dark:group-hover:bg-yellow-600'
    },
    {
      icon: FaUsers,
      title: 'Family Law',
      desc: 'Compassionate handling of sensitive family matters including divorce, custody, inheritance, and maintenance.',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
      hoverColor: 'group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600'
    },
    {
      icon: FaBalanceScale,
      title: 'Civil Law',
      desc: 'Professional legal assistance in civil disputes, contracts, property disputes, injunctions, and civil suits.',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      hoverColor: 'group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600'
    },
    {
      icon: FaHome,
      title: 'Rent Law',
      desc: 'Expert guidance in tenancy matters, eviction proceedings, rent disputes, and landlord-tenant conflicts.',
      color: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
      hoverColor: 'group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-600'
    },
    {
      icon: FaBriefcase,
      title: 'Service Matters Law',
      desc: 'Representing clients in employment disputes, service tribunals, pension issues, and job-related legal matters.',
      color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
      hoverColor: 'group-hover:bg-orange-600 group-hover:text-white dark:group-hover:bg-orange-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section (Size Reduced) */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-accent-400 mb-4 backdrop-blur-sm">
              {t('ourPracticeAreas') || 'OUR EXPERTISE'}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              {t('ourPracticeAreas') || 'Our Practice Areas'}
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal services tailored to meet your specific needs with expertise and dedication.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid (Compact Size) */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Reduced gap from 8 to 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 flex flex-col overflow-hidden"
                >
                  {/* Top Glow Line on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon (Reduced Size: w-12 h-12) */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${area.color} ${area.hoverColor} shadow-sm group-hover:shadow-lg group-hover:scale-110`}>
                    <area.icon className="text-xl" />
                  </div>
                  
                  {/* Title (Reduced Size: text-xl) */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-accent-400">
                    {area.title}
                  </h3>
                  
                  {/* Description (Reduced Size: text-sm) */}
                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed flex-grow text-sm">
                    {area.desc}
                  </p>
                  
                  {/* Animated Button (Compact) */}
                  <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-primary-700 dark:text-accent-400 font-semibold text-xs hover:bg-primary-700 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white transition-all duration-300 group/btn">
                      Learn More 
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section (Slightly Reduced) */}
        <section className="py-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-serif">
                  Need Legal Assistance?
                </h2>
                <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our team of experienced advocates is ready to help you navigate complex legal matters. Contact us today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-accent-500/50 transition-all transform hover:-translate-y-1 text-sm"
                  >
                    <FaPhoneAlt /> Contact Us
                  </a>
                  <a 
                    href="/teams" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all transform hover:-translate-y-1 text-sm"
                  >
                    Meet Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticeAreas;