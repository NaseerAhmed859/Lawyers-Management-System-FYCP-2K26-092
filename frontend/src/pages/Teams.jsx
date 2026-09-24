import { FaBalanceScale, FaPhone, FaEnvelope, FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ✅ Team Images Imports
import founderImg from '../assets/sir-meer-ahmed-mangrio.jpg';
import irfanImg from '../assets/team/irfan.jpg';
import zafarImg from '../assets/team/zaffar.jpg';
import aroonImg from '../assets/team/aroon.jpg';
import naeemImg from '../assets/team/naeem.jpg';
import shakeelImg from '../assets/team/shakeel.jpg';
import acharImg from '../assets/team/achar.jpg';
import pirbhatImg from '../assets/team/pirbhat.jpg';
import aftabImg from '../assets/team/aftab.jpg';
import aadilImg from '../assets/team/aadil.jpg';
import duaImg from '../assets/team/dua.jpg';
import iqraImg from '../assets/team/iqra.jpg';
import akramImg from '../assets/team/akram.jpg'; 
import arImg from '../assets/team/ar.jpg'; 
import nabibuxImg from '../assets/team/nabibux.jpg';

const Teams = () => {
  const { t } = useLanguage();

  // Founder Data
  const founder = {
    name: 'Meer Ahmed Mangrio',
    title: 'Advocate Supreme Court',
    cell: '0301-3504227',
    specialization: 'Founder of the firm',
    image: founderImg
  };

  // Team Members Data
  const teamMembers = [
    { id: 1, name: 'Irfan Rahujo', title: 'Adv High Court of Sindh', cell: '0346-8796336', specialization: 'Civil & Criminal Litigation', image: irfanImg, objectPos: 'center 25%', hasProfile: true },
    { id: 2, name: 'Zaffar Hussain Chandio', title: 'Adv High Court of Sindh', cell: '+92 302 3058857', specialization: 'Civil & Criminal Litigation', image: zafarImg, objectPos: 'center 20%', hasProfile: true },
    { id: 3, name: 'Muhammad Akram Alias Rahib Mangrio', title: 'Adv High Court of sindh', cell: '......', specialization: 'Criminal & Family Litigation', image: akramImg, objectPos: 'center 20%', hasProfile: true },
    { id: 4, name: 'Aroon Kumar', title: 'Adv High Court of sindh', cell: '0333-7443521', specialization: 'Legal Services', image: aroonImg, objectPos: 'center 10%', hasProfile: true },
    { id: 5, name: 'Naeem Ahmed Rind', title: 'Adv High Court of Sindh', cell: '0346-8979400', specialization: 'Legal Services', image: naeemImg, objectPos: 'center 20%', hasProfile: true },
    { id: 6, name: 'Nabi Bux Sand', title: 'Adv High Court of Sindh', cell: '......', specialization: 'Criminal, Civil, Family Law', image: nabibuxImg, objectPos: 'center 20%', hasProfile: true },
    { id: 7, name: 'Shakeel Ahmed Mangi', title: 'Adv High Court of Sindh', cell: '0300-2136128', specialization: 'Criminal, Civil and Family Law', image: shakeelImg, objectPos: 'center 15%', hasProfile: true },
    { id: 8, name: 'Allah Rakhio @ AR Rahujo', title: 'Adv High Court of Sindh', cell: '0346-8796336', specialization: 'Legal Services', image: arImg, objectPos: 'center 20%', hasProfile: true },
    { id: 9, name: 'Muhammad Achar Jalbani', title: 'Adv High Court of Sindh', cell: '03258381548', specialization: 'Civil & Criminal Litigation', image: acharImg, objectPos: 'center 20%', hasProfile: true },
    { id: 10, name: 'Pirbhat Chandio', title: 'Advocate', cell: '0330-8138040', specialization: 'Legal Services', image: pirbhatImg, objectPos: 'center 25%', hasProfile: true },
    { id: 11, name: 'Abid Ali Jhatial', title: 'Adv High Court of Sindh', cell: '0300-7007910', specialization: 'Legal Services', image: null, objectPos: 'center 20%', hasProfile: false },
    { id: 12, name: 'Aftab Ahmed Jatoi', title: 'Advocate', cell: '0303-7668823', specialization: 'Legal Services', image: aftabImg, objectPos: 'center 20%', hasProfile: true },
    { id: 13, name: 'Adil Hussain Jatoi', title: 'Advocate', cell: '0327-8316476', specialization: 'Legal Services', image: aadilImg, objectPos: 'center 25%', hasProfile: true },
    { id: 14, name: 'Abdul Rasheed Saand', title: 'Advocate', cell: '0346-0257121', specialization: 'Legal Services', image: null, objectPos: 'center 20%', hasProfile: false },
    { id: 15, name: 'Duaa Tahir', title: 'Advocate', cell: '0303 3383767', specialization: 'Civil, Criminal, Family Law', image: duaImg, objectPos: 'center 25%', hasProfile: true },
    { id: 16, name: 'Iqra Mustafa Bareejo', title: 'Advocate', cell: '+92 301 5529993', specialization: 'Civil, Criminal, and Family Litigation', image: iqraImg, objectPos: 'center 20%', hasProfile: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Firm Header - Compact */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-10 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">M/S MEER AHMED MANGRIO & ASSOCIATES</h1>
            <p className="text-base md:text-lg text-gray-300 mb-2">Advocate Supreme Court</p>
            <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-accent-400" /> Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad
            </p>
          </div>
        </section>

        {/* Founder Section - Compact */}
        <section className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-accent-500">
              
              {/* Founder Image - Compact */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent-400 shadow-lg flex-shrink-0 bg-gray-200">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>

              <div className="text-center md:text-left flex-grow">
                <span className="inline-block px-3 py-1 bg-accent-500 text-gray-900 font-bold rounded-full text-xs mb-3">
                  {founder.specialization}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-2">
                  {founder.name}
                </h2>
                <p className="text-primary-600 dark:text-accent-400 font-medium text-base md:text-lg mb-3">
                  {founder.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm">
                  <FaPhone className="text-accent-500" /> {founder.cell}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid - Compact & Professional */}
        <section className="py-10 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-primary-900 dark:text-white mb-8">
              Our Legal Team
            </h2>
            
            {/* Added xl:grid-cols-4 for better fit on large screens, reduced gap and padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:-translate-y-1 relative">
                  
                  <div className="flex items-start gap-3">
                    {/* Professional Circular Image - Compact */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-400 flex-shrink-0 bg-gray-200 shadow-sm">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          style={{ objectPosition: member.objectPos || 'center 20%' }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700 font-bold text-xl">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Member Info - Compact */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-0.5 truncate">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 dark:text-accent-400 text-xs font-medium mb-1">
                        {member.title}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-[10px] flex items-center gap-1 mb-2">
                        <FaPhone className="text-accent-500 text-[8px]" /> {member.cell}
                      </p>
                      
                      {/* View Profile Button - Compact */}
                      {member.hasProfile ? (
                        <Link 
                          to={`/team/${member.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-[10px] font-medium rounded transition-colors"
                        >
                          <FaEye className="text-[8px]" /> View Profile
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-medium rounded cursor-not-allowed">
                          <FaEye className="text-[8px]" /> Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
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

export default Teams;