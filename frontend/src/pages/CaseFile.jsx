import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaList, FaSearch, FaFilter, FaGavel, FaClock, FaFolderOpen, FaCheckCircle, FaTimes, FaPlus } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext'; // ✅ Import added

const CaseFile = () => {
  const { t } = useLanguage(); // ✅ Translation hook added
  
  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Separate Filters
  const [courtFilter, setCourtFilter] = useState('');
  const [caseTypeFilter, setCaseTypeFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');

  // Mock Data - Expanded for better filtering
  const hearings = [
    { id: 1, time: '09:30 AM', court: 'SHC Karachi', caseNo: 'C.P. No. 123/2026', caseType: 'C.P.', year: '2026', client: 'Ahmed Ali', stage: 'Arguments', date: '2026-09-01' },
    { id: 2, time: '11:00 AM', court: 'District Court', caseNo: 'Suit No. 45/2025', caseType: 'Suit', year: '2025', client: 'Muhammad Aslam', stage: 'Evidence', date: '2026-09-01' },
    { id: 3, time: '01:30 PM', court: 'Sessions Court', caseNo: 'State v. XYZ', caseType: 'Criminal', year: '2026', client: 'XYZ', stage: 'Bail', date: '2026-09-01' },
    { id: 4, time: '03:00 PM', court: 'Family Court', caseNo: 'F.A. No. 12/2026', caseType: 'F.A.', year: '2026', client: 'Sara Khan', stage: 'Mediation', date: '2026-09-02' },
    { id: 5, time: '10:00 AM', court: 'SHC Karachi', caseNo: 'C.P. No. 89/2025', caseType: 'C.P.', year: '2025', client: 'Bilal Ahmed', stage: 'Hearing', date: '2026-09-03' },
    { id: 6, time: '02:00 PM', court: 'District Court', caseNo: 'Suit No. 78/2024', caseType: 'Suit', year: '2024', client: 'Fatima Khan', stage: 'Arguments', date: '2026-09-03' },
  ];

  // Get unique values for dropdowns
  const courts = [...new Set(hearings.map(h => h.court))].sort();
  const caseTypes = [...new Set(hearings.map(h => h.caseType))].sort();
  const years = [...new Set(hearings.map(h => h.year))].sort().reverse();
  const stages = [...new Set(hearings.map(h => h.stage))].sort();

  // Combined Filter Logic
  const filteredHearings = hearings.filter(h => {
    const matchesSearch = 
      h.caseNo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      h.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.court.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourt = courtFilter ? h.court === courtFilter : true;
    const matchesCaseType = caseTypeFilter ? h.caseType === caseTypeFilter : true;
    const matchesYear = yearFilter ? h.year === yearFilter : true;
    const matchesStage = stageFilter ? h.stage === stageFilter : true;

    return matchesSearch && matchesCourt && matchesCaseType && matchesYear && matchesStage;
  });

  // Clear all filters
  const clearFilters = () => {
    setCourtFilter('');
    setCaseTypeFilter('');
    setYearFilter('');
    setStageFilter('');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        
        <div className="flex-1 lg:ml-64 p-6">
          {/* Header with New Case Button */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">{t('caseDiary')}</h1>
              <p className="text-gray-600 dark:text-gray-400">{t('manageHearings')}</p>
            </div>
            <Link to="/dashboard/add-case" className="flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-lg shadow-lg transition-all">
              <FaPlus /> {t('newCaseFile')}
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('todaysHearings')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">06</p>
                </div>
                <FaClock className="text-3xl text-blue-500 opacity-50" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('tomorrow')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">04</p>
                </div>
                <FaCalendar className="text-3xl text-yellow-500 opacity-50" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-l-4 border-purple-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('pendingCases')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">82</p>
                </div>
                <FaFolderOpen className="text-3xl text-purple-500 opacity-50" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-l-4 border-green-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('decidedCases')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">37</p>
                </div>
                <FaCheckCircle className="text-3xl text-green-500 opacity-50" />
              </div>
            </div>
          </div>

          {/* Search & Multiple Filters */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-6">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Dropdowns - All in One Row */}
            <div className="flex flex-wrap gap-3 items-end">
              {/* Court Filter */}
              <div className="flex-1 min-w-[150px]">
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{t('court')}</label>
                <select 
                  value={courtFilter}
                  onChange={(e) => setCourtFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">{t('allCourts')}</option>
                  {courts.map(court => (
                    <option key={court} value={court}>{court}</option>
                  ))}
                </select>
              </div>

              {/* Case Type Filter */}
              <div className="flex-1 min-w-[150px]">
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{t('caseType')}</label>
                <select 
                  value={caseTypeFilter}
                  onChange={(e) => setCaseTypeFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">{t('allTypes')}</option>
                  {caseTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex-1 min-w-[120px]">
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{t('year')}</label>
                <select 
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">{t('allYears')}</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Stage Filter */}
              <div className="flex-1 min-w-[150px]">
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{t('stage')}</label>
                <select 
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">{t('allStages')}</option>
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              <button 
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                <FaTimes /> {t('clear')}
              </button>

              {/* View Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 ml-auto">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-600 shadow text-primary-700 dark:text-accent-400 font-semibold' : 'text-gray-500'}`}
                >
                  <FaList /> {t('list')}
                </button>
                <button 
                  onClick={() => setViewMode('calendar')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${viewMode === 'calendar' ? 'bg-white dark:bg-gray-600 shadow text-primary-700 dark:text-accent-400 font-semibold' : 'text-gray-500'}`}
                >
                  <FaCalendar /> {t('calendar')}
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(courtFilter || caseTypeFilter || yearFilter || stageFilter) && (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>{t('activeFilters')}:</span>
                {courtFilter && <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">{t('court')}: {courtFilter}</span>}
                {caseTypeFilter && <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded">{t('type')}: {caseTypeFilter}</span>}
                {yearFilter && <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">{t('year')}: {yearFilter}</span>}
                {stageFilter && <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded">{t('stage')}: {stageFilter}</span>}
              </div>
            )}
          </div>

          {/* List View Table */}
          {viewMode === 'list' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm uppercase">
                    <tr>
                      <th className="px-6 py-4">{t('dateAndTime')}</th>
                      <th className="px-6 py-4">{t('court')}</th>
                      <th className="px-6 py-4">{t('caseNumber')}</th>
                      <th className="px-6 py-4">{t('client')}</th>
                      <th className="px-6 py-4">{t('stage')}</th>
                      <th className="px-6 py-4">{t('action')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredHearings.map((hearing) => (
                      <tr key={hearing.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900 dark:text-white">{hearing.date}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{hearing.time}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaGavel className="text-primary-600 dark:text-accent-400" />
                            {hearing.court}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-primary-700 dark:text-accent-400">
                          {hearing.caseNo}
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          {hearing.client}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs font-semibold">
                            {hearing.stage}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-sm text-primary-600 dark:text-accent-400 hover:underline font-medium">
                            {t('viewDetails')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredHearings.length === 0 && (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <FaSearch className="text-4xl mx-auto mb-2 opacity-50" />
                  <p>{t('noHearingsFound')}</p>
                  <button onClick={clearFilters} className="mt-2 text-primary-600 dark:text-accent-400 hover:underline">
                    {t('clearAllFilters')}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Calendar View Placeholder */}
          {viewMode === 'calendar' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center">
              <FaCalendar className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">{t('calendarView')}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">{t('comingSoon')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseFile;