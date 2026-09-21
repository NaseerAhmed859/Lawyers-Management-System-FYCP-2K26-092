import { FaBalanceScale, FaPhone, FaEnvelope, FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ✅ Team Images Imports
import founderImg from '../assets/sir-meer-ahmed-mangrio.jpg';
import acharImg from '../assets/team/achar.jpg';
import aadilImg from '../assets/team/aadil.jpg';
import aftabImg from '../assets/team/aftab.jpg';
import aroonImg from '../assets/team/aroon.jpg';
import duaImg from '../assets/team/dua.jpg';
import iqraImg from '../assets/team/iqra.jpg';
import irfanImg from '../assets/team/irfan.jpg';
import naeemImg from '../assets/team/naeem.jpg';
import pirbhatImg from '../assets/team/pirbhat.jpg';
import shakeelImg from '../assets/team/shakeel.jpg';
import zafarImg from '../assets/team/zaffar.jpg';

const Teams = () => {
  const { t } = useLanguage();

  // Founder Data
  const founder = {
    name: t('MEER AHMED MANGRIO'),
    title: t('Advocate Supreme Court'),
    cell: '0301-3504227',
    specialization: t('founder of the firm'),
    image: founderImg
  };

  // Team Members Data (objectPosition har photo ke liye set hai)
  // ✅ Jin lawyers ki details hain unke IDs add kiye hain
  const teamMembers = [
    { id: 1, name: t('Irfan Rahujo'), title: t('Adv High Court'), cell: '0346-2988615', specialization: t('legalServices'), image: irfanImg, objectPos: 'center 25%', hasProfile: false },
    { id: 2, name: t('Zaffar Hussain Chandio'), title: t('Adv High Court'), cell: '0302-3058857', specialization: t('legalServices'), image: zafarImg, objectPos: 'center 20%', hasProfile: false },
    { id: 3, name: t('M Akram Rahab Mangrio'), title: t('Adv High Court'), cell: '0312-3682470', specialization: t('legalServices'), image: null, objectPos: 'center 20%', hasProfile: false },
    { id: 4, name: t('Aroon Kumar'), title: t('Adv High Court'), cell: '0333-7443521', specialization: t('legalServices'), image: aroonImg, objectPos: 'center 10%', hasProfile: true }, // ✅
    { id: 5, name: t('Naeem Ahmed Rind'), title: t('Adv High Court'), cell: '0346-8979400', specialization: t('legalServices'), image: naeemImg, objectPos: 'center 20%', hasProfile: true }, // ✅
    { id: 6, name: t('Nabi Bux Sand'), title: t('Adv High Court'), cell: '0340-8781828', specialization: t('legalServices'), image: null, objectPos: 'center 20%', hasProfile: false },
    { id: 7, name: t('Shakeel Ahmed Mangi'), title: t('Adv High Court'), cell: '0300-2136128', specialization: t('legalServices'), image: shakeelImg, objectPos: 'center 15%', hasProfile: false },
    { id: 8, name: t('Allah Rakhio @ AR Rahujo'), title: t('Adv High Court'), cell: '0346-8796336', specialization: t('legalServices'), image: null, objectPos: 'center 20%', hasProfile: true }, // ✅
    { id: 9, name: t('Muhammad Achar Jalbani'), title: t('Adv High Court' ), cell: '0325-8381548', specialization: t('legalServices'), image: acharImg, objectPos: 'center 20%', hasProfile: false },
    { id: 10, name: t('Pirbhat Chandio'), title: t('Advocate'), cell: '0330-8138040', specialization: t('legalServices'), image: pirbhatImg, objectPos: 'center 25%', hasProfile: true }, // ✅ (I Pirbhat Amir)
    { id: 11, name: t('Abid Ali Jhatial'), title: t('Adv High Court'), cell: '0300-7007910', specialization: t('legalServices'), image: null, objectPos: 'center 20%', hasProfile: false },
    { id: 12, name: t('Aftab Ahmed Jatio'), title: t('Advocate'), cell: '0303-7668823', specialization: t('legalServices'), image: aftabImg, objectPos: 'center 20%', hasProfile: true }, // ✅
    { id: 13, name: t('Aadil Ali Jatio'), title: t('Advocate'), cell: '0327-8316476', specialization: t('legalServices'), image: aadilImg, objectPos: 'center 25%', hasProfile: true }, // ✅ (Adil Hussain)
    { id: 14, name: t('Abdul Rasheed Saand'), title: t('Advocate'), cell: '0346-0257121', specialization: t('legalServices'), image: null, objectPos: 'center 20%', hasProfile: false },
    { id: 15, name: t('Dua Tahir'), title: t('Advocate'), cell: '0303-3383767', specialization: t('legalServices'), image: duaImg, objectPos: 'center 25%', hasProfile: false },
    { id: 16, name: t('Iqra Mustafa Bareejo'), title: t('Advocte'), cell: '0301-5529993', specialization: t('legalServices'), image: iqraImg, objectPos: 'center 20%', hasProfile: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Firm Header */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-16 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">M/S MEER AHMED MANGRIO & ASSOCIATES</h1>
            <p className="text-xl text-gray-300 mb-2">Advocate Supreme Court</p>
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-accent-400" /> Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-t-4 border-accent-500">
              
              {/* Founder Image - Professional Circular */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent-400 shadow-lg flex-shrink-0 bg-gray-200">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>

              <div className="text-center md:text-left flex-grow">
                <span className="inline-block px-4 py-1 bg-accent-500 text-gray-900 font-bold rounded-full text-sm mb-4">
                  {founder.specialization}
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary-900 dark:text-white mb-2">
                  {founder.name}
                </h2>
                <p className="text-primary-600 dark:text-accent-400 font-medium text-lg mb-4">
                  {founder.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
                  <FaPhone className="text-accent-500" /> {founder.cell}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-white mb-12">
              {t('ourTeam') || 'Our Legal Team'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 hover:-translate-y-1 relative">
                  
                  <div className="flex items-start gap-6">
                    {/* Professional Circular Image with object-position */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent-400 flex-shrink-0 bg-gray-200 shadow-sm">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          style={{ objectPosition: member.objectPos || 'center 20%' }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700 font-bold text-2xl">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1 truncate">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 dark:text-accent-400 text-sm font-medium mb-2">
                        {member.title}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1 mb-3">
                        <FaPhone className="text-accent-500 text-[10px]" /> {member.cell}
                      </p>
                      
                      {/* ✅ View Profile Button - Right Side Bottom */}
                      {member.hasProfile ? (
                        <Link 
                          to={`/team/${member.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          <FaEye /> View Profile
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
                          <FaEye /> Coming Soon
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