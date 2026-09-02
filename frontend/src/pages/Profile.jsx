import { useState, useEffect } from 'react';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, 
  FaUniversity, FaGraduationCap, FaBriefcase, FaClock, 
  FaEdit, FaSave, FaCamera, FaCheckCircle, FaTimes,
  FaGavel, FaFileAlt, FaBalanceScale, FaBuilding,
  FaCalendarCheck, FaStar
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext'; // ✅ Added

const Profile = () => {
  const { user } = useAuth();
  const { t } = useLanguage(); // ✅ Added Translation Hook
  
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Profile Data State
  const [profile, setProfile] = useState({
    name: user?.name || 'Advocate Naseer Ahmed',
    email: user?.email || 'abc@gmail.com',
    phone: '+92 300 1234567',
    location: 'Karachi, Pakistan',
    profilePhoto: null,
    licenseNumber: 'BA-2015-12345',
    barAssociation: 'Sindh Bar Council',
    specialization: ['Criminal Law', 'Family Law', 'Civil Law'],
    yearsOfExperience: 10,
    education: 'LLB, LLM',
    university: 'University of Karachi',
    graduationYear: 2015,
    about: 'Experienced advocate with over 10 years of practice in criminal and civil law. Dedicated to providing exceptional legal services with integrity and professionalism.',
    expertise: 'Criminal Defense, Family Disputes, Property Cases, Corporate Law',
    services: ['Legal Consultation', 'Court Representation', 'Legal Documentation', 'Property/Civil Cases', 'Corporate Law', 'Family Law'],
    caseTypes: ['Criminal', 'Civil', 'Family', 'Corporate', 'Property'],
    experience: 'Handled 500+ cases across High Court and District Courts with 87% success rate.',
    isAvailable: true,
    consultationTimings: 'Mon - Sat: 9:00 AM - 6:00 PM',
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('lawyerProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('lawyerProfile', JSON.stringify(profile));
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleService = (service) => {
    const updated = profile.services.includes(service)
      ? profile.services.filter(s => s !== service)
      : [...profile.services, service];
    handleInputChange('services', updated);
  };

  const allServices = [
    'Legal Consultation', 'Court Representation', 'Legal Documentation',
    'Property/Civil Cases', 'Corporate Law', 'Family Law', 'Criminal Defense'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      {/* Header with Actions */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-serif">{t('myProfile')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{t('manageProfInfo')}</p>
        </div>
        <div className="flex gap-3">
          {saved && (
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
              <FaCheckCircle /> {t('profileSaved')}
            </div>
          )}
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 transition"
              >
                <FaTimes /> {t('cancel')}
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg hover:shadow-lg transition"
              >
                <FaSave /> {t('saveProfile')}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg hover:shadow-lg transition"
            >
              <FaEdit /> {t('editProfile')}
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN - Photo & Basic Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Photo Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center border-4 border-accent-400 shadow-lg">
                  {profile.profilePhoto ? (
                    <img src={profile.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <FaUser className="text-5xl text-white" />
                  )}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-600 shadow-lg">
                    <FaCamera className="text-white" />
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                  </label>
                )}
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white font-serif">{profile.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Advocate / Lawyer</p>
              
              {/* Availability Badge */}
              <div className="mt-3 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${profile.isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                <span className={`text-sm font-medium ${profile.isAvailable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {profile.isAvailable ? t('availableForConsultation') : t('currentlyUnavailable')}
                </span>
              </div>

              {/* Book Appointment Button */}
              <button
                onClick={() => setShowAppointmentModal(true)}
                className="mt-4 w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <FaCalendarCheck /> {t('bookAppointment')}
              </button>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaUser className="text-primary-600" /> {t('basicInfo')}
            </h3>
            <div className="space-y-4">
              <InfoField icon={FaEnvelope} label={t('email')} value={profile.email} field="email" isEditing={isEditing} onChange={handleInputChange} type="email" />
              <InfoField icon={FaPhone} label={t('phone')} value={profile.phone} field="phone" isEditing={isEditing} onChange={handleInputChange} type="tel" />
              <InfoField icon={FaMapMarkerAlt} label={t('location')} value={profile.location} field="location" isEditing={isEditing} onChange={handleInputChange} />
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaClock className="text-primary-600" /> {t('availability')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">{t('status')}</span>
                {isEditing ? (
                  <select
                    value={profile.isAvailable}
                    onChange={(e) => handleInputChange('isAvailable', e.target.value === 'true')}
                    className="px-3 py-1 border rounded-lg dark:bg-gray-600 dark:text-white"
                  >
                    <option value="true">{t('available')}</option>
                    <option value="false">{t('notAvailable')}</option>
                  </select>
                ) : (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${profile.isAvailable ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                    {profile.isAvailable ? t('available') : t('notAvailable')}
                  </span>
                )}
              </div>
              <InfoField icon={FaClock} label={t('consultationTimings')} value={profile.consultationTimings} field="consultationTimings" isEditing={isEditing} onChange={handleInputChange} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Professional & Other Info */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Professional Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaIdCard className="text-primary-600" /> {t('profInfo')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField icon={FaIdCard} label={t('licenseNum')} value={profile.licenseNumber} field="licenseNumber" isEditing={isEditing} onChange={handleInputChange} />
              <InfoField icon={FaBalanceScale} label={t('barAssoc')} value={profile.barAssociation} field="barAssociation" isEditing={isEditing} onChange={handleInputChange} />
              <InfoField icon={FaBriefcase} label={t('yearsExp')} value={profile.yearsOfExperience} field="yearsOfExperience" isEditing={isEditing} onChange={handleInputChange} type="number" />
              <InfoField icon={FaGraduationCap} label={t('education')} value={profile.education} field="education" isEditing={isEditing} onChange={handleInputChange} />
              <InfoField icon={FaUniversity} label={t('university')} value={profile.university} field="university" isEditing={isEditing} onChange={handleInputChange} />
              <InfoField icon={FaGraduationCap} label={t('gradYear')} value={profile.graduationYear} field="graduationYear" isEditing={isEditing} onChange={handleInputChange} type="number" />
            </div>

            {/* Specialization */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('specialization')}</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.specialization.join(', ')}
                  onChange={(e) => handleInputChange('specialization', e.target.value.split(',').map(s => s.trim()))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  placeholder="Criminal Law, Family Law, Civil Law"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.specialization.map((spec, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* About Lawyer */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaUser className="text-primary-600" /> {t('aboutLawyer')}
            </h3>
            {isEditing ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('biography')}</label>
                  <textarea
                    value={profile.about}
                    onChange={(e) => handleInputChange('about', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('expertise')}</label>
                  <textarea
                    value={profile.expertise}
                    onChange={(e) => handleInputChange('expertise', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profile.about}</p>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{t('expertise')}:</p>
                  <p className="text-gray-600 dark:text-gray-400">{profile.expertise}</p>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaBriefcase className="text-primary-600" /> {t('servicesOffered')}
            </h3>
            {isEditing ? (
              <div className="flex flex-wrap gap-2">
                {allServices.map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      profile.services.includes(service)
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {profile.services.map((service, idx) => {
                  const icons = {
                    'Legal Consultation': FaBalanceScale,
                    'Court Representation': FaGavel,
                    'Legal Documentation': FaFileAlt,
                    'Property/Civil Cases': FaBuilding,
                    'Corporate Law': FaBriefcase,
                    'Family Law': FaUser,
                    'Criminal Defense': FaGavel,
                  };
                  const Icon = icons[service] || FaBriefcase;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cases & Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaGavel className="text-primary-600" /> {t('casesExp')}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t('caseTypesHandled')}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.caseTypes.map((type, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{t('previousExperience')}</p>
                {isEditing ? (
                  <textarea
                    value={profile.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{profile.experience}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Booking Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('bookAppointment')}</h3>
              <button onClick={() => setShowAppointmentModal(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('appointmentRequestSentTo')} <strong>{profile.name}</strong>
            </p>
            <div className="space-y-3">
              <input type="date" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white" />
              <input type="time" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white" />
              <textarea placeholder={t('describeCaseBriefly')} rows={3} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white" />
              <button
                onClick={() => {
                  alert(t('appointmentSentSuccessfully'));
                  setShowAppointmentModal(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                {t('confirmAppointment')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Info Field Component
const InfoField = ({ icon: Icon, label, value, field, isEditing, onChange, type = 'text' }) => (
  <div>
    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
      <Icon className="text-primary-500" size={12} /> {label}
    </label>
    {isEditing ? (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(field, type === 'number' ? Number(e.target.value) : e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm"
      />
    ) : (
      <p className="text-gray-900 dark:text-white font-medium text-sm">{value}</p>
    )}
  </div>
);

export default Profile;