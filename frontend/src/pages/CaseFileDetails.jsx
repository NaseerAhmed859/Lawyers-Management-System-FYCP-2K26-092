import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUpload, FaFilePdf, FaFileImage, FaTrash, FaHistory, FaCheckCircle, FaPlus, FaTimes, FaFileAlt, FaChevronDown, FaMapMarkerAlt, FaHeartbeat, FaBox, FaFileContract, FaTshirt, FaEye } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const CaseFileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  // Family Case States
  const [familyCategory, setFamilyCategory] = useState('');
  const [isCustomFamily, setIsCustomFamily] = useState(false);

  // NEW: Dynamic Family Documents States
  const [activeFamilyCategory, setActiveFamilyCategory] = useState('');
  const [familyDynamicDocs, setFamilyDynamicDocs] = useState({
    'Suit for Maintenance': [],
    'Suit for Khula/Divorce': [],
    'G & W': []
  });
  const [newDocName, setNewDocName] = useState('');
  const [newDocFile, setNewDocFile] = useState(null);
  const [searchDoc, setSearchDoc] = useState(''); // ✅ NEW: Search State

  // File states - Criminal
  const [firFiles, setFirFiles] = useState([]);
  const [challanInterim, setChallanInterim] = useState([]);
  const [challanFinal, setChallanFinal] = useState([]);
  const [challanSupplementary, setChallanSupplementary] = useState([]);
  const [challanOtherFiles, setChallanOtherFiles] = useState([]);
  const [newChallanOtherName, setNewChallanOtherName] = useState('');
  const [showChallanOtherForm, setShowChallanOtherForm] = useState(false);

  const [musheernamaPlaceIncident, setMusheernamaPlaceIncident] = useState([]);
  const [musheernamaInjuries, setMusheernamaInjuries] = useState([]);
  const [musheernamaAssets, setMusheernamaAssets] = useState([]);
  const [musheernamaRemandArticle, setMusheernamaRemandArticle] = useState([]);
  const [musheernamaLastWearing, setMusheernamaLastWearing] = useState([]);
  const [musheernamaOtherFiles, setMusheernamaOtherFiles] = useState([]);
  const [newMusheernamaOtherName, setNewMusheernamaOtherName] = useState('');
  const [showMusheernamaOtherForm, setShowMusheernamaOtherForm] = useState(false);

  const [inquestReportFiles, setInquestReportFiles] = useState([]);
  const [inquestOtherFiles, setInquestOtherFiles] = useState([]);
  const [newInquestOtherName, setNewInquestOtherName] = useState('');
  const [showInquestOtherForm, setShowInquestOtherForm] = useState(false);

  const [medicalFinal, setMedicalFinal] = useState(null);
  const [medicalProvisional, setMedicalProvisional] = useState([]);
  const [postMortemFiles, setPostMortemFiles] = useState([]);
  const [dnaFiles, setDnaFiles] = useState([]);

  const [otherFiles, setOtherFiles] = useState([]);
  const [newOtherName, setNewOtherName] = useState('');
  const [showOtherForm, setShowOtherForm] = useState(false);

  // File states - Family (Static - UNCHANGED)
  const [plaintFiles, setPlaintFiles] = useState([]);
  const [wsFiles, setWsFiles] = useState([]);
  const [nikahNamaFiles, setNikahNamaFiles] = useState([]);
  const [familyOtherFiles, setFamilyOtherFiles] = useState([]);

  useEffect(() => {
    const cases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    const foundCase = cases.find(c => c.id.toString() === id);
    if (foundCase) {
      setCaseData(foundCase);
      const savedFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');

      if (savedFiles.fir) setFirFiles(savedFiles.fir);
      if (savedFiles.challanInterim) setChallanInterim(savedFiles.challanInterim);
      if (savedFiles.challanFinal) setChallanFinal(savedFiles.challanFinal);
      if (savedFiles.challanSupplementary) setChallanSupplementary(savedFiles.challanSupplementary);
      if (savedFiles.challanOtherFiles) setChallanOtherFiles(savedFiles.challanOtherFiles);
      if (savedFiles.musheernamaPlaceIncident) setMusheernamaPlaceIncident(savedFiles.musheernamaPlaceIncident);
      if (savedFiles.musheernamaInjuries) setMusheernamaInjuries(savedFiles.musheernamaInjuries);
      if (savedFiles.musheernamaAssets) setMusheernamaAssets(savedFiles.musheernamaAssets);
      if (savedFiles.musheernamaRemandArticle) setMusheernamaRemandArticle(savedFiles.musheernamaRemandArticle);
      if (savedFiles.musheernamaLastWearing) setMusheernamaLastWearing(savedFiles.musheernamaLastWearing);
      if (savedFiles.musheernamaOtherFiles) setMusheernamaOtherFiles(savedFiles.musheernamaOtherFiles);
      if (savedFiles.inquestReportFiles) setInquestReportFiles(savedFiles.inquestReportFiles);
      if (savedFiles.inquestOtherFiles) setInquestOtherFiles(savedFiles.inquestOtherFiles);
      if (savedFiles.medicalFinal) setMedicalFinal(savedFiles.medicalFinal);
      if (savedFiles.medicalProvisional) setMedicalProvisional(savedFiles.medicalProvisional);
      if (savedFiles.postMortem) setPostMortemFiles(savedFiles.postMortem);
      if (savedFiles.dna) setDnaFiles(savedFiles.dna);
      if (savedFiles.otherFiles) setOtherFiles(savedFiles.otherFiles);

      // Load Family Static Files (UNCHANGED)
      if (savedFiles.plaint) setPlaintFiles(savedFiles.plaint);
      if (savedFiles.ws) setWsFiles(savedFiles.ws);
      if (savedFiles.nikahNama) setNikahNamaFiles(savedFiles.nikahNama);
      if (savedFiles.familyOther) setFamilyOtherFiles(savedFiles.familyOther);

      // Load Family Dynamic Docs (NEW)
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

  const handleFileUpload = (e, category) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    const invalidFiles = files.filter(f => !validTypes.includes(f.type));
    if (invalidFiles.length > 0) { alert('Only JPG, PNG, and PDF files are allowed!'); return; }
    const newFiles = files.map(file => ({ name: file.name, type: file.type, size: (file.size / 1024).toFixed(2) + ' KB', date: new Date().toLocaleString(), url: URL.createObjectURL(file) }));
    let updated;
    if (category === 'fir') { updated = [...firFiles, ...newFiles]; setFirFiles(updated); saveFiles('fir', updated); }
    else if (category === 'challan-interim') { updated = [...challanInterim, ...newFiles]; setChallanInterim(updated); saveFiles('challanInterim', updated); }
    else if (category === 'challan-final') { updated = [...challanFinal, ...newFiles]; setChallanFinal(updated); saveFiles('challanFinal', updated); }
    else if (category === 'challan-supplementary') { updated = [...challanSupplementary, ...newFiles]; setChallanSupplementary(updated); saveFiles('challanSupplementary', updated); }
    else if (category === 'musheernama-place-incident') { updated = [...musheernamaPlaceIncident, ...newFiles]; setMusheernamaPlaceIncident(updated); saveFiles('musheernamaPlaceIncident', updated); }
    else if (category === 'musheernama-injuries') { updated = [...musheernamaInjuries, ...newFiles]; setMusheernamaInjuries(updated); saveFiles('musheernamaInjuries', updated); }
    else if (category === 'musheernama-assets') { updated = [...musheernamaAssets, ...newFiles]; setMusheernamaAssets(updated); saveFiles('musheernamaAssets', updated); }
    else if (category === 'musheernama-remand-article') { updated = [...musheernamaRemandArticle, ...newFiles]; setMusheernamaRemandArticle(updated); saveFiles('musheernamaRemandArticle', updated); }
    else if (category === 'musheernama-last-wearing') { updated = [...musheernamaLastWearing, ...newFiles]; setMusheernamaLastWearing(updated); saveFiles('musheernamaLastWearing', updated); }
    else if (category === 'inquest-report') { updated = [...inquestReportFiles, ...newFiles]; setInquestReportFiles(updated); saveFiles('inquestReportFiles', updated); }
    else if (category === 'medical-final') { updated = newFiles[0]; setMedicalFinal(updated); saveFiles('medicalFinal', updated); }
    else if (category === 'medical-provisional') { updated = [...medicalProvisional, ...newFiles]; setMedicalProvisional(updated); saveFiles('medicalProvisional', updated); }
    else if (category === 'post-mortem') { updated = [...postMortemFiles, ...newFiles]; setPostMortemFiles(updated); saveFiles('postMortem', updated); }
    else if (category === 'dna') { updated = [...dnaFiles, ...newFiles]; setDnaFiles(updated); saveFiles('dna', updated); }
    else if (category === 'plaint') { updated = [...plaintFiles, ...newFiles]; setPlaintFiles(updated); saveFiles('plaint', updated); }
    else if (category === 'ws') { updated = [...wsFiles, ...newFiles]; setWsFiles(updated); saveFiles('ws', updated); }
    else if (category === 'nikah-nama') { updated = [...nikahNamaFiles, ...newFiles]; setNikahNamaFiles(updated); saveFiles('nikahNama', updated); }
    else if (category === 'family-other') { updated = [...familyOtherFiles, ...newFiles]; setFamilyOtherFiles(updated); saveFiles('familyOther', updated); }
    alert('File(s) uploaded successfully!');
    e.target.value = '';
  };

  const processDynamicUpload = (currentList, newFiles, otherId, saveKey, setList) => {
    const updated = currentList.map(item => item.id === otherId ? { ...item, files: [...item.files, ...newFiles] } : item);
    setList(updated); saveFiles(saveKey, updated); alert('File(s) uploaded successfully!');
  };

  const handleOtherFileUpload = (e, otherId) => {
    const files = Array.from(e.target.files); if (files.length === 0) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (files.some(f => !validTypes.includes(f.type))) { alert('Only JPG, PNG, and PDF files are allowed!'); return; }
    const newFiles = files.map(file => ({ name: file.name, type: file.type, size: (file.size / 1024).toFixed(2) + ' KB', date: new Date().toLocaleString(), url: URL.createObjectURL(file) }));
    processDynamicUpload(otherFiles, newFiles, otherId, 'otherFiles', setOtherFiles); e.target.value = '';
  };

  const handleChallanOtherFileUpload = (e, otherId) => {
    const files = Array.from(e.target.files); if (files.length === 0) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (files.some(f => !validTypes.includes(f.type))) { alert('Only JPG, PNG, and PDF files are allowed!'); return; }
    const newFiles = files.map(file => ({ name: file.name, type: file.type, size: (file.size / 1024).toFixed(2) + ' KB', date: new Date().toLocaleString(), url: URL.createObjectURL(file) }));
    processDynamicUpload(challanOtherFiles, newFiles, otherId, 'challanOtherFiles', setChallanOtherFiles); e.target.value = '';
  };

  const handleMusheernamaOtherFileUpload = (e, otherId) => {
    const files = Array.from(e.target.files); if (files.length === 0) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (files.some(f => !validTypes.includes(f.type))) { alert('Only JPG, PNG, and PDF files are allowed!'); return; }
    const newFiles = files.map(file => ({ name: file.name, type: file.type, size: (file.size / 1024).toFixed(2) + ' KB', date: new Date().toLocaleString(), url: URL.createObjectURL(file) }));
    processDynamicUpload(musheernamaOtherFiles, newFiles, otherId, 'musheernamaOtherFiles', setMusheernamaOtherFiles); e.target.value = '';
  };

  const handleInquestOtherFileUpload = (e, otherId) => {
    const files = Array.from(e.target.files); if (files.length === 0) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (files.some(f => !validTypes.includes(f.type))) { alert('Only JPG, PNG, and PDF files are allowed!'); return; }
    const newFiles = files.map(file => ({ name: file.name, type: file.type, size: (file.size / 1024).toFixed(2) + ' KB', date: new Date().toLocaleString(), url: URL.createObjectURL(file) }));
    processDynamicUpload(inquestOtherFiles, newFiles, otherId, 'inquestOtherFiles', setInquestOtherFiles); e.target.value = '';
  };

  const addOtherFileCategory = () => { if (!newOtherName.trim()) { alert('Please enter a name!'); return; } const updated = [...otherFiles, { id: Date.now(), customName: newOtherName.trim(), files: [] }]; setOtherFiles(updated); saveFiles('otherFiles', updated); setNewOtherName(''); setShowOtherForm(false); };
  const addChallanOtherCategory = () => { if (!newChallanOtherName.trim()) { alert('Please enter a name!'); return; } const updated = [...challanOtherFiles, { id: Date.now(), customName: newChallanOtherName.trim(), files: [] }]; setChallanOtherFiles(updated); saveFiles('challanOtherFiles', updated); setNewChallanOtherName(''); setShowChallanOtherForm(false); };
  const addMusheernamaOtherCategory = () => { if (!newMusheernamaOtherName.trim()) { alert('Please enter a name!'); return; } const updated = [...musheernamaOtherFiles, { id: Date.now(), customName: newMusheernamaOtherName.trim(), files: [] }]; setMusheernamaOtherFiles(updated); saveFiles('musheernamaOtherFiles', updated); setNewMusheernamaOtherName(''); setShowMusheernamaOtherForm(false); };
  const addInquestOtherCategory = () => { if (!newInquestOtherName.trim()) { alert('Please enter a name!'); return; } const updated = [...inquestOtherFiles, { id: Date.now(), customName: newInquestOtherName.trim(), files: [] }]; setInquestOtherFiles(updated); saveFiles('inquestOtherFiles', updated); setNewInquestOtherName(''); setShowInquestOtherForm(false); };

  const deleteOtherFileCategory = (otherId) => { const updated = otherFiles.filter(item => item.id !== otherId); setOtherFiles(updated); saveFiles('otherFiles', updated); };
  const deleteChallanOtherCategory = (otherId) => { const updated = challanOtherFiles.filter(item => item.id !== otherId); setChallanOtherFiles(updated); saveFiles('challanOtherFiles', updated); };
  const deleteMusheernamaOtherCategory = (otherId) => { const updated = musheernamaOtherFiles.filter(item => item.id !== otherId); setMusheernamaOtherFiles(updated); saveFiles('musheernamaOtherFiles', updated); };
  const deleteInquestOtherCategory = (otherId) => { const updated = inquestOtherFiles.filter(item => item.id !== otherId); setInquestOtherFiles(updated); saveFiles('inquestOtherFiles', updated); };

  const deleteFile = (category, index) => {
    let updated;
    if (category === 'fir') { updated = firFiles.filter((_, i) => i !== index); setFirFiles(updated); saveFiles('fir', updated); }
    else if (category === 'challan-interim') { updated = challanInterim.filter((_, i) => i !== index); setChallanInterim(updated); saveFiles('challanInterim', updated); }
    else if (category === 'challan-final') { updated = challanFinal.filter((_, i) => i !== index); setChallanFinal(updated); saveFiles('challanFinal', updated); }
    else if (category === 'challan-supplementary') { updated = challanSupplementary.filter((_, i) => i !== index); setChallanSupplementary(updated); saveFiles('challanSupplementary', updated); }
    else if (category === 'musheernama-place-incident') { updated = musheernamaPlaceIncident.filter((_, i) => i !== index); setMusheernamaPlaceIncident(updated); saveFiles('musheernamaPlaceIncident', updated); }
    else if (category === 'musheernama-injuries') { updated = musheernamaInjuries.filter((_, i) => i !== index); setMusheernamaInjuries(updated); saveFiles('musheernamaInjuries', updated); }
    else if (category === 'musheernama-assets') { updated = musheernamaAssets.filter((_, i) => i !== index); setMusheernamaAssets(updated); saveFiles('musheernamaAssets', updated); }
    else if (category === 'musheernama-remand-article') { updated = musheernamaRemandArticle.filter((_, i) => i !== index); setMusheernamaRemandArticle(updated); saveFiles('musheernamaRemandArticle', updated); }
    else if (category === 'musheernama-last-wearing') { updated = musheernamaLastWearing.filter((_, i) => i !== index); setMusheernamaLastWearing(updated); saveFiles('musheernamaLastWearing', updated); }
    else if (category === 'inquest-report') { updated = inquestReportFiles.filter((_, i) => i !== index); setInquestReportFiles(updated); saveFiles('inquestReportFiles', updated); }
    else if (category === 'medical-final') { updated = null; setMedicalFinal(updated); saveFiles('medicalFinal', updated); }
    else if (category === 'medical-provisional') { updated = medicalProvisional.filter((_, i) => i !== index); setMedicalProvisional(updated); saveFiles('medicalProvisional', updated); }
    else if (category === 'post-mortem') { updated = postMortemFiles.filter((_, i) => i !== index); setPostMortemFiles(updated); saveFiles('postMortem', updated); }
    else if (category === 'dna') { updated = dnaFiles.filter((_, i) => i !== index); setDnaFiles(updated); saveFiles('dna', updated); }
    else if (category === 'plaint') { updated = plaintFiles.filter((_, i) => i !== index); setPlaintFiles(updated); saveFiles('plaint', updated); }
    else if (category === 'ws') { updated = wsFiles.filter((_, i) => i !== index); setWsFiles(updated); saveFiles('ws', updated); }
    else if (category === 'nikah-nama') { updated = nikahNamaFiles.filter((_, i) => i !== index); setNikahNamaFiles(updated); saveFiles('nikahNama', updated); }
    else if (category === 'family-other') { updated = familyOtherFiles.filter((_, i) => i !== index); setFamilyOtherFiles(updated); saveFiles('familyOther', updated); }
  };

  const deleteFileFromDynamicCategory = (list, setList, saveKey, otherId, fileIndex) => {
    const updated = list.map(item => item.id === otherId ? { ...item, files: item.files.filter((_, i) => i !== fileIndex) } : item);
    setList(updated); saveFiles(saveKey, updated);
  };

  const getFileIcon = (type) => {
    if (type && type.includes('pdf')) return <FaFilePdf className="text-red-500 text-xl" />;
    return <FaFileImage className="text-blue-500 text-xl" />;
  };

  if (!caseData) return <div className="p-6">Loading...</div>;
  const isFamilyCase = caseData.subject && caseData.subject.toLowerCase().includes('family');
  const pageTitle = caseData.subject || caseData.caseCategory || 'Case Details';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{pageTitle}</h1>
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

            {/* ========================================== */}
            {/* FAMILY CASE SECTION (FIXED & ERROR FREE) */}
            {/* ========================================== */}
            {isFamilyCase && (
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

                {/* NEW: Dynamic Upload System for Selected Category */}
                {activeFamilyCategory && !isCustomFamily && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <FaUpload /> Upload Documents for: <span className="text-primary-600 ml-2">{activeFamilyCategory}</span>
                    </h4>

                    <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Document Name</label>
                        <input type="text" value={newDocName} onChange={(e) => setNewDocName(e.target.value)} placeholder="e.g., Application, Affidavit" className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
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

                    {/* ✅ Search Box */}
                    <div className="mb-4">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchDoc}
                          onChange={(e) => setSearchDoc(e.target.value)}
                          placeholder="🔍 Search documents by name..."
                          className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          🔍
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {/* ✅ FIXED: Added filter logic for search */}
                      {familyDynamicDocs[activeFamilyCategory]?.filter((doc) => 
                        doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
                        doc.fileName.toLowerCase().includes(searchDoc.toLowerCase())
                      ).length === 0 ? (
                        <div className="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                          <FaFileAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500 dark:text-gray-400">
                            {searchDoc 
                              ? `No documents found matching "${searchDoc}"` 
                              : `No documents added yet for ${activeFamilyCategory}. Use the form above to add continuously.`}
                          </p>
                        </div>
                      ) : (
                        familyDynamicDocs[activeFamilyCategory]
                          .filter((doc) => 
                            doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
                            doc.fileName.toLowerCase().includes(searchDoc.toLowerCase())
                          )
                          .map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                              {/* Left Side: Icon and Text */}
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

                              {/* Right Side: View and Delete Buttons */}
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
            )}

            {/* Upload Sections Container */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
              <div className="p-6">

                {/* CRIMINAL CASE UPLOADS - UNCHANGED */}
                {!isFamilyCase && (
                  <div className="space-y-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload FIR Documents</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'fir')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {firFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{firFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('fir', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Challan</h3>
                      <div className="mb-4 p-4 border-2 border-blue-500 rounded-lg bg-blue-50/30 dark:bg-blue-900/10">
                        <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2"><FaFileAlt /> Interim Challan</h4>
                        <div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'challan-interim')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                        {challanInterim.length > 0 && (<div className="space-y-2">{challanInterim.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-blue-100 dark:bg-blue-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('challan-interim', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}
                      </div>
                      <div className="mb-4 p-4 border-2 border-green-500 rounded-lg bg-green-50/30 dark:bg-green-900/10">
                        <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2"><FaFileAlt /> Final Challan</h4>
                        <div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'challan-final')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                        {challanFinal.length > 0 && (<div className="space-y-2">{challanFinal.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-green-100 dark:bg-green-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('challan-final', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}
                      </div>
                      <div className="mb-4 p-4 border-2 border-purple-500 rounded-lg bg-purple-50/30 dark:bg-purple-900/10">
                        <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3 flex items-center gap-2"><FaFileAlt /> Supplementary Challan</h4>
                        <div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'challan-supplementary')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                        {challanSupplementary.length > 0 && (<div className="space-y-2">{challanSupplementary.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-purple-100 dark:bg-purple-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('challan-supplementary', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}
                      </div>
                      <div className="p-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-3"><h4 className="font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2"><FaFileAlt /> Other Challan Documents</h4><button type="button" onClick={() => setShowChallanOtherForm(!showChallanOtherForm)} className="flex items-center gap-2 px-3 py-1.5 bg-primary-700 text-white rounded-lg hover:bg-primary-800 text-sm font-medium"><FaPlus /> Add New Document</button></div>
                        {showChallanOtherForm && (<div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter document name:</label><div className="flex gap-2"><input type="text" value={newChallanOtherName} onChange={(e) => setNewChallanOtherName(e.target.value)} placeholder="e.g., Supplementary Report" className="flex-1 p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" onKeyPress={(e) => e.key === 'Enter' && addChallanOtherCategory()} /><button type="button" onClick={addChallanOtherCategory} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium">Add</button><button type="button" onClick={() => { setShowChallanOtherForm(false); setNewChallanOtherName(''); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"><FaTimes /></button></div></div>)}
                        {challanOtherFiles.length > 0 ? (<div className="space-y-4">{challanOtherFiles.map((category) => (<div key={category.id} className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50"><div className="flex items-center justify-between mb-2"><h5 className="font-bold text-gray-800 dark:text-white flex items-center gap-2"><FaFileAlt /> {category.customName}</h5><button onClick={() => deleteChallanOtherCategory(category.id)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div><div className="mb-2"><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleChallanOtherFileUpload(e, category.id)} className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 text-sm" /></div>{category.files.length > 0 && (<div className="space-y-1">{category.files.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded"><div className="flex items-center gap-2">{getFileIcon(file.type)}<div><p className="text-sm font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFileFromDynamicCategory(challanOtherFiles, setChallanOtherFiles, 'challanOtherFiles', category.id, idx)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div>))}</div>)} </div>))}</div>) : (<p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No other challan documents added yet.</p>)}
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Musheernama</h3>
                      <div className="mb-4 p-4 border-2 border-red-500 rounded-lg bg-red-50/30 dark:bg-red-900/10"><h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2"><FaMapMarkerAlt /> Memo of Place Incident</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'musheernama-place-incident')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{musheernamaPlaceIncident.length > 0 && (<div className="space-y-2">{musheernamaPlaceIncident.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-red-100 dark:bg-red-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('musheernama-place-incident', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}</div>
                      <div className="mb-4 p-4 border-2 border-orange-500 rounded-lg bg-orange-50/30 dark:bg-orange-900/10"><h4 className="font-bold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2"><FaHeartbeat /> Memo of Injuries</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'musheernama-injuries')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{musheernamaInjuries.length > 0 && (<div className="space-y-2">{musheernamaInjuries.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-orange-100 dark:bg-orange-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('musheernama-injuries', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}</div>
                      <div className="mb-4 p-4 border-2 border-yellow-500 rounded-lg bg-yellow-50/30 dark:bg-yellow-900/10"><h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-3 flex items-center gap-2"><FaBox /> Memo of Assets Resource</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'musheernama-assets')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{musheernamaAssets.length > 0 && (<div className="space-y-2">{musheernamaAssets.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('musheernama-assets', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}</div>
                      <div className="mb-4 p-4 border-2 border-indigo-500 rounded-lg bg-indigo-50/30 dark:bg-indigo-900/10"><h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center gap-2"><FaFileContract /> Memo of Remand Article</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'musheernama-remand-article')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{musheernamaRemandArticle.length > 0 && (<div className="space-y-2">{musheernamaRemandArticle.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('musheernama-remand-article', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}</div>
                      <div className="mb-4 p-4 border-2 border-pink-500 rounded-lg bg-pink-50/30 dark:bg-pink-900/10"><h4 className="font-bold text-pink-700 dark:text-pink-400 mb-3 flex items-center gap-2"><FaTshirt /> Memo of Last Wearing Clothes</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'musheernama-last-wearing')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{musheernamaLastWearing.length > 0 && (<div className="space-y-2">{musheernamaLastWearing.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-pink-100 dark:bg-pink-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('musheernama-last-wearing', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}</div>
                      <div className="p-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-3"><h4 className="font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2"><FaFileAlt /> Other Musheernama Documents</h4><button type="button" onClick={() => setShowMusheernamaOtherForm(!showMusheernamaOtherForm)} className="flex items-center gap-2 px-3 py-1.5 bg-primary-700 text-white rounded-lg hover:bg-primary-800 text-sm font-medium"><FaPlus /> Add New Document</button></div>
                        {showMusheernamaOtherForm && (<div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter document name:</label><div className="flex gap-2"><input type="text" value={newMusheernamaOtherName} onChange={(e) => setNewMusheernamaOtherName(e.target.value)} placeholder="e.g., Recovery Memo" className="flex-1 p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" onKeyPress={(e) => e.key === 'Enter' && addMusheernamaOtherCategory()} /><button type="button" onClick={addMusheernamaOtherCategory} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium">Add</button><button type="button" onClick={() => { setShowMusheernamaOtherForm(false); setNewMusheernamaOtherName(''); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"><FaTimes /></button></div></div>)}
                        {musheernamaOtherFiles.length > 0 ? (<div className="space-y-4">{musheernamaOtherFiles.map((category) => (<div key={category.id} className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50"><div className="flex items-center justify-between mb-2"><h5 className="font-bold text-gray-800 dark:text-white flex items-center gap-2"><FaFileAlt /> {category.customName}</h5><button onClick={() => deleteMusheernamaOtherCategory(category.id)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div><div className="mb-2"><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleMusheernamaOtherFileUpload(e, category.id)} className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 text-sm" /></div>{category.files.length > 0 && (<div className="space-y-1">{category.files.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded"><div className="flex items-center gap-2">{getFileIcon(file.type)}<div><p className="text-sm font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFileFromDynamicCategory(musheernamaOtherFiles, setMusheernamaOtherFiles, 'musheernamaOtherFiles', category.id, idx)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div>))}</div>)} </div>))}</div>) : (<p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No other musheernama documents added yet.</p>)}
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Inquest Report</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'inquest-report')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {inquestReportFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{inquestReportFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('inquest-report', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                      <div className="mt-4 p-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-3"><h4 className="font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2"><FaFileAlt /> Other Inquest Documents</h4><button type="button" onClick={() => setShowInquestOtherForm(!showInquestOtherForm)} className="flex items-center gap-2 px-3 py-1.5 bg-primary-700 text-white rounded-lg hover:bg-primary-800 text-sm font-medium"><FaPlus /> Add New Document</button></div>
                        {showInquestOtherForm && (<div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter document name:</label><div className="flex gap-2"><input type="text" value={newInquestOtherName} onChange={(e) => setNewInquestOtherName(e.target.value)} placeholder="e.g., Post Mortem Report" className="flex-1 p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" onKeyPress={(e) => e.key === 'Enter' && addInquestOtherCategory()} /><button type="button" onClick={addInquestOtherCategory} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium">Add</button><button type="button" onClick={() => { setShowInquestOtherForm(false); setNewInquestOtherName(''); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"><FaTimes /></button></div></div>)}
                        {inquestOtherFiles.length > 0 ? (<div className="space-y-4">{inquestOtherFiles.map((category) => (<div key={category.id} className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50"><div className="flex items-center justify-between mb-2"><h5 className="font-bold text-gray-800 dark:text-white flex items-center gap-2"><FaFileAlt /> {category.customName}</h5><button onClick={() => deleteInquestOtherCategory(category.id)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div><div className="mb-2"><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleInquestOtherFileUpload(e, category.id)} className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 text-sm" /></div>{category.files.length > 0 && (<div className="space-y-1">{category.files.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded"><div className="flex items-center gap-2">{getFileIcon(file.type)}<div><p className="text-sm font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFileFromDynamicCategory(inquestOtherFiles, setInquestOtherFiles, 'inquestOtherFiles', category.id, idx)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div>))}</div>)} </div>))}</div>) : (<p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No other inquest documents added yet.</p>)}
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Medical Report</h3>
                      <div className="mb-4 p-4 border-2 border-yellow-500 rounded-lg bg-yellow-50/30 dark:bg-yellow-900/10"><h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-3 flex items-center gap-2"><FaCheckCircle /> Provisional Report</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Provisional Report (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'medical-provisional')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{medicalProvisional.length > 0 && (<div className="space-y-2"><h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">History:</h5>{medicalProvisional.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('medical-provisional', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div>)}</div>
                      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50/30 dark:bg-green-900/10"><h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2"><FaCheckCircle /> Final Report</h4><div className="mb-3"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Final Report (JPG, PNG, PDF)</label><input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'medical-final')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>{medicalFinal && (<div className="flex items-center justify-between p-3 bg-green-100 dark:bg-green-900/30 rounded"><div className="flex items-center gap-3">{getFileIcon(medicalFinal.type)}<div><p className="font-medium text-gray-800 dark:text-white">{medicalFinal.name}</p><p className="text-xs text-gray-500">{medicalFinal.size} • {medicalFinal.date}</p></div></div><button onClick={() => deleteFile('medical-final', 0)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>)}</div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Post Mortem Report</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'post-mortem')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {postMortemFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{postMortemFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('post-mortem', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload DNA Report</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'dna')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {dnaFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{dnaFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('dna', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                      <div className="flex items-center justify-between mb-4"><h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2"><FaUpload /> Upload Other General Files</h3><button type="button" onClick={() => setShowOtherForm(!showOtherForm)} className="flex items-center gap-2 px-3 py-1.5 bg-primary-700 text-white rounded-lg hover:bg-primary-800 text-sm font-medium"><FaPlus /> Add New Category</button></div>
                      {showOtherForm && (<div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter file category name:</label><div className="flex gap-2"><input type="text" value={newOtherName} onChange={(e) => setNewOtherName(e.target.value)} placeholder="Enter category name..." className="flex-1 p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500" onKeyPress={(e) => e.key === 'Enter' && addOtherFileCategory()} /><button type="button" onClick={addOtherFileCategory} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium">Add</button><button type="button" onClick={() => { setShowOtherForm(false); setNewOtherName(''); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"><FaTimes /></button></div></div>)}
                      {otherFiles.length > 0 ? (<div className="space-y-4">{otherFiles.map((category) => (<div key={category.id} className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50"><div className="flex items-center justify-between mb-2"><h5 className="font-bold text-gray-800 dark:text-white flex items-center gap-2"><FaFileAlt /> {category.customName}</h5><button onClick={() => deleteOtherFileCategory(category.id)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div><div className="mb-2"><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleOtherFileUpload(e, category.id)} className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 text-sm" /></div>{category.files.length > 0 && (<div className="space-y-1">{category.files.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded"><div className="flex items-center gap-2">{getFileIcon(file.type)}<div><p className="text-sm font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFileFromDynamicCategory(otherFiles, setOtherFiles, 'otherFiles', category.id, idx)} className="text-red-500 hover:text-red-700 p-1"><FaTrash /></button></div>))}</div>)} </div>))}</div>) : (<p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No other files added yet.</p>)}
                    </div>
                  </div>
                )}

                {/* FAMILY CASE UPLOADS - STATIC SECTIONS (UNCHANGED) */}
                {isFamilyCase && (
                  <div className="space-y-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Plaint</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'plaint')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {plaintFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{plaintFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('plaint', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload W/S (Written Statement)</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'ws')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {wsFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{wsFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('ws', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Nikah-Nama</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'nikah-nama')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {nikahNamaFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{nikahNamaFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('nikah-nama', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><FaUpload /> Upload Other Documents</h3>
                      <div className="mb-4"><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Files (JPG, PNG, PDF)</label><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(e, 'family-other')} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
                      {familyOtherFiles.length > 0 && (<div><h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2"><FaHistory /> Upload History</h4><div className="space-y-2">{familyOtherFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"><div className="flex items-center gap-3">{getFileIcon(file.type)}<div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div></div><button onClick={() => deleteFile('family-other', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button></div>))}</div></div>)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4 pb-8">
              <button onClick={() => navigate('/dashboard/case-file')} className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400">Back to Case File</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFileDetails;