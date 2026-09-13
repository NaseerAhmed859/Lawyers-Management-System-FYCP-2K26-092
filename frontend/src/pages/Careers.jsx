import { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers, FaGraduationCap, FaHandshake, FaSearch, FaFilter, FaUpload, FaCheckCircle, FaClock, FaTimes, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const { t } = useLanguage();
  
  // Filter States
  const [filters, setFilters] = useState({
    position: '',
    jobType: '',
    practiceArea: '',
    experience: ''
  });

  // Application Form State
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [applicationData, setApplicationData] = useState({
    fullName: '', email: '', phone: '', position: '', qualification: '',
    experience: '', coverLetter: '', cvName: ''
  });

  // Sample Vacancies (Aap apni firm ke mutabiq edit kar sakte hain)
  const vacancies = [
    {
      id: 1,
      title: 'Associate Lawyer',
      type: 'Full Time',
      location: 'On-site | Hyderabad',
      practiceArea: 'Civil & Criminal',
      experience: '3-5 Years',
      requirements: ['LLB degree from recognized university', 'Strong legal research skills', 'Good communication in English & Urdu', 'Relevant experience in High Court preferred'],
      description: 'We are looking for an experienced Associate Lawyer to join our team and handle civil and criminal cases independently.'
    },
    {
      id: 2,
      title: 'Junior Associate',
      type: 'Full Time',
      location: 'On-site | Hyderabad',
      practiceArea: 'Family Law',
      experience: '1-3 Years',
      requirements: ['LLB degree', 'Interest in Family Law matters', 'Drafting skills', 'Client handling experience'],
      description: 'Junior Associate required to assist senior lawyers in family law cases including divorce, custody, and maintenance matters.'
    },
    {
      id: 3,
      title: 'Legal Intern',
      type: 'Internship',
      location: 'On-site | Hyderabad',
      practiceArea: 'All Practice Areas',
      experience: 'Fresh / Entry Level',
      requirements: ['Currently pursuing LLB', 'Eager to learn', 'Good research skills', 'Professional attitude'],
      description: 'Internship opportunity for law students to gain practical experience in a professional legal environment.'
    },
    {
      id: 4,
      title: 'Legal Assistant',
      type: 'Full Time',
      location: 'On-site | Hyderabad',
      practiceArea: 'Administrative',
      experience: '1-3 Years',
      requirements: ['Graduation (Law preferred)', 'Computer skills (MS Office)', 'Organizational skills', 'Good communication'],
      description: 'Legal Assistant required to manage case files, schedule hearings, and assist lawyers with administrative tasks.'
    },
    {
      id: 5,
      title: 'Legal Researcher',
      type: 'Part Time',
      location: 'Remote / On-site',
      practiceArea: 'Constitutional Law',
      experience: '1-3 Years',
      requirements: ['LLB or LLM', 'Strong research and analytical skills', 'Knowledge of Pakistani legal system', 'Report writing skills'],
      description: 'Legal Researcher needed to conduct in-depth research on constitutional matters and prepare legal opinions.'
    }
  ];

  // Filtered Vacancies
  const filteredVacancies = vacancies.filter(v => {
    if (filters.position && v.title !== filters.position) return false;
    if (filters.jobType && v.type !== filters.jobType) return false;
    if (filters.practiceArea && !v.practiceArea.includes(filters.practiceArea)) return false;
    if (filters.experience && v.experience !== filters.experience) return false;
    return true;
  });

  const clearFilters = () => {
    setFilters({ position: '', jobType: '', practiceArea: '', experience: '' });
  };

  const handleApplyClick = (positionTitle) => {
    setSelectedPosition(positionTitle);
    setApplicationData({ ...applicationData, position: positionTitle });
    setShowApplyForm(true);
    window.scrollTo({ top: document.getElementById('apply-section')?.offsetTop || 0, behavior: 'smooth' });
  };

  const handleApplicationChange = (e) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicationData({ ...applicationData, cvName: file.name });
    }
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    if (!applicationData.fullName || !applicationData.email || !applicationData.cvName) {
      alert('Please fill all required fields and upload CV!');
      return;
    }

    const newApplication = {
      id: Date.now(),
      ...applicationData,
      appliedDate: new Date().toLocaleDateString(),
      status: 'Submitted'
    };

    const existing = JSON.parse(localStorage.getItem('careerApplications') || '[]');
    localStorage.setItem('careerApplications', JSON.stringify([...existing, newApplication]));

    alert('Application Submitted Successfully! We will review your CV and contact you soon.');
    setApplicationData({
      fullName: '', email: '', phone: '', position: '', qualification: '',
      experience: '', coverLetter: '', cvName: ''
    });
    setShowApplyForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Build Your Career With
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-400 mb-6">
              M/S Meer Ahmed Mangrio & Associates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We welcome talented legal professionals, aspiring lawyers, and motivated individuals who want to develop their careers in a professional legal environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#vacancies" className="px-8 py-3 bg-accent-500 text-gray-900 font-bold rounded-lg hover:bg-accent-400 transition-all">
                View Open Positions
              </a>
              <button 
                onClick={() => handleApplyClick('')}
                className="px-8 py-3 bg-white text-primary-900 font-bold rounded-lg hover:bg-gray-100 transition-all"
              >
                Submit Your CV
              </button>
            </div>
          </div>
        </section>

        {/* Why Join Our Firm */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-white mb-12">
              Why Join Our Firm?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚖️', title: 'Professional Legal Environment', desc: 'Work in a well-established law firm with high ethical standards.' },
                { icon: '📚', title: 'Learning & Development', desc: 'Continuous learning opportunities and mentorship from senior lawyers.' },
                { icon: '👨‍⚖️', title: 'Work With Experienced Lawyers', desc: 'Collaborate with advocates having decades of experience.' },
                { icon: '🤝', title: 'Professional Growth', desc: 'Clear career progression path and growth opportunities.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-primary-700 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Vacancies with Filters */}
        <section id="vacancies" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-white mb-4">
              Current Opportunities
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Explore our open positions and find the role that matches your skills
            </p>

            {/* Filters */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <FaFilter className="text-primary-700" />
                <h3 className="font-bold text-gray-700 dark:text-gray-200">Filter Positions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select 
                  value={filters.position} 
                  onChange={(e) => setFilters({...filters, position: e.target.value})}
                  className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Positions</option>
                  <option value="Associate Lawyer">Associate Lawyer</option>
                  <option value="Junior Associate">Junior Associate</option>
                  <option value="Legal Intern">Legal Intern</option>
                  <option value="Legal Assistant">Legal Assistant</option>
                  <option value="Legal Researcher">Legal Researcher</option>
                </select>

                <select 
                  value={filters.jobType} 
                  onChange={(e) => setFilters({...filters, jobType: e.target.value})}
                  className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Job Types</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                </select>

                <select 
                  value={filters.practiceArea} 
                  onChange={(e) => setFilters({...filters, practiceArea: e.target.value})}
                  className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Practice Areas</option>
                  <option value="Civil">Civil</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Family">Family</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Constitutional">Constitutional</option>
                </select>

                <select 
                  value={filters.experience} 
                  onChange={(e) => setFilters({...filters, experience: e.target.value})}
                  className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Experience Levels</option>
                  <option value="Fresh / Entry Level">Fresh / Entry Level</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="3-5 Years">3-5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                >
                  <FaTimes /> Clear Filters
                </button>
              </div>
            </div>

            {/* Vacancies List */}
            {filteredVacancies.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <FaBriefcase className="text-6xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">No Current Openings</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We are not currently hiring, but you may submit your CV for future opportunities.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredVacancies.map((vacancy) => (
                  <div key={vacancy.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary-700 hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                          {vacancy.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium">
                            <FaBriefcase /> {vacancy.type}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            <FaMapMarkerAlt /> {vacancy.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 rounded-full text-sm">
                            <FaUsers /> {vacancy.practiceArea}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                            <FaClock /> {vacancy.experience}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{vacancy.description}</p>
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {vacancy.requirements.map((req, idx) => (
                              <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm">{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-2 md:w-40">
                        <button 
                          onClick={() => handleApplyClick(vacancy.title)}
                          className="flex-1 px-4 py-2 bg-primary-700 text-white rounded hover:bg-primary-800 font-semibold text-sm"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Apply Now Form */}
        <section id="apply-section" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border-t-4 border-primary-700">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary-900 dark:text-white mb-2">
                  Apply Now
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Submit your application and join our team
                </p>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={applicationData.fullName}
                      onChange={handleApplicationChange}
                      required
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={applicationData.email}
                      onChange={handleApplicationChange}
                      required
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={applicationData.phone}
                      onChange={handleApplicationChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Position <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="position" 
                      value={applicationData.position}
                      onChange={handleApplicationChange}
                      required
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">-- Select Position --</option>
                      <option value="Associate Lawyer">Associate Lawyer</option>
                      <option value="Junior Associate">Junior Associate</option>
                      <option value="Legal Intern">Legal Intern</option>
                      <option value="Legal Assistant">Legal Assistant</option>
                      <option value="Legal Researcher">Legal Researcher</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Qualification</label>
                    <input 
                      type="text" 
                      name="qualification" 
                      value={applicationData.qualification}
                      onChange={handleApplicationChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="e.g., LLB, LLM"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Experience</label>
                    <select 
                      name="experience" 
                      value={applicationData.experience}
                      onChange={handleApplicationChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">-- Select Experience --</option>
                      <option value="Fresh / Entry Level">Fresh / Entry Level</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter</label>
                  <textarea 
                    name="coverLetter" 
                    value={applicationData.coverLetter}
                    onChange={handleApplicationChange}
                    rows="4"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Tell us why you want to join our firm..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Upload CV <span className="text-red-500">*</span> (PDF, DOC)
                  </label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="flex-grow p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    {applicationData.cvName && (
                      <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                        <FaCheckCircle /> {applicationData.cvName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg font-bold shadow-lg hover:bg-primary-800 transition-all"
                  >
                    <FaUpload /> Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;