import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FamilyCaseDetails from './FamilyCaseDetails';
import CriminalCaseDetails from './CriminalCaseDetails';
import CustomCaseDetails from './CustomCaseDetails'; // ✅ Nayi file import ki

const CaseFileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const cases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    const foundCase = cases.find(c => c.id.toString() === id);
    if (foundCase) {
      setCaseData(foundCase);
    } else {
      alert('Case not found!');
      navigate('/dashboard/case-file');
    }
  }, [id, navigate]);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Loading Case Details...</h2>
        </div>
      </div>
    );
  }

  // ✅ Logic to determine which component to render
  const isFamilyCase = caseData.subject && caseData.subject.toLowerCase().includes('family');
  const isCriminalCase = caseData.subject === 'Criminal Cases'; 
  // Agar Family nahi hai aur exactly "Criminal Cases" bhi nahi hai, toh wo "Other/Custom" case hai.
  const isOtherCase = !isFamilyCase && !isCriminalCase; 

  return (
    <>
      <Navbar />
      <Sidebar />
      
      {/* Conditionally render the correct component based on case type */}
      {isFamilyCase ? (
        <FamilyCaseDetails caseData={caseData} />
      ) : isCriminalCase ? (
        <CriminalCaseDetails caseData={caseData} />
      ) : (
        <CustomCaseDetails caseData={caseData} />
      )}
    </>
  );
};

export default CaseFileDetails;