import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaFilePdf, FaFileImage, FaTrash, FaPlus, FaFileAlt, FaEye, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const FamilyCaseDetails = ({ caseData }) => {
  const navigate = useNavigate();
  const id = caseData.id;

  const [familyCategory, setFamilyCategory] = useState('');
  const [isCustomFamily, setIsCustomFamily] = useState(false);
  const [activeFamilyCategory, setActiveFamilyCategory] = useState('');
  
  const [familyDynamicDocs, setFamilyDynamicDocs] = useState({
    'Suit for Maintenance': [],
    'Suit for Khula/Divorce': [],
    'G & W': []
  });
  
  const [newDocName, setNewDocName] = useState('');
  const [newDocFile, setNewDocFile] = useState(null);
  const [searchDoc, setSearchDoc] = useState('');

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');
    if (savedFiles.familyDynamicDocs) setFamilyDynamicDocs(savedFiles.familyDynamicDocs);
    if (savedFiles.familyCategory) {
      if (savedFiles.familyCategory === 'Others') {
        setIsCustomFamily(true);
        setFamilyCategory('');
      } else {
        setIsCustomFamily(false);
        setFamilyCategory(savedFiles.familyCategory);
        setActiveFamilyCategory(savedFiles.familyCategory);
      }
    }
  }, [id]);

  const saveFiles = (key, files) => {
    const allFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');
    allFiles[key] = files;
    localStorage.setItem(`case_${id}_files`, JSON.stringify(allFiles));
  };

  const handleFamilyCategoryChange = (e) => {
    const val = e.target.value;
    if (val === 'Others') {
      setIsCustomFamily(true);
      setFamilyCategory('');
      setActiveFamilyCategory('');
    } else {
      setIsCustomFamily(false);
      setFamilyCategory(val);
      setActiveFamilyCategory(val);
      saveFiles('familyCategory', val);
    }
  };

  const handleAddDynamicDoc = () => {
    if (!newDocName.trim() || !newDocFile) {
      alert('Please enter a document name and select a file!');
      return;
    }
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(newDocFile.type)) {
      alert('Only JPG, PNG, and PDF files are allowed!');
      return;
    }
    const newDoc = {
      id: Date.now(),
      name: newDocName.trim(),
      fileName: newDocFile.name,
      fileType: newDocFile.type,
      fileSize: (newDocFile.size / 1024).toFixed(2) + ' KB',
      date: new Date().toLocaleString(),
      url: URL.createObjectURL(newDocFile)
    };

    const currentList = familyDynamicDocs[activeFamilyCategory] || [];
    const updatedList = [...currentList, newDoc];
    const updatedDocs = { ...familyDynamicDocs, [activeFamilyCategory]: updatedList };

    setFamilyDynamicDocs(updatedDocs);
    saveFiles('familyDynamicDocs', updatedDocs);

    setNewDocName('');
    setNewDocFile(null);
    const fileInput = document.getElementById('dynamic-file-input');
    if (fileInput) fileInput.value = '';
  };

  const handleDeleteDynamicDoc = (docId) => {
    const currentList = familyDynamicDocs[activeFamilyCategory] || [];
    const updatedList = currentList.filter(doc => doc.id !== docId);
    const updatedDocs = { ...familyDynamicDocs, [activeFamilyCategory]: updatedList };
    setFamilyDynamicDocs(updatedDocs);
    saveFiles('familyDynamicDocs', updatedDocs);
  };

  const getFileIcon = (type) => {
    if (type && type.includes('pdf')) return <FaFilePdf className="text-red-500 text-xl" />;
    return <FaFileImage className="text-blue-500 text-xl" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Family Case Details</h1>
              <p className="text-gray-600 dark:text-gray-400">{caseData.caseNo}/{caseData.year} - {caseData.party1Name} VS {caseData.party2Name}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 border-l-4 border-primary-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div><p className="text-xs text-gray-500 uppercase">Court</p><p className="font-semibold text-gray-800 dark:text-white">{caseData.courtName}</p></div>
                <div><p className="text-xs text-gray-500 uppercase">Case Type</p><p className="font-semibold text-gray-800 dark:text-white">{caseData.caseCategory}</p></div>
                <div><p className="text-xs text-gray-500 uppercase">Client</p><p className="font-semibold text-gray-800 dark:text-white">{caseData.clientName}</p></div>
                <div><p className="text-xs text-gray-500 uppercase">Status</p><p className="font-semibold text-primary-600">{caseData.result}</p></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
                <FaPlus /> Select Category of Matter
              </h3>

              {isCustomFamily ? (
                <div className="flex gap-2">
                  <input type="text" value={familyCategory} onChange={(e) => { setFamilyCategory(e.target.value); saveFiles('customFamilyCategory', e.target.value); }} placeholder="Enter your custom matter category..." className="w-full p-2 border-2 border-primary-500 rounded dark:bg-gray-700 dark:border-primary-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" autoFocus />
                  <button type="button" onClick={() => { setIsCustomFamily(false); setFamilyCategory(''); saveFiles('familyCategory', ''); }} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm font-medium">✕</button>
                </div>
              ) : (
                <select value={familyCategory} onChange={handleFamilyCategoryChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="">-- Select Category of Matter --</option>
                  <option value="Suit for Maintenance">Suit for Maintenance</option>
                  <option value="Suit for Khula/Divorce">Suit for Khula/Divorce</option>
                  <option value="G & W">G & W (Guardian & Wards)</option>
                  <option value="Others">Others (Custom Input)</option>
                </select>
              )}

              {activeFamilyCategory && !isCustomFamily && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <FaUpload /> Upload Documents for: <span className="text-primary-600 ml-2">{activeFamilyCategory}</span>
                  </h4>

                  <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Document Name</label>
                      <input type="text" value={newDocName} onChange={(e) => setNewDocName(e.target.value)} placeholder="e.g., Application, Affidavit, CNIC, etc." className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select File</label>
                      <input id="dynamic-file-input" type="file" onChange={(e) => setNewDocFile(e.target.files[0])} className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white text-sm" />
                    </div>
                    <div className="flex items-end">
                      <button onClick={handleAddDynamicDoc} className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center gap-2 transition-colors">
                        <FaPlus /> Add Document
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="relative">
                      <input type="text" value={searchDoc} onChange={(e) => setSearchDoc(e.target.value)} placeholder="🔍 Search documents by name..." className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {familyDynamicDocs[activeFamilyCategory]?.filter((doc) => doc.name.toLowerCase().includes(searchDoc.toLowerCase()) || doc.fileName.toLowerCase().includes(searchDoc.toLowerCase())).length === 0 ? (
                      <div className="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                        <FaFileAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 dark:text-gray-400">{searchDoc ? `No documents found matching "${searchDoc}"` : `No documents added yet for ${activeFamilyCategory}. Use the form above to add documents.`}</p>
                      </div>
                    ) : (
                      familyDynamicDocs[activeFamilyCategory].filter((doc) => doc.name.toLowerCase().includes(searchDoc.toLowerCase()) || doc.fileName.toLowerCase().includes(searchDoc.toLowerCase())).map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">{getFileIcon(doc.fileType)}</div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-gray-800 dark:text-white text-lg truncate">{doc.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{doc.fileName} • {doc.fileSize} • {doc.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <button onClick={() => window.open(doc.url, '_blank')} className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium" title="View Document"><FaEye /> View</button>
                            <button onClick={() => handleDeleteDynamicDoc(doc.id)} className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Delete Document"><FaTrash /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-4 pb-8 mt-8 border-t pt-6 dark:border-gray-700">
              <button onClick={() => navigate('/dashboard/add-case', { state: { formData: caseData, caseId: caseData.id } })} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-md"><FaEdit /> Edit Case Details</button>
              <button onClick={() => navigate('/dashboard/case-file')} className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400">Back to Case File</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyCaseDetails;