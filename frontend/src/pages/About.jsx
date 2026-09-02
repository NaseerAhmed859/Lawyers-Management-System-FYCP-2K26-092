import { Link } from 'react-router-dom';
import { 
  FaBalanceScale, FaGavel, FaUsers, FaBuilding, FaLandmark, 
  FaFileContract, FaCheckCircle, FaArrowRight, FaGem, 
  FaUserTie, FaUserShield, FaHandsHelping, FaAward, FaLock,
  FaBullseye, FaEye
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  // 4. Core Values Data
  const values = [
    { icon: FaGem, title: 'Integrity', desc: 'We uphold the highest moral and ethical standards in every case we handle.' },
    { icon: FaUserTie, title: 'Professionalism', desc: 'Delivering legal services with competence, diligence, and respect.' },
    { icon: FaLock, title: 'Confidentiality', desc: 'Ensuring absolute privacy and security of our clients\' information.' },
    { icon: FaHandsHelping, title: 'Client Commitment', desc: 'Dedicated to protecting your rights and achieving the best outcomes.' },
    { icon: FaBalanceScale, title: 'Justice', desc: 'Fighting for fairness and equality under the law for every individual.' },
    { icon: FaAward, title: 'Trust', desc: 'Building long-term relationships based on transparency and reliability.' },
  ];

  // 5. Legal Expertise Data
  const expertise = [
    { icon: FaFileContract, title: 'Civil Law' },
    { icon: FaGavel, title: 'Criminal Law' },
    { icon: FaUsers, title: 'Family Law' },
    { icon: FaBuilding, title: 'Corporate Law' },
    { icon: FaLandmark, title: 'Property Law' },
    { icon: FaBalanceScale, title: 'Constitutional Law' },
  ];

  // 6. Team Data
  const team = [
    { name: 'Adv. Muhammad Ali', role: 'Senior Lawyer', img: 'https://ui-avatars.com/api/?name=Muhammad+Ali&background=0c4a6e&color=fff&size=256' },
    { name: 'Adv. Fatima Khan', role: 'Associate Lawyer', img: 'https://ui-avatars.com/api/?name=Fatima+Khan&background=0c4a6e&color=fff&size=256' },
    { name: 'Adv. Ahmed Raza', role: 'Associate Lawyer', img: 'https://ui-avatars.com/api/?name=Ahmed+Raza&background=0c4a6e&color=fff&size=256' },
  ];

  // 7. Why Choose Us Data
  const strengths = [
    'Experienced legal professionals',
    'Personalized legal guidance',
    'Confidential handling of information',
    'Professional case management',
    'Client-focused service approach'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        
        {/* Page Header */}
        <section className="bg-hero-gradient dark:from-gray-900 dark:via-primary-900 dark:to-gray-900 py-16 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Our Firm</h1>
          <p className="text-gray-200 max-w-2xl mx-auto px-4">
            Dedicated to providing reliable, professional, and client-focused legal services.
          </p>
        </section>

        {/* 1. About the Firm */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">Who We Are</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                LMS is a professional law firm providing expert legal consultation and representation in various areas of law. Established with a vision to bridge the gap between complex legal systems and the people who need them, we have grown into a trusted name in the legal community.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our firm is committed to providing reliable, professional, and client-focused legal services. We handle a diverse range of legal matters, ensuring that every client receives personalized attention and strategic representation tailored to their unique needs.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1000" alt="About Firm" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>

        {/* 2 & 3. Mission & Vision */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border-l-4 border-primary-600">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-3xl text-primary-600" />
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide professional, accessible, and reliable legal services while protecting the rights and interests of our clients. We strive to make justice accessible to everyone through transparent and ethical practices.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border-l-4 border-accent-500">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-3xl text-accent-500" />
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become a trusted and respected legal firm known for professionalism, integrity, and effective legal solutions. We aim to set new standards in legal practice through innovation and client-centric approaches.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Core Values */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">The principles that guide our practice and define our relationship with our clients.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors mx-auto">
                    <value.icon className="text-3xl text-primary-700 dark:text-accent-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Legal Expertise */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Legal Expertise</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">We specialize in a comprehensive range of legal domains to serve your diverse needs.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {expertise.map((area, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <area.icon className="text-3xl text-accent-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm md:text-base">{area.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Meet Our Team */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">Our Legal Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">Meet the dedicated professionals fighting for your justice.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                  <img src={member.img} alt={member.name} className="w-full h-64 object-cover bg-gray-200" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-primary-600 dark:text-accent-400 font-medium mb-4">{member.role}</p>
                    <Link to="/lawyers" className="inline-block px-6 py-2 border border-primary-600 text-primary-600 dark:text-accent-400 dark:border-accent-400 rounded-full font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-gray-900 transition-all">
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Why Clients Choose Us */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-12 text-center">Why Clients Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 relative z-10">Need Professional Legal Assistance?</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Let our experienced team guide you through your legal matters with expertise and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link to="/login" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2">
                  Book an Appointment <FaArrowRight />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  Contact Our Firm <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;