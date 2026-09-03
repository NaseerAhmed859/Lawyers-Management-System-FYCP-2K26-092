import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaWhatsapp, FaCalendarAlt, FaPaperPlane, FaGavel,
  FaBuilding, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    lawyer: '',
    practiceArea: '',
    date: '',
    time: '',
    details: ''
  });
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (Backend ke liye ready)
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    localStorage.setItem('contactMessages', JSON.stringify([...messages, { ...formData, date: new Date().toISOString(), status: 'New' }]));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Save appointments
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    localStorage.setItem('appointments', JSON.stringify([...appointments, { ...appointmentData, date: new Date().toISOString(), status: 'Pending' }]));
    setAppointmentBooked(true);
    setTimeout(() => {
      setAppointmentBooked(false);
      setAppointmentData({ lawyer: '', practiceArea: '', date: '', time: '', details: '' });
    }, 3000);
  };

  const firmAddress = 'Office No. 3 Behind DIALDAS Club, Near High Court of Sindh, Hyderabad';
  const mainPhone = '0301-3504227';
  const firmEmail = 'contact@meerahmedmangrio.com';
  const officeHours = 'Mon - Sat: 9:00 AM - 6:00 PM';

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {t('contactUs')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('getInTouchWithOurLawFirm')}
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Address */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-primary-700 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('officeAddress')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{firmAddress}</p>
              </div>

              {/* Phone */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <FaPhone className="text-2xl text-primary-700 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('phone')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">{mainPhone}</p>
              </div>

              {/* Email */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <FaEnvelope className="text-2xl text-primary-700 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('email')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{firmEmail}</p>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-primary-700 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t('officeHours')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{officeHours}</p>
              </div>
            </div>

            {/* WhatsApp & Emergency */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href={`https://wa.me/92${mainPhone.replace('0', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl shadow-md transition-all flex items-center gap-4"
              >
                <FaWhatsapp className="text-3xl" />
                <div>
                  <h3 className="text-lg font-bold">{t('whatsapp')}</h3>
                  <p className="text-sm opacity-90">{mainPhone}</p>
                </div>
              </a>

              <div className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl shadow-md transition-all flex items-center gap-4">
                <FaExclamationCircle className="text-3xl" />
                <div>
                  <h3 className="text-lg font-bold">{t('urgentLegalAssistance')}</h3>
                  <p className="text-sm opacity-90">{t('callNow')}: {mainPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary-800 dark:text-white mb-6">
                  {t('sendUsAMessage')}
                </h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-2">
                    <FaCheckCircle /> {t('messageSentSuccessfully')}
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                      placeholder={t('fullName')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('phone')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                        placeholder="03XX-XXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('subject')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                      placeholder={t('subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('message')} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                      placeholder={t('describeYourLegalMatter')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> {t('sendMessage')}
                  </button>
                </form>
              </div>

              {/* Map & Office Location */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary-800 dark:text-white mb-6">
                  {t('officeLocation')}
                </h2>
                
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-6">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <FaMapMarkerAlt className="text-5xl mx-auto mb-2" />
                    <p className="font-semibold">{t('googleMapsIntegration')}</p>
                    <p className="text-sm mt-1">{firmAddress}</p>
                  </div>
                </div>

                {/* Book Appointment Button */}
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-6 text-center">
                  <FaCalendarAlt className="text-4xl text-gray-900 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('bookAppointmentWithOurLawyers')}
                  </h3>
                  <p className="text-gray-900 mb-4">
                    {t('scheduleAConsultationToday')}
                  </p>
                  <a
                    href="#appointment"
                    className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all"
                  >
                    {t('bookAppointment')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section id="appointment" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
                {t('bookAnAppointment')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t('selectYourPreferredLawyerAndTime')}
              </p>
            </div>

            {appointmentBooked && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-2">
                <FaCheckCircle /> {t('appointmentBookedSuccessfully')}
              </div>
            )}

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('selectLawyer')} *
                    </label>
                    <select
                      required
                      value={appointmentData.lawyer}
                      onChange={(e) => setAppointmentData({ ...appointmentData, lawyer: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">{t('selectLawyer')}</option>
                      <option value="Meer Ahmed Mangrio">Meer Ahmed Mangrio (Advocate Supreme Court)</option>
                      <option value="Irfan Ali Rahujo">Irfan Ali Rahujo (Advocate High Court)</option>
                      <option value="Zafar Ali Chandio">Zafar Ali Chandio (Advocate High Court)</option>
                      <option value="Abida Parveen">Abida Parveen (Advocate High Court)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('selectPracticeArea')} *
                    </label>
                    <select
                      required
                      value={appointmentData.practiceArea}
                      onChange={(e) => setAppointmentData({ ...appointmentData, practiceArea: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">{t('selectPracticeArea')}</option>
                      <option value="Criminal Law">{t('criminalLaw')}</option>
                      <option value="Civil Law">{t('civilLaw')}</option>
                      <option value="Family Law">{t('familyLaw')}</option>
                      <option value="Corporate Law">{t('corporateLaw')}</option>
                      <option value="Property Law">{t('propertyLaw')}</option>
                      <option value="Constitutional Law">{t('constitutionalLaw')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('selectDate')} *
                    </label>
                    <input
                      type="date"
                      required
                      value={appointmentData.date}
                      onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('selectTime')} *
                    </label>
                    <input
                      type="time"
                      required
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('caseDetails')} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={appointmentData.details}
                    onChange={(e) => setAppointmentData({ ...appointmentData, details: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500"
                    placeholder={t('brieflyDescribeYourCase')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt /> {t('confirmAppointment')}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Office Hours Detailed */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-800 dark:text-white mb-6">
              {t('officeHours')}
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white">Monday - Friday</span>
                  <span className="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white">Saturday</span>
                  <span className="text-gray-600 dark:text-gray-400">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Sunday</span>
                  <span className="text-red-600 dark:text-red-400 font-bold">Closed</span>
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

export default Contact;