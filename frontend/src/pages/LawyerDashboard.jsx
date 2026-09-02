import { useState } from 'react';
import { FaBriefcase, FaCalendar, FaFileAlt, FaChartLine, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const LawyerDashboard = () => {
  const { t } = useLanguage();
  const stats = [
    { icon: FaBriefcase, label: t('activeCases'), value: '12', color: 'bg-blue-500', change: '+2 this week' },
    { icon: FaCalendar, label: t('upcomingHearings'), value: '5', color: 'bg-green-500', change: 'Next: Tomorrow' },
    { icon: FaFileAlt, label: t('documents'), value: '48', color: 'bg-purple-500', change: '12 new' },
    { icon: FaChartLine, label: t('wonCases'), value: '87%', color: 'bg-yellow-500', change: '+5% this month' }
  ];

  const recentCases = [
    { id: '1001', client: 'John Doe', type: 'Civil Case', status: 'Active', lastUpdate: '2 hours ago' },
    { id: '2001', client: 'Jane Smith', type: 'Criminal Defense', status: 'In Progress', lastUpdate: '5 hours ago' },
  ];

  const upcomingHearings = [
    { case: 'Case #1001', date: 'Tomorrow, 10:00 AM', court: 'High Court', judge: 'Hon. Justice Smith' },
    { case: 'Case #2001', date: 'Dec 5, 2026 - 2:00 PM', court: 'District Court', judge: 'Hon. Justice Brown' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <main className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg`}><stat.icon className="text-white text-xl" /></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</h3>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t('recentCases')}</h2>
                  <button className="text-sm text-primary-600 dark:text-accent-400 hover:underline">{t('viewAll')}</button>
                </div>
                <div className="space-y-4">
                  {recentCases.map((caseItem) => (
                    <div key={caseItem.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Case #{caseItem.id}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${caseItem.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{caseItem.status}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{t('client')}: {caseItem.client}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{caseItem.type} • {t('updated')} {caseItem.lastUpdate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t('upcomingHearings')}</h2>
                  <button className="text-sm text-primary-600 dark:text-accent-400 hover:underline">{t('viewAll')}</button>
                </div>
                <div className="space-y-4">
                  {upcomingHearings.map((hearing, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4 py-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{hearing.case}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{hearing.date}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{hearing.court}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{t('judge')}: {hearing.judge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;