import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaPlus, FaTrash, FaGavel, FaUser, FaCalendarAlt, FaBalanceScale } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AddCase = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [caseData, setCaseData] = useState({
    courtName: '', caseNo: '', year: new Date().getFullYear(), caseCategory: 'Civil', 
    party1Role: 'Plaintiff', party1Name: '', party2Role: 'Defendant', party2Name: '',
    subject: '', engagedDate: '', filedDate: '', decidedDate: '', result: 'Pending',
    clientName: '', clientCell: '',
  });

  const [hearings, setHearings] = useState([{ date: '', particulars: '' }]);

  const handleChange = (e) => setCaseData({ ...caseData, [e.target.name]: e.target.value });
  const handleHearingChange = (index, e) => {
    const newHearings = [...hearings];
    newHearings[index][e.target.name] = e.target.value;
    setHearings(newHearings);
  };
  const addHearingRow = () => setHearings([...hearings, { date: '', particulars: '' }]);
  const removeHearingRow = (index) => setHearings(hearings.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCase = { id: Date.now(), ...caseData, hearings: hearings.filter(h => h.date !== ''), status: 'Active', nextHearing: hearings.length > 0 ? hearings[hearings.length - 1].date : 'TBD' };
    const existingCases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    localStorage.setItem('firmCases', JSON.stringify([...existingCases, newCase]));
    alert('Case File Created Successfully!');
    navigate('/dashboard/case-diary');
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
              <h2 className="text-xl font-semibold text-primary-700 dark:text-accent-400 mt-4">{t('createNewCase')}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2"><FaGavel /> {t('courtCaseDetails')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('inTheCourtOf')}</label>
                    <input type="text" name="courtName" required onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('caseNumber')}</label>
                    <div className="flex gap-2">
                      <input type="text" name="caseNo" required onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                      <input type="number" name="year" value={caseData.year} onChange={handleChange} className="w-20 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('natureOfCase')}</label>
                    <select name="caseCategory" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
                      <select name="party1Role" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="Plaintiff">{t('plaintiff')}</option>
                        <option value="Petitioner">{t('petitioner')}</option>
                        <option value="Applicant">{t('applicant')}</option>
                        <option value="Complainant">{t('complainant')}</option>
                        <option value="Appellant">{t('appellant')}</option>
                      </select>
                      <input type="text" name="party1Name" required onChange={handleChange} className="w-full p-2 border-b-2 border-gray-300 bg-transparent dark:text-white dark:border-gray-600" />
                    </div>
                    <div className="text-center font-bold text-xl text-gray-400 flex items-center justify-center h-full pb-2"><FaBalanceScale className="mr-2" /> {t('versus')}</div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase">{t('partyTypeRight')}</label>
                      <select name="party2Role" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="Defendant">{t('defendant')}</option>
                        <option value="Respondent">{t('respondent')}</option>
                        <option value="Opponent">{t('opponent')}</option>
                        <option value="Accused">{t('accused')}</option>
                        <option value="Judgement-Debtor">{t('judgementDebtor')}</option>
                      </select>
                      <input type="text" name="party2Name" required onChange={handleChange} className="w-full p-2 border-b-2 border-gray-300 bg-transparent dark:text-white dark:border-gray-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2"><FaCalendarAlt /> {t('caseTimeline')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('subjectTitle')}</label>
                    <input type="text" name="subject" required onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('engagedOn')}</label><input type="date" name="engagedDate" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('filedOn')}</label><input type="date" name="filedDate" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('decidedOn')}</label><input type="date" name="decidedDate" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('result')}</label>
                    <select name="result" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="Pending">{t('pending')}</option>
                      <option value="Decreed">{t('decreed')}</option>
                      <option value="Dismissed">{t('dismissed')}</option>
                      <option value="Withdrawn">{t('withdrawn')}</option>
                      <option value="Acquitted">{t('acquitted')}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2"><FaUser /> {t('clientInfo')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('clientNameFor')}</label><input type="text" name="clientName" required onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('cellNumber')}</label><input type="tel" name="clientCell" required onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">{t('hearingHistory')}</h3>
                  <button type="button" onClick={addHearingRow} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"><FaPlus /> {t('addHearing')}</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left w-40">{t('dateOfHearing')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">{t('particularsOrder')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 w-16 text-center">{t('action')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hearings.map((hearing, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="border border-gray-300 dark:border-gray-600 p-1"><input type="date" name="date" value={hearing.date} onChange={(e) => handleHearingChange(index, e)} className="w-full p-1 bg-transparent outline-none dark:text-white" /></td>
                          <td className="border border-gray-300 dark:border-gray-600 p-1"><input type="text" name="particulars" value={hearing.particulars} onChange={(e) => handleHearingChange(index, e)} className="w-full p-1 bg-transparent outline-none dark:text-white" /></td>
                          <td className="border border-gray-300 dark:border-gray-600 p-1 text-center">{hearings.length > 1 && (<button type="button" onClick={() => removeHearingRow(index)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button>)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end gap-4 pb-8">
                <button type="button" onClick={() => navigate('/dashboard/case-diary')} className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400">{t('cancel')}</button>
                <button type="submit" className="flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg font-bold shadow-lg hover:bg-primary-800 transition-all"><FaSave /> {t('saveCaseFile')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCase;