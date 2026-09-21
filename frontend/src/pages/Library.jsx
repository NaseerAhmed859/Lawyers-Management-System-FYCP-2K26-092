import { useState } from 'react';
import { FaBook, FaSearch, FaDownload, FaEye, FaScroll, FaGavel, FaBalanceScale, FaShieldAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Library = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Library Books Data
  const books = [
    {
      id: 1,
      title: 'Constitution of Pakistan 1973',
      category: 'Constitutional',
      description: 'The supreme law of Pakistan. Essential for all constitutional petitions.',
      icon: FaScroll,
      color: 'from-purple-600 to-purple-800',
      pdfUrl: '/library/constitution-1973.pdf',
      fileSize: '2.4 MB'
    },
    {
      id: 2,
      title: 'Code of Civil Procedure (CPC)',
      category: 'Civil',
      description: 'Complete guide for civil suits, appeals, revisions, and execution of decrees.',
      icon: FaBalanceScale,
      color: 'from-blue-600 to-blue-800',
      pdfUrl: '/library/cpc.pdf',
      fileSize: '3.1 MB'
    },
    {
      id: 3,
      title: 'Code of Criminal Procedure (CrPC)',
      category: 'Criminal',
      description: 'Procedures for criminal trials, bail, appeals, and sessions court matters.',
      icon: FaGavel,
      color: 'from-red-600 to-red-800',
      pdfUrl: '/library/crpc.pdf',
      fileSize: '2.8 MB'
    },
    {
      id: 4,
      title: 'Qanun-e-Shahadat Order 1984',
      category: 'Evidence',
      description: 'Law of evidence in Pakistan. Essential for proving cases in court.',
      icon: FaShieldAlt,
      color: 'from-green-600 to-green-800',
      pdfUrl: '/library/qso-1984.pdf',
      fileSize: '1.9 MB'
    },
    {
      id: 5,
      title: 'Pakistan Penal Code (PPC)',
      category: 'Criminal',
      description: 'Substantive criminal law defining offenses and punishments.',
      icon: FaGavel,
      color: 'from-pink-600 to-pink-800',
      pdfUrl: '/library/ppc.pdf',
      fileSize: '2.2 MB'
    },
    {
      id: 6,
      title: 'Limitation Act 1908',
      category: 'Procedural',
      description: 'Time limits for filing suits, appeals, and applications.',
      icon: FaClock,
      color: 'from-orange-600 to-orange-800',
      pdfUrl: '/library/limitation-act.pdf',
      fileSize: '1.5 MB'
    },
  ];

  const categories = ['All', 'Constitutional', 'Civil', 'Criminal', 'Evidence', 'Family', 'Procedural', 'Court Rules', 'Reference'];

  // Filter books
  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewPDF = (book) => {
    alert(`Opening ${book.title}...`);
    // window.open(book.pdfUrl, '_blank');
  };

  const handleDownloadPDF = (book) => {
    alert(`Downloading ${book.title}...`);
    // const link = document.createElement('a');
    // link.href = book.pdfUrl;
    // link.download = `${book.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <FaBook className="text-primary-600" /> Legal Library
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Access essential legal books and resources.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-xl font-bold text-primary-600">{books.length}</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wide">Total Books</p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="mb-3">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search by book title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Books Grid - Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBooks.map((book) => {
              const Icon = book.icon;
              return (
                <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Compact Book Cover/Header */}
                  <div className={`h-28 bg-gradient-to-br ${book.color} p-4 flex items-center justify-center relative`}>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
                        {book.category}
                      </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                      <Icon className="text-white text-2xl" />
                    </div>
                  </div>

                  {/* Compact Book Details */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-tight line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-2 flex-grow">
                      {book.description}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-3 font-medium">
                      📄 {book.fileSize}
                    </p>

                    {/* Compact Action Buttons */}
                    <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                      {/* View Button */}
                      <button
                        onClick={() => handleViewPDF(book)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-[11px]"
                      >
                        <FaEye className="text-primary-600 dark:text-primary-400 text-xs" />
                        View
                      </button>

                      {/* Download Button */}
                      <button
                        onClick={() => handleDownloadPDF(book)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium text-[11px] shadow-sm"
                      >
                        <FaDownload className="text-xs" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <FaBook className="text-3xl text-gray-300 dark:text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">No books found matching your criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-3 px-4 py-1.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-xs"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;