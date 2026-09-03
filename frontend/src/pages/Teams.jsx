import { FaPhone, FaMapMarkerAlt, FaGavel, FaBalanceScale, FaUserTie, FaBuilding } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import leaderPhoto from '../assets/sir-meer-ahmed-mangrio.jpg'; // ✅ Import hamesha top par hota hai

const Teams = () => {
  const { t } = useLanguage();

  const firmLeader = {
    name: 'MEER AHMED MANGRIO',
    title: 'Advocate Supreme Court',
    cell: '0301-3504227',
    role: 'Founder & Senior Partner',
    image: leaderPhoto, // ✅ Yahan sirf variable ka naam use hoga, import nahi
  };

  const teamMembers = [
  { name: 'IRFAN ALI RAHUJO', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'ZAFFAR HUSSAIN CHANDIO', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'M AKRAM @ RAHIB MANGRIO', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'AROON KUMAR', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'NAEEM AHMED RIND', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'NABI BUX SAND', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'SHAKEEL AHMED MANGI', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'ALLAH RAKHIYO RAHUJO', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'MUHAMMAD ACHAR JALBANI', title: 'Advocate High Court', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'PIRBHAT CHANDIO', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'ABID ALI JATIYAL', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'AFTAB AHMED JATOI', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'AADIL ALI JATOI', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'RASHID AHMED SAND', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'DUA TAHIR', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' },
  { name: 'IQRA MUSTAFA BAREEJO', title: 'Advocate', cell: '03XX-XXXXXXX', specialization: 'Legal Services' }
];

  const officeAddress = 'Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad';

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaBuilding className="text-4xl text-accent-400" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                M/S MEER AHMED MANGRIO & ASSOCIATES
              </h1>
            </div>
            <p className="text-xl text-gray-300">{t('advocateSupremeCourt')}</p>
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-accent-400" />
              <p>{officeAddress}</p>
            </div>
          </div>
        </section>

        {/* Firm Leader Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-t-4 border-accent-500">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center border-4 border-accent-400 shadow-lg">
                  <img 
                    src={firmLeader.image} 
                    alt={firmLeader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="inline-block px-4 py-1 bg-accent-500 text-gray-900 rounded-full text-sm font-bold mb-2">
                    {t('founderSeniorPartner')}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-serif mb-2">
                    {firmLeader.name}
                  </h2>
                  <p className="text-lg text-primary-700 dark:text-accent-400 font-semibold mb-3">
                    {firmLeader.title}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400">
                    <FaPhone className="text-primary-600" />
                    <span className="font-mono text-lg">{firmLeader.cell}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
                {t('ourLegalTeam')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('experiencedAdvocates')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center flex-shrink-0">
                        <FaBalanceScale className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white font-serif mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary-700 dark:text-accent-400 font-medium mb-2">
                          {member.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                          {member.specialization}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FaPhone className="text-primary-600 text-xs" />
                          <span className="font-mono">{member.cell}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-primary-50 dark:bg-primary-900/20 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <FaGavel className="text-primary-600" />
                      <span>{t('highCourtOfSindh')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <FaBuilding className="text-4xl text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('mainOffice')}</h3>
                <p className="text-gray-300">Office No. 3 Behind DIALDAS Club</p>
                <p className="text-gray-300">{t('nearHighCourtOfSindh')}</p>
                <p className="text-accent-400 font-semibold mt-2">Hyderabad</p>
              </div>
              <div className="p-6">
                <FaPhone className="text-4xl text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('contactNumbers')}</h3>
                <p className="text-gray-300">{t('main')}: {firmLeader.cell}</p>
                <p className="text-gray-300">{t('teamMembersCount')}</p>
                <p className="text-accent-400 font-semibold mt-2">{t('available247')}</p>
              </div>
              <div className="p-6">
                <FaBalanceScale className="text-4xl text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('practiceAreas')}</h3>
                <p className="text-gray-300">{t('criminalCivilConstitutional')}</p>
                <p className="text-gray-300">{t('corporateFamilyProperty')}</p>
                <p className="text-accent-400 font-semibold mt-2">& {t('more')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('needLegalAssistance')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('contactAnyTeamMember')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${firmLeader.cell}`}
                className="px-8 py-3 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <FaPhone /> {t('callSeniorPartner')}
              </a>
              <button className="px-8 py-3 bg-white dark:bg-gray-700 text-primary-700 dark:text-accent-400 font-bold rounded-lg border-2 border-primary-700 dark:border-accent-400 hover:bg-primary-50 dark:hover:bg-gray-600 transition-all">
                {t('contactTeam')}
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;