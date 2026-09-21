import { useParams, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaArrowLeft, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ✅ Import actual images
import pirbhatImg from '../assets/team/pirbhat.jpg';
import aftabImg from '../assets/team/aftab.jpg';
//import rahimImg from '../assets/team/rahim.jpg'; // Agar hai toh
import adilImg from '../assets/team/aadil.jpg';
import naeemImg from '../assets/team/naeem.jpg';
import aroonImg from '../assets/team/aroon.jpg';

const LawyerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ IDs match with Teams.jsx
  const lawyers = [
    {
      id: 4, // Aroon Kumar
      name: 'Aroon Kumar',
      designation: 'Advocate High Court of Sindh',
      title: 'Advocate High Court of Sindh, Hyderabad',
      phone: '0333-7443521',
      email: 'aroon.kumar@email.com',
      image: aroonImg,
      bio: 'I, Aroon Kumar, am a practicing Advocate of the High Court of Sindh, Pakistan, based in Hyderabad. I specialize in criminal procedure, constitutional writs under Article 199, service matters, and public interest litigation. Previously serving as an Inspector in the Federal Board of Revenue (FBR), I returned to active practice to pursue my core passion for legal advocacy and justice. Today, I represent clients across Sindh\'s judicial forums while championing civic accountability, administrative transparency, and human rights through legal action.',
      experience: 'Former FBR Inspector',
      specialization: 'Criminal Procedure, Constitutional Writs (Article 199), Service Matters, Public Interest Litigation',
      location: 'Hyderabad'
    },
    {
      id: 5, // Naeem Ahmed Rind
      name: 'Naeem Ahmed Rind',
      designation: 'Advocate High Court',
      title: 'Advocate High Court, Hyderabad',
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
  id: 8,
  name: 'Allah Rakhio @ AR Rahujo',
  designation: 'Advocate, High Court of Sindh',
  title: 'Advocate, High Court of Sindh',
  phone: '0346-8796336',
  email: 'shanrahujo7@gmail.com',
  image: null, // ✅ Yahan change karna tha
  bio: 'A dedicated advocate committed to upholding justice and protecting the rights and interests of clients, with experience in civil and criminal litigation, including criminal defence, bail applications, trial advocacy, legal consultation, and dispute resolution. Skilled in legal research, case-law analysis, legal drafting, negotiation, and courtroom advocacy, with the ability to develop persuasive legal arguments and effective litigation strategies.',
  experience: '3 Years',
  specialization: 'Civil & Criminal Litigation, Criminal Defence, Bail Applications, Trial Advocacy',
  education: 'Bachelor of Laws (LL.B Hons)'
},
    {
      id: 10, // Pirbhat Chandio (I Pirbhat Amir)
      name: 'Pirbhat Amir (Ramsha Chandio)',
      designation: 'Advocate Lower Court',
      title: 'Advocate Lower Court',
      phone: '+92-3308138040',
      email: 'ramshachandio13@gmail.com',
      image: pirbhatImg,
      bio: 'I Pirbhat Amir, a practicing Advocate Lower Court enrolled with the Sindh Bar Council, bringing 2.5 years of experience in civil and criminal litigation, alternative dispute resolution (ADR), and legal document drafting. I specialize in managing court proceedings, preparing legal documents such as appeals, bail applications, and suits, and facilitating effective dispute resolutions. With strong critical thinking, communication, and client-focused problem-solving skills, I am committed to delivering strategic and reliable legal representation.',
      experience: '2.5 Years',
      specialization: 'Civil & Criminal Litigation, ADR, Legal Document Drafting'
    },
    {
      id: 12, // Aftab Ahmed Jatio
      name: 'Aftab Ahmed Jatoi',
      designation: 'Advocate, Subordinate Courts',
      title: 'Advocate, Subordinate Courts | LL.B. (Hons.)',
      phone: '0303-7668823',
      email: 'aft.ahmed1@gmail.com',
      image: aftabImg,
      bio: 'I am a practicing Advocate enrolled with the Subordinate Courts, with approximately two years of professional experience in legal practice, encompassing both civil and criminal litigation. My practice focuses on legal drafting, case preparation, legal research, case proceedings, and litigation strategy and committed to providing sound legal advice, effective representation, and practical legal solutions, while maintaining the highest standards of professional integrity, diligence, and confidentiality.',
      experience: '2 Years',
      specialization: 'Legal Drafting, Case Preparation, Legal Research, Litigation Strategy',
      education: 'LL.B. (Hons)'
    },
    {
      id: 13, // Aadil Ali Jatio (Adil Hussain)
      name: 'Adil Hussain',
      designation: 'Advocate, Subordinate Courts',
      title: 'Advocate, Subordinate Courts | LLB (Hons)',
      phone: '0327-8316476',
      email: 'adilhussainjatoi@gmail.com',
      image: adilImg,
      bio: 'Adil Hussain is an LLB (Hons) graduate and Advocate enrolled with the Subordinate Courts, currently practicing in District Jamshoro, Sindh. He has approximately two years of professional experience in legal practice, with exposure to both civil and criminal litigation. His areas of practice include legal drafting, case preparation, court proceedings, legal research, and assisting clients in civil and criminal matters.',
      experience: '2 Years',
      specialization: 'Legal Drafting, Case Preparation, Court Proceedings, Legal Research',
      location: 'District Jamshoro, Sindh',
      education: 'Bachelor of Laws (LLB Hons)'
    }
  ];

  const lawyer = lawyers.find(l => l.id === parseInt(id));

  if (!lawyer) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lawyer Not Found</h2>
            <p className="text-gray-600 mb-6">This lawyer's profile is coming soon.</p>
            <button 
              onClick={() => navigate('/teams')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
      
      {/* Back Button */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/teams')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <FaArrowLeft /> Back to Team
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header with Blue Background */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 px-6">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                {lawyer.image ? (
                  <img 
                    src={lawyer.image} 
                    alt={lawyer.name}
                    className="w-full h-full rounded-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-700">
                    {lawyer.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{lawyer.name}</h1>
                <p className="text-xl text-blue-200">{lawyer.title}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FaPhone className="text-blue-600 text-xl" />
                  <h3 className="font-bold text-gray-800 dark:text-white">Phone</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{lawyer.phone}</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-blue-600 text-xl" />
                  <h3 className="font-bold text-gray-800 dark:text-white">Email</h3>
                </div>
                <a href={`mailto:${lawyer.email}`} className="text-blue-600 hover:underline break-all">
                  {lawyer.email}
                </a>
              </div>

              {lawyer.location && (
                <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    <h3 className="font-bold text-gray-800 dark:text-white">Location</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{lawyer.location}</p>
                </div>
              )}

              {lawyer.experience && (
                <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBriefcase className="text-blue-600 text-xl" />
                    <h3 className="font-bold text-gray-800 dark:text-white">Experience</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{lawyer.experience}</p>
                </div>
              )}

              {lawyer.education && (
                <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-blue-600 text-xl" />
                    <h3 className="font-bold text-gray-800 dark:text-white">Education</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{lawyer.education}</p>
                </div>
              )}
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">About</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">{lawyer.bio}</p>
            </div>

            {/* Specialization */}
            {lawyer.specialization && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">Specialization</h2>
                <p className="text-gray-700 dark:text-gray-300">{lawyer.specialization}</p>
              </div>
            )}

            {/* Contact Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a 
                href={`tel:${lawyer.phone}`}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <FaPhone /> Call Now
              </a>
              <a 
                href={`mailto:${lawyer.email}`}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <FaEnvelope /> Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LawyerProfile;