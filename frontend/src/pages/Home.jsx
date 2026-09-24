import { Link } from 'react-router-dom';
import { 
  FaBalanceScale, FaGavel, FaUsers, FaBuilding, FaLandmark, 
  FaFileContract, FaCheckCircle, FaStar, FaCalendarAlt, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight,
  FaShieldAlt, FaUserTie, FaBullhorn, FaQuoteLeft, FaLock, 
  FaHome, FaBriefcase
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const heroImage = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200";

const Home = () => {
  const { t } = useLanguage();

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
    { name: 'Irfan Rahujo', role: 'Adv High Court', exp: 'Phone: 0346-2988615', img: 'https://ui-avatars.com/api/?name=Irfan+Rahujo&background=0c4a6e&color=fff&size=256' },
    { name: 'Zaffar Hussain Chandio', role: 'Adv High Court', exp: 'Phone: 0302-3058857', img: 'https://ui-avatars.com/api/?name=Zaffar+Chandio&background=0c4a6e&color=fff&size=256' },
    { name: 'M Akram Rahab Mangrio', role: 'Adv High Court', exp: 'Phone: 0312-3682470', img: 'https://ui-avatars.com/api/?name=Akram+Mangrio&background=0c4a6e&color=fff&size=256' },
    { name: 'Aroon Kumar', role: 'Adv High Court', exp: 'Phone: 0333-7443521', img: 'https://ui-avatars.com/api/?name=Aroon+Kumar&background=0c4a6e&color=fff&size=256' },
    { name: 'Naeem Ahmed Rind', role: 'Adv High Court', exp: 'Phone: 0346-8979400', img: 'https://ui-avatars.com/api/?name=Naeem+Rind&background=0c4a6e&color=fff&size=256' },
    { name: 'Nabi Bux Sand', role: 'Adv High Court', exp: 'Phone: 0340-8781828', img: 'https://ui-avatars.com/api/?name=Nabi+Sand&background=0c4a6e&color=fff&size=256' },
    { name: 'Shakeel Ahmed Mangi', role: 'Adv High Court', exp: 'Phone: 0300-2136128', img: 'https://ui-avatars.com/api/?name=Shakeel+Mangi&background=0c4a6e&color=fff&size=256' },
    { name: 'Allah Rakhio @ AR Rahujo', role: 'Adv High Court', exp: 'Phone: 0346-8796336', img: 'https://ui-avatars.com/api/?name=Allah+Rakhio&background=0c4a6e&color=fff&size=256' },
    { name: 'Muhammad Achar Jalbani', role: 'Adv High Court', exp: 'Phone: 0325-8381548', img: 'https://ui-avatars.com/api/?name=Achar+Jalbani&background=0c4a6e&color=fff&size=256' },
    { name: 'Pirbhat Chandio', role: 'Advocate', exp: 'Phone: 0330-8138040', img: 'https://ui-avatars.com/api/?name=Pirbhat+Chandio&background=0c4a6e&color=fff&size=256' },
    { name: 'Abid Ali Jhatial', role: 'Adv High Court', exp: 'Phone: 0300-7007910', img: 'https://ui-avatars.com/api/?name=Abid+Jhatial&background=0c4a6e&color=fff&size=256' },
    { name: 'Aftab Ahmed Jatio', role: 'Advocate', exp: 'Phone: 0303-7668823', img: 'https://ui-avatars.com/api/?name=Aftab+Jatio&background=0c4a6e&color=fff&size=256' },
    { name: 'Aadil Ali Jatio', role: 'Advocate', exp: 'Phone: 0327-8316476', img: 'https://ui-avatars.com/api/?name=Aadil+Jatio&background=0c4a6e&color=fff&size=256' },
    { name: 'Abdul Rasheed Saand', role: 'Advocate', exp: 'Phone: 0346-0257121', img: 'https://ui-avatars.com/api/?name=Rasheed+Saand&background=0c4a6e&color=fff&size=256' },
    { name: 'Dua Tahir', role: 'Advocate', exp: 'Phone: 0303-3383767', img: 'https://ui-avatars.com/api/?name=Dua+Tahir&background=0c4a6e&color=fff&size=256' },
    { name: 'Iqra Mustafa Bareejo', role: 'Advocate', exp: 'Phone: 0301-5529993', img: 'https://ui-avatars.com/api/?name=Iqra+Bareejo&background=0c4a6e&color=fff&size=256' },
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
      
      <main className="flex-grow pt-16"> 
        
        {/* 1. HERO SECTION - Compact */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-500/10 rounded-l-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-2">
                {t('heroTitle')}
              </h1>
              <h2 className="font-serif text-xl md:text-3xl font-bold text-accent-400 mb-2">
                {t('firmName')}
              </h2>
              <h3 className="font-serif text-sm md:text-lg text-gray-300 mb-4 font-medium">
                {t('advocateTitle')}
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/login" className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-accent-500/50 transition-all flex items-center justify-center gap-2 text-sm">
                  {t('bookAppointment')} <FaCalendarAlt />
                </Link>
                <Link to="/lawyers" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm">
                  {t('meetOurLawyers')} <FaUserTie />
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img src={heroImage} alt="LMS Professional Office" className="rounded-xl shadow-2xl border-4 border-white/10 w-full object-cover" />
            </div>
          </div>
        </section>

        {/* 2. ABOUT OUR FIRM - Compact */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1000" alt="About Firm" className="rounded-xl shadow-xl w-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-4">
                {t('aboutOurFirm')}
              </h2>
              
              <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                <p>
                  <strong className="text-primary-800 dark:text-white">M/S Meer Ahmed Mangrio & Associates</strong> is a premier law firm based in Hyderabad, Sindh, with a distinguished presence at the High Court of Sindh and the Supreme Court of Pakistan. Founded by <strong className="text-primary-800 dark:text-white">Advocate Meer Ahmed Mangrio</strong>, the firm has built a legacy of legal excellence, integrity, and unwavering commitment to justice.
                </p>
                
                <p>
                  With decades of combined experience, our team of seasoned advocates specializes in <strong className="text-primary-700 dark:text-accent-400">Civil Litigation, Criminal Defense, Constitutional Petitions, Family Law, Corporate Affairs, and Appellate Jurisdiction</strong>. We pride ourselves on delivering strategic legal solutions tailored to each client's unique needs.
                </p>
                
                <p className="font-semibold text-primary-800 dark:text-white border-l-4 border-accent-500 pl-3 italic text-sm">
                  Our mission is simple: to protect your rights, uphold the law, and deliver results that matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR LEGAL SERVICES - Compact */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-3">{t('ourLegalServices')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-sm">{t('servicesDesc')}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors mx-auto">
                    <area.icon className="text-2xl text-primary-700 dark:text-accent-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR LAWYERS - Compact */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-3">{t('ourLawyers')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-sm">{t('lawyersDesc')}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-8">
              {lawyers.map((lawyer, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
                  <div className="h-28 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center overflow-hidden">
                    <img src={lawyer.img} alt={lawyer.name} className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md group-hover:scale-105 transition-transform" />
                  </div>
                  
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5 leading-tight line-clamp-2">
                      {lawyer.name}
                    </h3>
                    <p className="text-primary-600 dark:text-accent-400 font-medium text-xs mb-0.5">
                      {lawyer.role}
                    </p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">
                      {lawyer.exp}
                    </p>
                    <Link to="/teams" className="inline-block px-3 py-1 border border-primary-600 text-primary-600 dark:text-accent-400 dark:border-accent-400 rounded-full text-[10px] font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-gray-900 transition-all">
                      {t('viewProfile')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/teams" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all text-sm">
              {t('viewAllLawyers')} <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* 5. WHY CHOOSE OUR FIRM - Compact */}
        <section className="py-12 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">{t('whyChooseOurFirm')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-accent-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. APPOINTMENTS (CTA) - Compact */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-6 md:p-10 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500/20 rounded-full blur-2xl -mr-12 -mt-12"></div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 relative z-10">{t('needLegalAssist')}</h2>
              <p className="text-gray-200 text-sm mb-6 max-w-xl mx-auto relative z-10">
                {t('needLegalDesc')}
              </p>
              <Link to="/login" className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-accent-500/50 transition-all text-sm">
                <FaCalendarAlt /> {t('bookNow')}
              </Link>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS - Compact */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-8">{t('clientTestimonials')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t_item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-left relative">
                  <FaQuoteLeft className="absolute top-3 right-3 text-3xl text-primary-100 dark:text-gray-800" />
                  <div className="flex text-accent-500 mb-3">
                    {[...Array(t_item.rating)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4 relative z-10 text-sm">"{t_item.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-700 dark:text-accent-400 font-bold text-xs">
                      {t_item.name[0]}
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{t_item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CONTACT / OFFICE LOCATION - Compact */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-8 text-center">{t('contactLocation')}</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-700 dark:text-accent-400 text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{t('ourOffice')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-700 dark:text-accent-400 text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{t('phone')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">0301-3504227</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-700 dark:text-accent-400 text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{t('email')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">contact@meerahmedmangrio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary-700 dark:text-accent-400 text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{t('officeTimings')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all text-sm mt-2">
                  {t('contactUsBtn')} <FaArrowRight />
                </Link>
              </div>

              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 lg:h-auto flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-3xl mx-auto mb-2" />
                  <p className="font-semibold text-sm">{t('mapPlaceholder')}</p>
                  <p className="text-xs mt-1">(Add your Google Maps iframe here)</p>
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