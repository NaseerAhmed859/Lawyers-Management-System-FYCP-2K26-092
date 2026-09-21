import { useState, useEffect } from 'react';
import { 
  FaPlus, FaTrash, FaEdit, FaCheckCircle, FaBell, 
  FaCalendarAlt, FaClock, FaTimes, FaFilter, FaGavel, 
  FaFileAlt, FaUsers, FaMoneyBillWave, FaExclamationTriangle 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Reminders = () => {
  const { t } = useLanguage();

  // State for Reminders
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('lawyerReminders');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Court Hearing - Case #123/2026', type: 'court', date: '2026-09-25', time: '09:30', description: 'Bail hearing at SHC Karachi', alert: '1 day', status: 'upcoming', caseRef: '123/2026' },
      { id: 2, title: 'Document Submission Deadline', type: 'filing', date: '2026-09-24', time: '14:00', description: 'Submit appeal documents in District Court', alert: '3 days', status: 'overdue', caseRef: '456/2025' },
      { id: 3, title: 'Client Meeting: Ahmed Ali', type: 'meeting', date: '2026-09-26', time: '11:00', description: 'Discuss case strategy and fee payment', alert: '1 hour', status: 'upcoming', caseRef: 'N/A' },
      { id: 4, title: 'Fee Payment Reminder', type: 'fee', date: '2026-09-23', time: '10:00', description: 'Collect remaining fee from Jane Smith', alert: '1 day', status: 'completed', caseRef: '789/2026' },
    ];
  });

  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all'); // all, today, upcoming, overdue, completed
  const [editingId, setEditingId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '', type: 'court', date: '', time: '', description: '', alert: '1 day', caseRef: ''
  });

  // Save to localStorage whenever reminders change
  useEffect(() => {
    localStorage.setItem('lawyerReminders', JSON.stringify(reminders));
  }, [reminders]);

  // Handle Form Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update Reminder
  const handleSaveReminder = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time) {
      alert('Please fill in Title, Date, and Time!');
      return;
    }

    // Determine status based on date
    const today = new Date().toISOString().split('T')[0];
    let status = 'upcoming';
    if (formData.date < today) status = 'overdue';

    if (editingId) {
      setReminders(reminders.map(r => r.id === editingId ? { ...formData, id: editingId, status } : r));
      setEditingId(null);
    } else {
      setReminders([...reminders, { ...formData, id: Date.now(), status }]);
    }
    
    setFormData({ title: '', type: 'court', date: '', time: '', description: '', alert: '1 day', caseRef: '' });
    setShowModal(false);
  };

  // Delete Reminder
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this reminder?')) {
      setReminders(reminders.filter(r => r.id !== id));
    }
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setReminders(reminders.map(r => 
      r.id === id ? { ...r, status: r.status === 'completed' ? 'upcoming' : 'completed' } : r
    ));
  };

  // Edit Reminder
  const handleEdit = (reminder) => {
    setFormData(reminder);
    setEditingId(reminder.id);
    setShowModal(true);
  };

  // Filter Logic
  const filteredReminders = reminders.filter(r => {
    const today = new Date().toISOString().split('T')[0];
    if (filter === 'today') return r.date === today && r.status !== 'completed';
    if (filter === 'upcoming') return r.date >= today && r.status !== 'completed';
    if (filter === 'overdue') return r.date < today && r.status !== 'completed';
    if (filter === 'completed') return r.status === 'completed';
    return true; // 'all'
  });

  // Helper for Icons & Colors
  const getTypeIcon = (type) => {
    switch(type) {
      case 'court': return <FaGavel className="text-blue-500" />;
      case 'filing': return <FaFileAlt className="text-purple-500" />;
      case 'meeting': return <FaUsers className="text-green-500" />;
      case 'fee': return <FaMoneyBillWave className="text-yellow-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'overdue': return 'border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10';
      case 'completed': return 'border-l-4 border-gray-400 bg-gray-50 dark:bg-gray-800/50 opacity-75';
      default: return 'border-l-4 border-yellow-400 bg-white dark:bg-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FaBell className="text-primary-600" /> Reminders & Alerts
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Never miss a court date, deadline, or meeting.</p>
            </div>
            <button 
              onClick={() => { setEditingId(null); setFormData({ title: '', type: 'court', date: '', time: '', description: '', alert: '1 day', caseRef: '' }); setShowModal(true); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-semibold shadow-md transition-all"
            >
              <FaPlus /> Add Reminder
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['all', 'today', 'upcoming', 'overdue', 'completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  filter === f 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {f} {f === 'overdue' && reminders.filter(r => r.status === 'overdue').length > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {reminders.filter(r => r.status === 'overdue').length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Reminders List */}
          <div className="space-y-4">
            {filteredReminders.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <FaBell className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400 font-medium">No reminders found for this filter.</p>
              </div>
            ) : (
              filteredReminders.map((reminder) => (
                <div key={reminder.id} className={`p-5 rounded-xl shadow-sm transition-all hover:shadow-md ${getStatusColor(reminder.status)} dark:text-white`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    
                    {/* Left: Icon & Details */}
                    <div className="flex gap-4 flex-1">
                      <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-600">
                        {getTypeIcon(reminder.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-bold text-lg ${reminder.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                            {reminder.title}
                          </h3>
                          {reminder.status === 'overdue' && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full flex items-center gap-1">
                              <FaExclamationTriangle size={10} /> Overdue
                            </span>
                          )}
                          {reminder.status === 'completed' && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full flex items-center gap-1">
                              <FaCheckCircle size={10} /> Done
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{reminder.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1"><FaCalendarAlt /> {reminder.date}</span>
                          <span className="flex items-center gap-1"><FaClock /> {reminder.time}</span>
                          {reminder.caseRef !== 'N/A' && <span className="flex items-center gap-1"><FaGavel /> Case: {reminder.caseRef}</span>}
                          <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium"><FaBell /> Alert: {reminder.alert} before</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex md:flex-col gap-2 md:items-end">
                      <button 
                        onClick={() => toggleComplete(reminder.id)}
                        className={`p-2 rounded-lg transition-colors ${reminder.status === 'completed' ? 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400' : 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400'}`}
                        title={reminder.status === 'completed' ? 'Mark as Incomplete' : 'Mark as Complete'}
                      >
                        <FaCheckCircle size={18} />
                      </button>
                      <button 
                        onClick={() => handleEdit(reminder)}
                        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 transition-colors"
                        title="Edit"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(reminder.id)}
                        className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {editingId ? 'Edit Reminder' : 'Add New Reminder'}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <FaTimes size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSaveReminder} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500" placeholder="e.g., Court Hearing" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="court">Court Hearing</option>
                    <option value="filing">Filing Deadline</option>
                    <option value="meeting">Client Meeting</option>
                    <option value="fee">Fee Payment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Reference</label>
                  <input type="text" name="caseRef" value={formData.caseRef} onChange={handleInputChange} className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="e.g., 123/2026" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date *</label>
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time *</label>
                  <input type="time" name="time" value={formData.time} onChange={handleInputChange} required className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Alert Before</label>
                <select name="alert" value={formData.alert} onChange={handleInputChange} className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="15 minutes">15 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="1 day">1 day</option>
                  <option value="3 days">3 days</option>
                  <option value="1 week">1 week</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description / Notes</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Add any extra details here..."></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium shadow-md">
                  {editingId ? 'Update Reminder' : 'Save Reminder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminders;