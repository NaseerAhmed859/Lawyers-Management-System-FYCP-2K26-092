import { useState } from 'react';
import { FaPlus, FaTrash, FaCalendarAlt, FaSave } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const CaseDiary = () => {
  const { t } = useLanguage();

  // Case selection state
  const [selectedCase, setSelectedCase] = useState('');
  
  const [cases, setCases] = useState(() => {
    return JSON.parse(localStorage.getItem('firmCases') || '[]');
  });

  // Hearings state
  const [hearings, setHearings] = useState([{ date: '', particulars: '' }]);

  const handleHearingChange = (index, e) => {
    const newHearings = [...hearings];
    newHearings[index][e.target.name] = e.target.value;
    setHearings(newHearings);
  };

  const addHearingRow = () => setHearings([...hearings, { date: '', particulars: '' }]);
  const removeHearingRow = (index) => setHearings(hearings.filter((_, i) => i !== index));

  const handleSaveDiary = () => {
    if (!selectedCase) {
      alert('Please select a case first!');
      return;
    }
    const validHearings = hearings.filter(h => h.date !== '' && h.particulars !== '');
    if (validHearings.length === 0) {
      alert('Please add at least one hearing entry!');
      return;
    }

    const existingCases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    const updatedCases = existingCases.map(c => {
      if (c.id.toString() === selectedCase) {
        return { ...c, hearings: [...(c.hearings || []), ...validHearings] };
      }
      return c;
    });
    localStorage.setItem('firmCases', JSON.stringify(updatedCases));
    alert('Case Diary Updated Successfully!');
    setHearings([{ date: '', particulars: '' }]);
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
              <h2 className="text-xl font-semibold text-primary-700 dark:text-accent-400 mt-4">Case Diary / Hearing History</h2>
            </div>

            {/* Case Selection */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
                <FaCalendarAlt /> Select Case
              </h3>
              <select
                value={selectedCase}
                onChange={(e) => setSelectedCase(e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">-- Select a Case --</option>
                {cases.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.caseNo}/{c.year} - {c.party1Name} VS {c.party2Name} ({c.subject || c.caseCategory})
                  </option>
                ))}
              </select>
            </div>

            {/* Hearing History Table */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">Hearing History (Particulars)</h3>
                <button
                  type="button"
                  onClick={addHearingRow}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-semibold"
                >
                  <FaPlus /> Add Hearing
                </button>
              </div>

              {/* ✅ UPDATED: Table with Lines (Borders) and All 4 Corners Curved */}
              <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      {/* Top-Left Curve */}
                      <th className="border-r border-primary-600 p-3 text-center w-16 font-bold rounded-tl-lg">S.No</th>
                      <th className="border-r border-primary-600 p-3 text-left font-bold">Diary</th>
                      <th className="border-r border-primary-600 p-3 text-center w-32 font-bold">Date</th>
                      {/* Top-Right Curve */}
                      <th className="p-3 text-center w-20 font-bold rounded-tr-lg">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hearings.map((hearing, index) => {
                      const isLastRow = index === hearings.length - 1;
                      return (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                          {/* Bottom-Left Curve (Only on last row) */}
                          <td className={`border-r border-b border-gray-300 dark:border-gray-600 p-2 text-center font-bold text-gray-700 dark:text-gray-200 ${isLastRow ? 'rounded-bl-lg' : ''}`}>
                            {index + 1}
                          </td>
                          <td className="border-r border-b border-gray-300 dark:border-gray-600 p-2">
                            <textarea
                              name="particulars"
                              value={hearing.particulars}
                              onChange={(e) => handleHearingChange(index, e)}
                              placeholder="Enter case diary/particulars here..."
                              rows="3"
                              className="w-full p-2 bg-transparent outline-none dark:text-white resize-none border-0 focus:ring-0 text-sm"
                            />
                          </td>
                          <td className="border-r border-b border-gray-300 dark:border-gray-600 p-2 text-center">
                            <input
                              type="date"
                              name="date"
                              value={hearing.date}
                              onChange={(e) => handleHearingChange(index, e)}
                              className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 dark:text-white text-sm font-medium text-center"
                            />
                          </td>
                          {/* Bottom-Right Curve (Only on last row) */}
                          <td className={`border-b border-gray-300 dark:border-gray-600 p-2 text-center ${isLastRow ? 'rounded-br-lg' : ''}`}>
                            {hearings.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeHearingRow(index)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 p-2 rounded transition-colors"
                                title="Delete this hearing"
                              >
                                <FaTrash />
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleSaveDiary}
                  className="flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg font-bold shadow-lg hover:bg-primary-800 transition-all"
                >
                  <FaSave /> Save Case Diary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDiary;