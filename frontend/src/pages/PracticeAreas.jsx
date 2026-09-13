import { FaGavel, FaLandmark, FaUsers, FaBalanceScale, FaHome, FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PracticeAreas = () => {
  const { t } = useLanguage();

  const practiceAreas = [
    {
      icon: FaGavel,
      title: 'Criminal Law',
      desc: 'Strong defense and representation in all criminal matters including bail hearings, trials, and appeals. Our experienced advocates protect your rights throughout the legal process.',
      color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
    },
    {
      icon: FaLandmark,
      title: 'Constitutional Law',
      desc: 'Protecting fundamental rights and constitutional remedies. We handle writ petitions, constitutional petitions, and matters involving interpretation of constitutional provisions.',
      color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
    },
    {
      icon: FaUsers,
      title: 'Family Law',
      desc: 'Compassionate handling of sensitive family matters including divorce, custody, inheritance, maintenance, and family disputes with confidentiality and professionalism.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    },
    {
      icon: FaBalanceScale,
      title: 'Civil Law',
      desc: 'We provide professional legal assistance in civil disputes and litigation including contracts, torts, property disputes, injunctions, and civil suits of all nature.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      icon: FaHome,
      title: 'Rent Law',
      desc: 'Expert guidance in tenancy matters, eviction proceedings, rent disputes, lease agreements, and landlord-tenant conflicts. We protect your property rights.',
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      icon: FaBriefcase,
      title: 'Service Matters Law',
      desc: 'Representing clients in employment disputes, service tribunals, government service matters, pension issues, disciplinary proceedings, and job-related legal issues.',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {t('ourPracticeAreas') || 'Our Practice Areas'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal services tailored to meet your specific needs with expertise and dedication.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${area.color} group-hover:scale-110 transition-transform`}>
                    <area.icon className="text-3xl" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {area.desc}
                  </p>
                  
                  {/* View Details Link */}
                  <button className="inline-flex items-center gap-2 text-primary-700 dark:text-accent-400 font-semibold hover:gap-3 transition-all group">
                    View Details <span className="text-lg">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticeAreas;