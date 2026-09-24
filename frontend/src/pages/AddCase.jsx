import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ useLocation add kiya
import { FaSave, FaPlus, FaTrash, FaGavel, FaUser, FaCalendarAlt, FaBalanceScale } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AddCase = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Location hook
  
  // ✅ Check karein ke kya pichle page se koi data aa raha hai (Edit mode)
  const editData = location.state?.formData;
  const editCaseId = location.state?.caseId;

  // ✅ Standard subjects ki list (taake custom subject pehchan sakein)
  const standardSubjects = [
    "Criminal Cases", 
    "Family Cases/Family Matters", 
    "Petition Court", 
    "Criminal Bail Application", 
    "Criminal Appeal (Cr. Appeal)"
  ];

  // ✅ Agar editData hai toh usay use karein, warna khali form
  const [isCustomSubject, setIsCustomSubject] = useState(
    editData?.subject && !standardSubjects.includes(editData.subject)
  );
  
  const [caseData, setCaseData] = useState(editData || {
    courtName: '', caseNo: '', year: new Date().getFullYear(), caseCategory: 'Civil', 
    party1Role: 'Plaintiff', party1Name: '', party2Role: 'Defendant', party2Name: '',
    subject: '', engagedDate: '', filedDate: '', decidedDate: '', result: 'Pending',
    clientName: '', clientCell: '',
  });

  const handleChange = (e) => setCaseData({ ...caseData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingCases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    let finalCase;

    // ✅ Agar ye Edit mode hai (yani caseId mila hai), toh purana case update karein
    if (editCaseId) {
      const caseIndex = existingCases.findIndex(c => c.id === editCaseId);
      if (caseIndex > -1) {
        existingCases[caseIndex] = { ...existingCases[caseIndex], ...caseData };
        finalCase = existingCases[caseIndex];
      }
    } else {
      // ✅ Naya case banayen
      finalCase = { id: Date.now(), ...caseData, hearings: [], status: 'Active', nextHearing: 'TBD' };
      existingCases.push(finalCase);
    }

    localStorage.setItem('firmCases', JSON.stringify(existingCases));
    alert('Case File Saved Successfully!');
    
    // ✅ Subject ke mutabiq page par jayen, aur sath mein data bhi bhejen (taake agar user wapis aye toh data mile)
    if (caseData.subject === 'Petition Court') {
      navigate(`/dashboard/petition-court/${finalCase.id}`, { state: { formData: caseData, caseId: finalCase.id } });
    } else if (caseData.subject === 'Criminal Bail Application') {
      navigate(`/dashboard/criminal-bail-application/${finalCase.id}`, { state: { formData: caseData, caseId: finalCase.id } });
    } else if (caseData.subject === 'Criminal Appeal (Cr. Appeal)') {
      navigate(`/dashboard/criminal-appeal/${finalCase.id}`, { state: { formData: caseData, caseId: finalCase.id } });
    } else {
      navigate(`/dashboard/case-file/${finalCase.id}`, { state: { formData: caseData, caseId: finalCase.id } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 border-b-2 border-gray-300 dark:border-gray-700 pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white font-serif tracking-wide">M/S MEER AHMED MANGRIO & ASSOCIATES</h1>
              <h2 className="text-xl font-semibold text-primary-700 dark:text-accent-400 mt-4">
                {editCaseId ? 'Edit Case File' : t('createNewCase')}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Court & Case Details */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2"><FaGavel /> {t('courtCaseDetails')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('inTheCourtOf')}</label>
                    <input type="text" name="courtName" required value={caseData.courtName} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('caseNumber')}</label>
                    <div className="flex gap-2">
                      <input type="text" name="caseNo" required value={caseData.caseNo} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                      <input type="number" name="year" value={caseData.year} onChange={handleChange} className="w-20 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('natureOfCase')}</label>
                    <select name="caseCategory" value={caseData.caseCategory} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="Civil">{t('civilSuit')}</option>
                      <option value="Criminal">{t('criminal')}</option>
                      <option value="Petition">{t('constPetition')}</option>
                      <option value="Misc">{t('miscApp')}</option>
                      <option value="Appeal">{t('appeal')}</option>
                    </select>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4 dark:border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase">{t('partyTypeLeft')}</label>
                      <select name="party1Role" value={caseData.party1Role} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="Plaintiff">{t('plaintiff')}</option>
                        <option value="Petitioner">{t('petitioner')}</option>
                        <option value="Applicant">{t('applicant')}</option>
                        <option value="Complainant">{t('complainant')}</option>
                        <option value="Appellant">{t('appellant')}</option>
                      </select>
                      <input type="text" name="party1Name" required value={caseData.party1Name} onChange={handleChange} className="w-full p-2 border-b-2 border-gray-300 bg-transparent dark:text-white dark:border-gray-600" />
                    </div>
                    <div className="text-center font-bold text-xl text-gray-400 flex items-center justify-center h-full pb-2"><FaBalanceScale className="mr-2" /> {t('versus')}</div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase">{t('partyTypeRight')}</label>
                      <select name="party2Role" value={caseData.party2Role} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="Defendant">{t('defendant')}</option>
                        <option value="Respondent">{t('respondent')}</option>
                        <option value="Opponent">{t('opponent')}</option>
                        <option value="Accused">{t('accused')}</option>
                        <option value="Judgement-Debtor">{t('judgementDebtor')}</option>
                      </select>
                      <input type="text" name="party2Name" required value={caseData.party2Name} onChange={handleChange} className="w-full p-2 border-b-2 border-gray-300 bg-transparent dark:text-white dark:border-gray-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Timeline & Subject Section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2"><FaCalendarAlt /> {t('caseTimeline')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('subjectTitle')}</label>
                    
                    {isCustomSubject ? (
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          name="subject" 
                          required 
                          value={caseData.subject}
                          onChange={handleChange} 
                          placeholder="Enter Subject"
                          className="w-full p-2 border-2 border-primary-500 rounded dark:bg-gray-700 dark:border-primary-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          autoFocus
                        />
                        <button 
                          type="button" 
                          onClick={() => {
                            setIsCustomSubject(false);
                            setCaseData({ ...caseData, subject: '' });
                          }}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm font-medium"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <select 
                        name="subject" 
                        required 
                        onChange={(e) => {
                          if (e.target.value === 'Others') {
                            setIsCustomSubject(true);
                            setCaseData({ ...caseData, subject: '' });
                          } else {
                            setIsCustomSubject(false);
                            setCaseData({ ...caseData, subject: e.target.value });
                          }
                        }} 
                        value={isCustomSubject ? '' : caseData.subject}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">-- Select Subject --</option>
                        <option value="Criminal Cases">Criminal Cases</option>
                        <option value="Family Cases/Family Matters">Family Cases/Family Matters</option>
                        <option value="Petition Court">Petition Court</option>
                        <option value="Criminal Bail Application">Criminal Bail Application</option>
                        <option value="Criminal Appeal (Cr. Appeal)">Criminal Appeal (Cr. Appeal)</option>
                        <option value="Others">Others (Enter Subject)</option>
                      </select>
                    )}
                  </div>

                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('engagedOn')}</label><input type="date" name="engagedDate" value={caseData.engagedDate} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('filedOn')}</label><input type="date" name="filedDate" value={caseData.filedDate} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('decidedOn')}</label><input type="date" name="decidedDate" value={caseData.decidedDate} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('result')}</label>
                    <select name="result" value={caseData.result} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="Pending">{t('pending')}</option>
                      <option value="Decreed">{t('decreed')}</option>
                      <option value="Dismissed">{t('dismissed')}</option>
                      <option value="Withdrawn">{t('withdrawn')}</option>
                      <option value="Acquitted">{t('acquitted')}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2"><FaUser /> {t('clientInfo')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('clientNameFor')}</label><input type="text" name="clientName" required value={caseData.clientName} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('cellNumber')}</label><input type="tel" name="clientCell" required value={caseData.clientCell} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pb-8">
                <button type="button" onClick={() => navigate('/dashboard/case-file')} className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400">{t('cancel')}</button>
                <button type="submit" className="flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg font-bold shadow-lg hover:bg-primary-800 transition-all"><FaSave /> {editCaseId ? 'Update Case File' : t('saveCaseFile')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCase;