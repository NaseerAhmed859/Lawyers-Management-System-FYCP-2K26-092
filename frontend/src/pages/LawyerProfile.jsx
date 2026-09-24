import { useParams, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaArrowLeft, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ✅ Import all team images from assets/team folder
import irfanImg from '../assets/team/irfan.jpg';
import zafarImg from '../assets/team/zaffar.jpg';
import aroonImg from '../assets/team/aroon.jpg';
import naeemImg from '../assets/team/naeem.jpg';
import shakeelImg from '../assets/team/shakeel.jpg';
import acharImg from '../assets/team/achar.jpg';
import pirbhatImg from '../assets/team/pirbhat.jpg';
import aftabImg from '../assets/team/aftab.jpg';
import adilImg from '../assets/team/aadil.jpg';  // ✅ Fixed: aadilImg → adilImg
import duaImg from '../assets/team/dua.jpg';
import iqraImg from '../assets/team/iqra.jpg';
import akramImg from '../assets/team/akram.jpg'; 
import arImg from '../assets/team/ar.jpg'; 
import nabibuxImg from '../assets/team/nabibux.jpg';


const LawyerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ All 16 Lawyers Data with proper image imports (UNCHANGED)
  const lawyers = [
    {
      id: 1,
      name: 'Irfan Rahujo',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '0346-8796336',
      email: 'irfanrahujo@gmail.com',
      image: irfanImg,
      bio: 'A dedicated advocate committed to upholding justice and protecting the rights and interests of clients, with experience in civil and criminal litigation, including criminal defence, bail applications, trial advocacy, legal consultation, and dispute resolution. Skilled in legal research, case-law analysis, legal drafting, negotiation, and courtroom advocacy.',
      experience: '18 Years',
      specialization: 'Civil & Criminal ',
      education: 'Bachelor of Laws (LL.B Hons)'
    },
    {
      id: 2,
      name: 'Zaffar Hussain Chandio',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '+92 302 3058857',
      email: '......',
      image: zafarImg,
      bio: 'A dedicated advocate committed to upholding justice and protecting the rights and interests of clients, with experience in civil and criminal litigation, including criminal defence, bail applications, trial advocacy, legal consultation, and dispute resolution. Skilled in legal research, case-law analysis, legal drafting, negotiation, and courtroom advocacy.',
      experience: '15 Years',
      specialization: 'Civil & Criminal Litigation, Criminal Defence, Bail Applications, Trial Advocacy',
      education: 'BA.LLB'
    },
    {
      id: 3,
      name: 'Muhammad Akram Alias Rahib Mangrio',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '0308-2737959',
      email: 'E-makramadvocate1993@gmail.com',
      image: akramImg,
      bio: 'I am Muhammad Akram Alias Rahib Mangrio, Advocate High Court, a dedicated legal practitioner with active practice before the High Court of Sindh, Hyderabad Circuit Bench, and the Sessions Courts at Jamshoro. My professional practice is principally focused on criminal and family litigation, complemented by a strong commitment to legal research, case analysis, strategic advocacy, and meticulous legal drafting.',
      experience: '......',
      specialization: 'Criminal & Family Litigation, Legal Research, Case Analysis, Strategic Advocacy',
      education: 'LL.B'
    },
    {
      id: 4,
      name: 'Aroon Kumar',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh, Hyderabad',
      phone: '0333-7443521',
      email: 'aroon.kumar@email.com',
      image: aroonImg,
      bio: 'I, Aroon Kumar, am a practicing Advocate of the High Court of Sindh, Pakistan, based in Hyderabad. I specialize in criminal procedure, constitutional writs under Article 199, service matters, and public interest litigation. Previously serving as an Inspector in the Federal Board of Revenue (FBR), I returned to active practice to pursue my core passion for legal advocacy and justice.',
      experience: 'Former FBR Inspector',
      specialization: 'Criminal Procedure, Constitutional Writs (Article 199), Service Matters',
      location: 'Hyderabad'
    },
    {
      id: 5,
      name: 'Naeem Ahmed Rind',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh HYD',
      phone: '0346-8979400',
      email: 'naeemahmedrind474@gmail.com',
      image: naeemImg,
      bio: 'Naeem Ahmed Rind is an Advocate High Court with extensive experience in criminal, civil, and petition cases. He combines legal expertise with technical knowledge from his background in computer science. He is committed to providing sound legal advice, professional representation, and practical, client-focused legal solutions with integrity and diligence.',
      experience: '5 Years',
      specialization: 'Criminal, Civil & Petition Cases',
      education: 'BS Computer Science & BSC LLB',
      location: 'Hyderabad'
    },
    {
      id: 6,
      name: 'Nabi Bux Sand',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '+92340-8781828',
      email: '......',
      image: nabibuxImg,
      bio: 'Experienced Advocate High Court practicing before the High Court of Sindh and Subordinate Judiciary, with expertise in Criminal, Civil, Family, and Service Law. Skilled in legal drafting, pleadings, legal research, case-law analysis, case preparation, evidence appraisal, and courtroom advocacy.',
      experience: '......',
      specialization: 'Criminal, Civil, Family, and Service Law',
      education: 'LL.B'
    },
    {
      id: 7,
      name: 'Shakeel Ahmed Mangi',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '0300-2136128',
      email: 'shakeelahmed66125@gmail.com',
      image: shakeelImg,
      bio: 'Advocate Shakeel Ahmed is a practicing lawyer based in Hyderabad, Sindh, Pakistan, with experience in Civil, Criminal and Family Law. He regularly appears before the Courts and provides legal representation, consultation, drafting, and advocacy services. Committed to providing professional, practical, and client-focused legal services.',
      experience: '......',
      specialization: 'Criminal Law, Bail Matters, Civil Litigation, Family Law, Constitutional Petitions',
      education: 'LL.B',
      location: 'Hyderabad'
    },
    {
      id: 8,
      name: 'Allah Rakhio @ AR Rahujo',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '0346-8796336',
      email: 'shanrahujo7@gmail.com',
      image: arImg,
      bio: 'A dedicated advocate committed to upholding justice and protecting the rights and interests of clients, with experience in civil and criminal litigation, including criminal defence, bail applications, trial advocacy, legal consultation, and dispute resolution. Skilled in legal research, case-law analysis, legal drafting, negotiation, and courtroom advocacy.',
      experience: '3 Years',
      specialization: 'Constitutional Matters, FIA (Federal Investigation Agency) & NCCIA (National Cyber Crime Investigation Agency)',
      education: 'Bachelor of Laws (LL.B Hons)',
      location: 'Hyderabad & Jamshoro'
    },
    {
      id: 9,
      name: 'Muhammad Achar Jalbani',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '03258381548',
      email: 'jalbaniachar12@gmail.com',
      image: acharImg,
      bio: 'A dedicated advocate committed to upholding justice and protecting the rights and interests of clients, with experience in civil and criminal litigation, including criminal defence, bail applications, trial advocacy, legal consultation, and dispute resolution. Skilled in legal research, case-law analysis, legal drafting, negotiation, and courtroom advocacy.',
      experience: '8 Years',
      specialization: 'Civil & Criminal Litigation, Criminal Defence, Bail Applications, Trial Advocacy',
      education: 'BA.LLB',
      location: 'Hyderabad'
    },
    {
      id: 10,
      name: 'Pirbhat Amir (Ramsha Chandio)',
      designation: 'Adv Lower Court of Sindh',
      title: 'Adv Lower Court of Sindh',
      phone: '+92-3308138040',
      email: 'ramshachandio13@gmail.com',
      image: pirbhatImg,
      bio: 'I Pirbhat Amir, a practicing Advocate Lower Court enrolled with the Sindh Bar Council, bringing 2.5 years of experience in civil and criminal litigation, alternative dispute resolution (ADR), and legal document drafting. I specialize in managing court proceedings, preparing legal documents such as appeals, bail applications, and suits.',
      experience: '2.5 Years',
      specialization: 'Civil & Criminal Litigation, ADR, Legal Document Drafting',
      location: 'Hyderabad'
    },
    {
      id: 11,
      name: 'Abid Ali Jhatial',
      designation: 'Adv High Court of Sindh',
      title: 'Adv High Court of Sindh',
      phone: '0300-7007910',
      email: 'abidazadjhatial@gmail.com',
      image: null, // No image available
      bio: 'Advocate High Court with litigation experience.',
      experience: '......',
      specialization: 'High Court Matters, Civil Litigation',
      education: 'LL.B'
    },
    {
      id: 12,
      name: 'Aftab Ahmed Jatoi',
      designation: 'Adv Subordinate Courts',
      title: 'Adv Subordinate Courts ',
      phone: '0303-7668823',
      email: 'aft.ahmed1@gmail.com',
      image: aftabImg,
      bio: 'I am a practicing Advocate enrolled with the Subordinate Courts, with approximately two years of professional experience in legal practice, encompassing both civil and criminal litigation. My practice focuses on legal drafting, case preparation, legal research, case proceedings, and litigation strategy.',
      experience: '2 Years',
      specialization: 'Legal Drafting, Case Preparation, Legal Research, Litigation Strategy',
      education: 'LL.B. (Hons)'
    },
    {
      id: 13,
      name: 'Adil Hussain Jatoi',
      designation: 'Adv Subordinate Courts',
      title: 'Adv Subordinate Courts',
      phone: '0327-8316476',
      email: 'adilhussainjatoi@gmail.com',
      image: adilImg,
      bio: 'Aadil Hussain is an LLB (Hons) graduate and Advocate enrolled with the Subordinate Courts, currently practicing in District Jamshoro, Sindh. He has approximately two years of professional experience in legal practice, with exposure to both civil and criminal litigation.',
      experience: '2 Years',
      specialization: 'Legal Drafting, Case Preparation, Court Proceedings, Legal Research',
      location: 'District Jamshoro, Sindh',
      education: 'Bachelor of Laws (LLB Hons)'
    },
    {
      id: 14,
      name: 'Abdul Rasheed Saand',
      designation: 'Advocate',
      title: 'Advocate',
      phone: '0346-0257121',
      email: '......',
      image: null, // No image available
      bio: 'Advocate providing legal consultation.',
      experience: '......',
      specialization: 'General Practice',
      education: 'LL.B'
    },
    {
      id: 15,
      name: 'Duaa Tahir',
      designation: 'Advocate',
      title: 'Advocate',
      phone: '0303 3383767',
      email: 'tahirdua06@gmail.com',
      image: duaImg,
      bio: 'I, Duaa Tahir, am a practicing Advocate of the Subordinate Courts enrolled with the Sindh Bar Council, currently practicing in the District Courts of Hyderabad. My work involves civil, criminal, family, and constitutional litigation, with a focus on legal research, case preparation, drafting, evidence-related matters, and the preparation of pleadings.',
      experience: '......',
      specialization: 'Civil, Criminal, Family, and Constitutional Litigation, Human Rights',
      education: 'LL.B',
      location: 'Hyderabad'
    },
    {
      id: 16,
      name: 'Iqra Mustafa Bareejo',
      designation: 'Advocate',
      title: 'Advocate',
      phone: '+92 301 5529993',
      email: 'miqra8621@gmail.com',
      image: iqraImg,
      bio: 'I, Iqra Mustafa, am a practicing Advocate enrolled with the Sindh Bar Council, currently practicing in the district courts of Hyderabad. My work spans civil, criminal, and family litigation, where I focus on legal research, drafting, and preparing pleadings, applications, and other court documents.',
      experience: '......',
      specialization: 'Civil, Criminal, and Family Litigation, Legal Research, Alternative Dispute Resolution',
      education: 'LL.B',
      location: 'Hyderabad'
    }
  ];

  const lawyer = lawyers.find(l => l.id === parseInt(id));

  if (!lawyer) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Lawyer Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">This lawyer's profile is coming soon.</p>
            <button 
              onClick={() => navigate('/teams')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Back to Team
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Compact Back Button */}
      <div className="bg-gray-50 dark:bg-gray-800 py-3 border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/teams')}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium transition-colors text-sm"
          >
            <FaArrowLeft className="text-xs" /> Back to Team
          </button>
        </div>
      </div>

      {/* Compact Profile Section - Fits in One Screen */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          
          {/* Compact Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-5">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg flex-shrink-0">
                {lawyer.image ? (
                  <img 
                    src={lawyer.image} 
                    alt={lawyer.name}
                    className="w-full h-full rounded-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">${lawyer.name.charAt(0)}</div>`;
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
                    {lawyer.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{lawyer.name}</h1>
                <p className="text-blue-200 text-sm">{lawyer.title}</p>
              </div>
            </div>
          </div>

          {/* Compact Content */}
          <div className="p-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
              {/* Left Column - Contact Info (Compact) */}
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <FaPhone className="text-blue-600 dark:text-blue-400 text-base" />
                    <h3 className="font-semibold text-gray-800 dark:text-white text-sm">Phone</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">{lawyer.phone}</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-base" />
                    <h3 className="font-semibold text-gray-800 dark:text-white text-sm">Email</h3>
                  </div>
                  {lawyer.email !== '......' ? (
                    <a href={`mailto:${lawyer.email}`} className="text-blue-600 dark:text-blue-400 hover:underline break-all text-xs">
                      {lawyer.email}
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 text-xs">......</span>
                  )}
                </div>

                {lawyer.location && (
                  <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                    <div className="flex items-center gap-2 mb-1">
                      <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-base" />
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm">Location</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs">{lawyer.location}</p>
                  </div>
                )}

                {lawyer.experience && lawyer.experience !== '......' && (
                  <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                    <div className="flex items-center gap-2 mb-1">
                      <FaBriefcase className="text-blue-600 dark:text-blue-400 text-base" />
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm">Experience</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs">{lawyer.experience}</p>
                  </div>
                )}

                {lawyer.education && (
                  <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                    <div className="flex items-center gap-2 mb-1">
                      <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-base" />
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm">Education</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs">{lawyer.education}</p>
                  </div>
                )}
              </div>

              {/* Right Column - Bio & Specialization (Compact) */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 border-b border-blue-600 pb-1">About</h2>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{lawyer.bio}</p>
                </div>

                {lawyer.specialization && (
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 border-b border-blue-600 pb-1">Specialization</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{lawyer.specialization}</p>
                  </div>
                )}

                {/* Compact Contact Buttons */}
                <div className="flex gap-3 pt-3">
                  <a 
                    href={`tel:${lawyer.phone}`}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors text-sm font-semibold"
                  >
                    <FaPhone className="text-xs" /> Call Now
                  </a>
                  {lawyer.email !== '......' && (
                    <a 
                      href={`mailto:${lawyer.email}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors text-sm font-semibold"
                    >
                      <FaEnvelope className="text-xs" /> Send Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LawyerProfile;