import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { 
  FaPlus, FaCalendarAlt, FaFileUpload, FaBell, FaGavel, 
  FaClock, FaCheckCircle, FaTasks, FaBriefcase, FaExclamationCircle,
  FaUserTie, FaSearch, FaArrowRight
} from 'react-icons/fa';

const LawyerDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  
  // Current Date State
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  // Mock Data for Today's Schedule
  const todaySchedule = [
    { id: 1, time: '09:30 AM', title: 'Case #123/2026 - Bail Hearing', location: 'SHC Karachi', type: 'court' },
    { id: 2, time: '11:00 AM', title: 'Client Meeting: Ahmed Ali', location: 'Office Cabin', type: 'meeting' },
    { id: 3, time: '02:00 PM', title: 'Case #456 - Final Arguments', location: 'District Court', type: 'court' },
    { id: 4, time: '04:30 PM', title: 'Document Submission Deadline', location: 'High Court Registry', type: 'deadline' },
  ];

  // Mock Data for Pending Tasks
  const pendingTasks = [
    { id: 1, task: 'File appeal in Case #123', due: 'Tomorrow', done: false },
    { id: 2, task: 'Submit documents for Case #456', due: '25 Sep', done: false },
    { id: 3, task: 'Call client Ahmed Ali', due: 'Today', done: true },
    { id: 4, task: 'Prepare bail application for XYZ', due: '28 Sep', done: false },
  ];

  // Mock Data for Notifications
  const notifications = [
    { id: 1, msg: 'Case #123 hearing is tomorrow at 9:30 AM', time: '1 hr ago', type: 'alert' },
    { id: 2, msg: 'Ahmed Ali uploaded a new document', time: '3 hrs ago', type: 'info' },
    { id: 3, msg: 'Reminder: Court fee submission due', time: 'Yesterday', type: 'warning' },
  ];

  const recentCases = [
    { id: '1001', client: 'John Doe', type: 'Civil Case', status: 'Active', lastUpdate: '2 hours ago' },
    { id: '2001', client: 'Jane Smith', type: 'Criminal Defense', status: 'In Progress', lastUpdate: '5 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          
          {/* 1. Welcome & Summary Section */}
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-6 md:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Welcome Back 👋
              </h1>
              <p className="text-primary-100 text-sm md:text-base mb-4">{currentDate}</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs text-primary-100">Today's Hearings</p>
                  <p className="text-xl font-bold">3</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs text-primary-100">Pending Tasks</p>
                  <p className="text-xl font-bold">5</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs text-primary-100">Active Cases</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -right-5 -bottom-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"></div>
          </div>

          {/* 2. Quick Actions Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link to="/dashboard/add-case" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <FaPlus className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 dark:text-white text-sm">New Case</p>
                <p className="text-xs text-gray-500">File a new case</p>
              </div>
            </Link>
            
            <Link to="/dashboard/case-diary" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <FaCalendarAlt className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 dark:text-white text-sm">Add Hearing</p>
                <p className="text-xs text-gray-500">Schedule diary</p>
              </div>
            </Link>

            <Link to="/dashboard/documents" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <FaFileUpload className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 dark:text-white text-sm">Upload Doc</p>
                <p className="text-xs text-gray-500">Add evidence</p>
              </div>
            </Link>

            <Link to="/dashboard/reminders" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <FaBell className="text-orange-600 dark:text-orange-400 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 dark:text-white text-sm">Set Reminder</p>
                <p className="text-xs text-gray-500">Never miss a date</p>
              </div>
            </Link>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT COLUMN (Wider) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* 3. Today's Schedule (Timeline) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FaClock className="text-primary-600" /> Today's Schedule
                  </h2>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium">
                    {todaySchedule.length} Events
                  </span>
                </div>
                
                <div className="space-y-4">
                  {todaySchedule.map((event, index) => (
                    <div key={event.id} className="flex gap-4 relative">
                      {/* Timeline Line */}
                      {index !== todaySchedule.length - 1 && (
                        <div className="absolute left-[19px] top-10 bottom-[-16px] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                      )}
                      {/* Time */}
                      <div className="flex-shrink-0 w-16 text-sm font-bold text-gray-500 dark:text-gray-400 pt-1">
                        {event.time}
                      </div>
                      {/* Dot */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                        event.type === 'court' ? 'bg-blue-100 text-blue-600' :
                        event.type === 'meeting' ? 'bg-green-100 text-green-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {event.type === 'court' ? <FaGavel size={14} /> : 
                         event.type === 'meeting' ? <FaUserTie size={14} /> : 
                         <FaExclamationCircle size={14} />}
                      </div>
                      {/* Content */}
                      <div className="flex-grow bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{event.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                          📍 {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Recent Cases */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FaBriefcase className="text-primary-600" /> Recent Cases
                  </h2>
                  <Link to="/dashboard/cases" className="text-sm text-primary-600 dark:text-accent-400 hover:underline flex items-center gap-1">
                    View All <FaArrowRight size={10} />
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentCases.map((caseItem) => (
                    <div key={caseItem.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-200 flex justify-between items-center">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">Case #{caseItem.id}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${caseItem.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {caseItem.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{t('client')}: {caseItem.client}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{caseItem.type} • Updated {caseItem.lastUpdate}</p>
                      </div>
                      <button className="text-primary-600 hover:text-primary-800 dark:text-accent-400">
                        <FaArrowRight />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (Narrower) */}
            <div className="space-y-6">
              
              {/* 4. Pending Tasks (To-Do List) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FaTasks className="text-primary-600" /> Pending Tasks
                  </h2>
                  <button className="text-primary-600 hover:text-primary-800 dark:text-accent-400">
                    <FaPlus />
                  </button>
                </div>
                <div className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      task.done ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30' : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600'
                    }`}>
                      <div className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        task.done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-400 dark:border-gray-500'
                      }`}>
                        {task.done && <FaCheckCircle size={12} />}
                      </div>
                      <div className="flex-grow">
                        <p className={`text-sm font-medium ${task.done ? 'text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>
                          {task.task}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Due: {task.due}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Notifications / Alerts */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FaBell className="text-primary-600" /> Notifications
                  </h2>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                </div>
                <div className="space-y-4">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex gap-3 pb-3 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                      <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                        notif.type === 'alert' ? 'bg-red-500' :
                        notif.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{notif.msg}</p>
                        <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;