import { Link } from 'react-router-dom';
import { 
  FaBalanceScale, FaGavel, FaUsers, FaBuilding, FaLandmark, 
  FaFileContract, FaCheckCircle, FaStar, FaCalendarAlt, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight,
  FaShieldAlt, FaUserTie, FaBullhorn, FaQuoteLeft, FaLock, 
  FaHome, FaBriefcase // ✅ FaHome aur FaBriefcase add kiye
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

// ✅ NEW IMAGE - Modern Law Office Interior
const heroImage = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200";

const Home = () => {
  const { t } = useLanguage();

  // ✅ Data Arrays (Icons ko string se actual component mein badal diya)
  const practiceAreas = [
    {
      title: 'Criminal Law',
      desc: 'Strong defense and representation in all criminal matters including bail hearings, trials, and appeals.',
      icon: FaGavel,
      color: 'bg-red-500'
    },
    {
      title: 'Constitutional Law',
      desc: 'Protecting fundamental rights and constitutional remedies. We handle writ petitions and constitutional matters.',
      icon: FaLandmark,
      color: 'bg-yellow-500'
    },
    {
      title: 'Family Law',
      desc: 'Compassionate handling of sensitive family matters including divorce, custody, inheritance, and maintenance.',
      icon: FaUsers,
      color: 'bg-purple-500'
    },
    {
      title: 'Civil Law',
      desc: 'We provide professional legal assistance in civil disputes and litigation including contracts, property, and torts.',
      icon: FaBalanceScale,
      color: 'bg-blue-500'
    },
    {
      title: 'Rent Law',
      desc: 'Expert guidance in tenancy matters, eviction proceedings, rent disputes, and lease agreements.',
      icon: FaHome,
      color: 'bg-green-500'
    },
    {
      title: 'Service Matters Law',
      desc: 'Representing clients in employment disputes, service tribunals, government service matters, and pension issues.',
      icon: FaBriefcase,
      color: 'bg-orange-500'
    }
  ];

  const lawyers = [
    { name: 'Adv. Muhammad Ali', role: 'Criminal Law Specialist', exp: '10 Years Experience', img: 'https://ui-avatars.com/api/?name=Muhammad+Ali&background=0c4a6e&color=fff&size=256' },
    { name: 'Adv. Fatima Khan', role: 'Family & Civil Law', exp: '8 Years Experience', img: 'https://ui-avatars.com/api/?name=Fatima+Khan&background=0c4a6e&color=fff&size=256' },
    { name: 'Adv. Ahmed Raza', role: 'Corporate Law Expert', exp: '12 Years Experience', img: 'https://ui-avatars.com/api/?name=Ahmed+Raza&background=0c4a6e&color=fff&size=256' },
  ];

  const whyChooseUs = [
    { icon: FaUserTie, title: t('expLawyers'), desc: 'Our team consists of highly qualified and experienced legal professionals.' },
    { icon: FaShieldAlt, title: t('profService'), desc: 'We maintain the highest standards of professionalism and ethics.' },
    { icon: FaLock, title: t('strictConf'), desc: 'Your information and case details are 100% secure with us.' },
    { icon: FaUsers, title: t('clientFocus'), desc: 'We prioritize your needs and provide tailored legal solutions.' },
    { icon: FaClock, title: t('timelyAssist'), desc: 'We ensure your cases are handled efficiently and on time.' },
  ];

  const testimonials = [
    { name: 'Ali Hassan', text: 'Professional and very helpful legal service. They handled my property case with utmost care and won it!', rating: 5 },
    { name: 'Sara Ahmed', text: 'Highly recommended! The team was transparent, kept me updated, and provided excellent advice.', rating: 5 },
    { name: 'Bilal Khan', text: 'The best law firm I have dealt with. Their corporate law expertise saved my business.', rating: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow pt-20"> 
        
        {/* 1. HERO / WELCOME SECTION */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-500/10 rounded-l-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-2">
                {t('heroTitle')}
              </h1>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-accent-400 mb-2">
                {t('firmName')}
              </h2>
              <h3 className="font-serif text-base md:text-xl text-gray-300 mb-6 font-medium">
                {t('advocateTitle')}
              </h3>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-accent-500/50 transition-all flex items-center justify-center gap-2">
                  {t('bookAppointment')} <FaCalendarAlt />
                </Link>
                <Link to="/lawyers" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  {t('meetOurLawyers')} <FaUserTie />
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img src={heroImage} alt="LMS Professional Office" className="rounded-2xl shadow-2xl border-4 border-white/10 w-full object-cover" />
            </div>
          </div>
        </section>

        {/* 2. ABOUT OUR FIRM */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1000" alt="About Firm" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">{t('aboutOurFirm')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Established with a mission to provide accessible, transparent, and high-quality legal services, our firm has been a beacon of justice for over a decade. We specialize in a wide range of legal matters, ensuring that every client receives personalized attention.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Our team of seasoned advocates is committed to upholding the highest standards of professional ethics and delivering results that matter to you.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary-700 dark:text-accent-400 font-semibold hover:gap-3 transition-all">
                {t('learnMore')} <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. OUR LEGAL SERVICES */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">{t('ourLegalServices')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">{t('servicesDesc')}</p>
            
            {/* ✅ FIX: services ki jagah practiceAreas use kiya, aur service ki jagah area */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors mx-auto">
                    <area.icon className="text-3xl text-primary-700 dark:text-accent-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR LAWYERS */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">{t('ourLawyers')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">{t('lawyersDesc')}</p>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {lawyers.map((lawyer, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                  <img src={lawyer.img} alt={lawyer.name} className="w-full h-64 object-cover bg-gray-200" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{lawyer.name}</h3>
                    <p className="text-primary-600 dark:text-accent-400 font-medium mb-2">{lawyer.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{lawyer.exp}</p>
                    <Link to="/lawyers" className="inline-block px-6 py-2 border border-primary-600 text-primary-600 dark:text-accent-400 dark:border-accent-400 rounded-full font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-gray-900 transition-all">
                      {t('viewProfile')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/lawyers" className="inline-flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all">
              {t('viewAllLawyers')} <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* 5. WHY CHOOSE OUR FIRM */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">{t('whyChooseOurFirm')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-accent-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. APPOINTMENTS (CTA) */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 relative z-10">{t('needLegalAssist')}</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                {t('needLegalDesc')}
              </p>
              <Link to="/login" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-accent-500/50 transition-all">
                <FaCalendarAlt /> {t('bookNow')}
              </Link>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-12">{t('clientTestimonials')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t_item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-left relative">
                  <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-primary-100 dark:text-gray-800" />
                  <div className="flex text-accent-500 mb-4">
                    {[...Array(t_item.rating)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10">"{t_item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-700 dark:text-accent-400 font-bold">
                      {t_item.name[0]}
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">{t_item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CONTACT / OFFICE LOCATION */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-12 text-center">{t('contactLocation')}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-700 dark:text-accent-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t('ourOffice')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-700 dark:text-accent-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t('phone')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">0301-3504227</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-700 dark:text-accent-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t('email')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">contact@meerahmedmangrio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary-700 dark:text-accent-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t('officeTimings')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all mt-4">
                  {t('contactUsBtn')} <FaArrowRight />
                </Link>
              </div>

              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-80 lg:h-auto flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                  <p className="font-semibold">{t('mapPlaceholder')}</p>
                  <p className="text-sm mt-1">(Add your Google Maps iframe here)</p>
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

export default Home;