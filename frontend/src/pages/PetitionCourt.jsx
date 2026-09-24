import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUpload, FaFilePdf, FaFileImage, FaTrash, FaPlus, FaFileAlt, FaEye, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const PetitionCourt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [caseData, setCaseData] = useState(null);
  const [petitionCategory, setPetitionCategory] = useState('');
  const [isCustomPetition, setIsCustomPetition] = useState(false);
  const [activePetitionCategory, setActivePetitionCategory] = useState('');
  
  const [petitionDynamicDocs, setPetitionDynamicDocs] = useState({
    'Memo of Petitions along with Affidavit': [],
    'Application to the concerned authorities': [],
    'Newspaper (Supporting document)': [],
    'Exemption Application': [],
    'Urgent Application': [],
    'Vakalatnama': []
  });
  
  const [newDocName, setNewDocName] = useState('');
  const [newDocFile, setNewDocFile] = useState(null);
  const [searchDoc, setSearchDoc] = useState('');

  useEffect(() => {
    const cases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    const foundCase = cases.find(c => c.id.toString() === id);
    if (foundCase) {
      setCaseData(foundCase);
      const savedFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');
      
      if (savedFiles.petitionDynamicDocs) setPetitionDynamicDocs(savedFiles.petitionDynamicDocs);
      
      if (savedFiles.petitionCategory) {
        if (savedFiles.petitionCategory === 'Others') {
          setIsCustomPetition(true);
          setPetitionCategory('');
        } else {
          setIsCustomPetition(false);
          setPetitionCategory(savedFiles.petitionCategory);
          setActivePetitionCategory(savedFiles.petitionCategory);
        }
      }
    } else {
      alert('Case not found!');
      navigate('/dashboard/case-file');
    }
  }, [id, navigate]);

  const saveFiles = (key, files) => {
    const allFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');
    allFiles[key] = files;
    localStorage.setItem(`case_${id}_files`, JSON.stringify(allFiles));
  };

  const handlePetitionCategoryChange = (e) => {
    const val = e.target.value;
    if (val === 'Others') {
      setIsCustomPetition(true);
      setPetitionCategory('');
      setActivePetitionCategory('');
    } else {
      setIsCustomPetition(false);
      setPetitionCategory(val);
      setActivePetitionCategory(val);
      saveFiles('petitionCategory', val);
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

    const currentList = petitionDynamicDocs[activePetitionCategory] || [];
    const updatedList = [...currentList, newDoc];
    const updatedDocs = { ...petitionDynamicDocs, [activePetitionCategory]: updatedList };

    setPetitionDynamicDocs(updatedDocs);
    saveFiles('petitionDynamicDocs', updatedDocs);

    setNewDocName('');
    setNewDocFile(null);
    const fileInput = document.getElementById('petition-dynamic-file-input');
    if (fileInput) fileInput.value = '';
  };

  const handleDeleteDynamicDoc = (docId) => {
    const currentList = petitionDynamicDocs[activePetitionCategory] || [];
    const updatedList = currentList.filter(doc => doc.id !== docId);
    const updatedDocs = { ...petitionDynamicDocs, [activePetitionCategory]: updatedList };

    setPetitionDynamicDocs(updatedDocs);
    saveFiles('petitionDynamicDocs', updatedDocs);
  };

  const getFileIcon = (type) => {
    if (type && type.includes('pdf')) return <FaFilePdf className="text-red-500 text-xl" />;
    return <FaFileImage className="text-blue-500 text-xl" />;
  };

  if (!caseData) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Petition Court</h1>
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

            {/* Petition Document Upload Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
                <FaPlus /> Select Category of Document
              </h3>

              {isCustomPetition ? (
                <div className="flex gap-2">
                  <input type="text" value={petitionCategory} onChange={(e) => { setPetitionCategory(e.target.value); saveFiles('customPetitionCategory', e.target.value); }} placeholder="Enter your custom document category..." className="w-full p-2 border-2 border-primary-500 rounded dark:bg-gray-700 dark:border-primary-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" autoFocus />
                  <button type="button" onClick={() => { setIsCustomPetition(false); setPetitionCategory(''); saveFiles('petitionCategory', ''); }} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm font-medium">✕</button>
                </div>
              ) : (
                <select value={petitionCategory} onChange={handlePetitionCategoryChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="">-- Select Category of Document --</option>
                  <option value="Memo of Petitions along with Affidavit">Memo of Petitions along with Affidavit</option>
                  <option value="Application to the concerned authorities">Application to the concerned authorities</option>
                  <option value="Newspaper (Supporting document)">Newspaper (Supporting document)</option>
                  <option value="Exemption Application">Exemption Application</option>
                  <option value="Urgent Application">Urgent Application</option>
                  <option value="Vakalatnama">Vakalatnama</option>
                  <option value="Others">Others (Custom Input)</option>
                </select>
              )}

              {activePetitionCategory && !isCustomPetition && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <FaUpload /> Upload Documents for: <span className="text-primary-600 ml-2">{activePetitionCategory}</span>
                  </h4>

                  <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Document Name</label>
                      <input type="text" value={newDocName} onChange={(e) => setNewDocName(e.target.value)} placeholder="e.g., Application, Affidavit, CNIC, etc." className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select File</label>
                      <input id="petition-dynamic-file-input" type="file" onChange={(e) => setNewDocFile(e.target.files[0])} className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white text-sm" />
                    </div>
                    <div className="flex items-end">
                      <button onClick={handleAddDynamicDoc} className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center gap-2 transition-colors">
                        <FaPlus /> Add Document
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchDoc}
                        onChange={(e) => setSearchDoc(e.target.value)}
                        placeholder=" Search documents by name..."
                        className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        🔍
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {petitionDynamicDocs[activePetitionCategory]?.filter((doc) => 
                      doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
                      doc.fileName.toLowerCase().includes(searchDoc.toLowerCase())
                    ).length === 0 ? (
                      <div className="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                        <FaFileAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 dark:text-gray-400">
                          {searchDoc 
                            ? `No documents found matching "${searchDoc}"` 
                            : `No documents added yet for ${activePetitionCategory}. Use the form above to add documents.`}
                        </p>
                      </div>
                    ) : (
                      petitionDynamicDocs[activePetitionCategory]
                        .filter((doc) => 
                          doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
                          doc.fileName.toLowerCase().includes(searchDoc.toLowerCase())
                        )
                        .map((doc) => (
                          <div key={doc.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                                {getFileIcon(doc.fileType)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-gray-800 dark:text-white text-lg truncate">{doc.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                  {doc.fileName} • {doc.fileSize} • {doc.date}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 ml-4">
                              <button
                                onClick={() => window.open(doc.url, '_blank')}
                                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                title="View Document"
                              >
                                <FaEye /> View
                              </button>

                              <button
                                onClick={() => handleDeleteDynamicDoc(doc.id)}
                                className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                title="Delete Document"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-end gap-4 pb-8 mt-8 border-t pt-6 dark:border-gray-700">
              <button 
                onClick={() => navigate('/dashboard/add-case', { 
                  state: { 
                    formData: caseData, 
                    caseId: caseData.id 
                  } 
                })} 
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-md"
              >
                <FaEdit /> Edit Case Details
              </button>
              <button 
                onClick={() => navigate('/dashboard/case-file')} 
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400"
              >
                Back to Case File
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PetitionCourt;