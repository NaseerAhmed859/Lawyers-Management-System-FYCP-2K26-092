import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUpload, FaFilePdf, FaFileImage, FaTrash, FaHistory, FaCheckCircle, FaPlus } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const CaseFileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);
  
  // Family Case States
  const [familyCategory, setFamilyCategory] = useState('');
  const [isCustomFamily, setIsCustomFamily] = useState(false);
  
  // File states - Criminal
  const [firFiles, setFirFiles] = useState([]);
  const [challanFiles, setChallanFiles] = useState([]);
  const [musheernamaFiles, setMusheernamaFiles] = useState([]);
  const [medicalFinal, setMedicalFinal] = useState(null);
  const [medicalProvisional, setMedicalProvisional] = useState([]);
  
  // File states - Family
  const [plaintFiles, setPlaintFiles] = useState([]);
  const [wsFiles, setWsFiles] = useState([]);
  const [nikahNamaFiles, setNikahNamaFiles] = useState([]);
  const [familyOtherFiles, setFamilyOtherFiles] = useState([]);

  // Load case data
  useEffect(() => {
    const cases = JSON.parse(localStorage.getItem('firmCases') || '[]');
    const foundCase = cases.find(c => c.id.toString() === id);
    if (foundCase) {
      setCaseData(foundCase);
      
      const savedFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');
      if (savedFiles.fir) setFirFiles(savedFiles.fir);
      if (savedFiles.challan) setChallanFiles(savedFiles.challan);
      if (savedFiles.musheernama) setMusheernamaFiles(savedFiles.musheernama);
      if (savedFiles.medicalFinal) setMedicalFinal(savedFiles.medicalFinal);
      if (savedFiles.medicalProvisional) setMedicalProvisional(savedFiles.medicalProvisional);
      if (savedFiles.plaint) setPlaintFiles(savedFiles.plaint);
      if (savedFiles.ws) setWsFiles(savedFiles.ws);
      if (savedFiles.nikahNama) setNikahNamaFiles(savedFiles.nikahNama);
      if (savedFiles.familyOther) setFamilyOtherFiles(savedFiles.familyOther);
      
      // Load Family Category
      if (savedFiles.familyCategory) {
        if (savedFiles.familyCategory === 'Others') {
          setIsCustomFamily(true);
          setFamilyCategory(savedFiles.customFamilyCategory || '');
        } else {
          setFamilyCategory(savedFiles.familyCategory);
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

  const handleFileUpload = (e, category, type = 'multiple') => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    const invalidFiles = files.filter(f => !validTypes.includes(f.type));
    
    if (invalidFiles.length > 0) {
      alert('Only JPG, PNG, and PDF files are allowed!');
      return;
    }

    const newFiles = files.map(file => ({
      name: file.name,
      type: file.type,
      size: (file.size / 1024).toFixed(2) + ' KB',
      date: new Date().toLocaleString(),
      url: URL.createObjectURL(file)
    }));

    let updated;
    if (category === 'fir') {
      updated = [...firFiles, ...newFiles];
      setFirFiles(updated);
      saveFiles('fir', updated);
    } else if (category === 'challan') {
      updated = [...challanFiles, ...newFiles];
      setChallanFiles(updated);
      saveFiles('challan', updated);
    } else if (category === 'musheernama') {
      updated = [...musheernamaFiles, ...newFiles];
      setMusheernamaFiles(updated);
      saveFiles('musheernama', updated);
    } else if (category === 'medical-final') {
      updated = newFiles[0];
      setMedicalFinal(updated);
      saveFiles('medicalFinal', updated);
    } else if (category === 'medical-provisional') {
      updated = [...medicalProvisional, ...newFiles];
      setMedicalProvisional(updated);
      saveFiles('medicalProvisional', updated);
    } else if (category === 'plaint') {
      updated = [...plaintFiles, ...newFiles];
      setPlaintFiles(updated);
      saveFiles('plaint', updated);
    } else if (category === 'ws') {
      updated = [...wsFiles, ...newFiles];
      setWsFiles(updated);
      saveFiles('ws', updated);
    } else if (category === 'nikah-nama') {
      updated = [...nikahNamaFiles, ...newFiles];
      setNikahNamaFiles(updated);
      saveFiles('nikahNama', updated);
    } else if (category === 'family-other') {
      updated = [...familyOtherFiles, ...newFiles];
      setFamilyOtherFiles(updated);
      saveFiles('familyOther', updated);
    }

    alert('File(s) uploaded successfully!');
  };

  const deleteFile = (category, index) => {
    let updated;
    if (category === 'fir') {
      updated = firFiles.filter((_, i) => i !== index);
      setFirFiles(updated);
      saveFiles('fir', updated);
    } else if (category === 'challan') {
      updated = challanFiles.filter((_, i) => i !== index);
      setChallanFiles(updated);
      saveFiles('challan', updated);
    } else if (category === 'musheernama') {
      updated = musheernamaFiles.filter((_, i) => i !== index);
      setMusheernamaFiles(updated);
      saveFiles('musheernama', updated);
    } else if (category === 'medical-final') {
      updated = null;
      setMedicalFinal(updated);
      saveFiles('medicalFinal', updated);
    } else if (category === 'medical-provisional') {
      updated = medicalProvisional.filter((_, i) => i !== index);
      setMedicalProvisional(updated);
      saveFiles('medicalProvisional', updated);
    } else if (category === 'plaint') {
      updated = plaintFiles.filter((_, i) => i !== index);
      setPlaintFiles(updated);
      saveFiles('plaint', updated);
    } else if (category === 'ws') {
      updated = wsFiles.filter((_, i) => i !== index);
      setWsFiles(updated);
      saveFiles('ws', updated);
    } else if (category === 'nikah-nama') {
      updated = nikahNamaFiles.filter((_, i) => i !== index);
      setNikahNamaFiles(updated);
      saveFiles('nikahNama', updated);
    } else if (category === 'family-other') {
      updated = familyOtherFiles.filter((_, i) => i !== index);
      setFamilyOtherFiles(updated);
      saveFiles('familyOther', updated);
    }
  };

  const getFileIcon = (type) => {
    if (type.includes('pdf')) return <FaFilePdf className="text-red-500 text-xl" />;
    return <FaFileImage className="text-blue-500 text-xl" />;
  };

  if (!caseData) return <div className="p-6">Loading...</div>;

  // ✅ FIX: Check if subject includes "Family" to handle variations like "Family Cases/Matters"
  const isFamilyCase = caseData.subject && caseData.subject.toLowerCase().includes('family');
  const pageTitle = caseData.subject || caseData.caseCategory || 'Case Details';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {pageTitle}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {caseData.caseNo}/{caseData.year} - {caseData.party1Name} VS {caseData.party2Name}
              </p>
            </div>

            {/* Case Info Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 border-l-4 border-primary-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Court</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{caseData.courtName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Case Type</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{caseData.caseCategory}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Client</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{caseData.clientName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Status</p>
                  <p className="font-semibold text-primary-600">{caseData.result}</p>
                </div>
              </div>
            </div>

            {/* Family Case Category Selection (Only for Family Cases) */}
            {isFamilyCase && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center gap-2">
                  <FaPlus /> Select Category of Matter
                </h3>
                
                {isCustomFamily ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={familyCategory}
                      onChange={(e) => {
                        setFamilyCategory(e.target.value);
                        saveFiles('customFamilyCategory', e.target.value);
                      }}
                      placeholder="Enter your custom matter category..."
                      className="w-full p-2 border-2 border-primary-500 rounded dark:bg-gray-700 dark:border-primary-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomFamily(false);
                        setFamilyCategory('');
                        saveFiles('familyCategory', '');
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm font-medium"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <select
                    value={familyCategory}
                    onChange={(e) => {
                      if (e.target.value === 'Others') {
                        setIsCustomFamily(true);
                        setFamilyCategory('');
                      } else {
                        setIsCustomFamily(false);
                        setFamilyCategory(e.target.value);
                        saveFiles('familyCategory', e.target.value);
                      }
                    }}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">-- Select Category of Matter --</option>
                    <option value="Suit for Maintenance">Suit for Maintenance</option>
                    <option value="Suit for Khula/Divorce">Suit for Khula/Divorce</option>
                    <option value="Gargon Applicants">Gargon Applicants</option>
                    <option value="Others">Others (Custom Input)</option>
                  </select>
                )}
              </div>
            )}

            {/* Upload Sections */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                
                {/* ✅ FAMILY CASE UPLOADS (Plaint, W/S, Nikah-Nama, Others) */}
                {isFamilyCase && (
                  <div className="space-y-6">
                    {/* Plaint Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload Plaint
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'plaint')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {plaintFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {plaintFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('plaint', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* W/S Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload W/S (Objection Record)
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'ws')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {wsFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {wsFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('ws', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Nikah-Nama Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload Nikah-Nama
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'nikah-nama')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {nikahNamaFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {nikahNamaFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('nikah-nama', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Other Documents Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload Other Documents
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'family-other')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {familyOtherFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {familyOtherFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('family-other', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ✅ CRIMINAL CASE UPLOADS (FIR, Challan, Musheernama, Medical) */}
                {!isFamilyCase && (
                  <div className="space-y-6">
                    {/* FIR Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload FIR Documents
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'fir')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {firFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {firFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('fir', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Challan Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload Challan
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'challan')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {challanFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {challanFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('challan', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Musheernama Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload Musheernama
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Files (JPG, PNG, PDF)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleFileUpload(e, 'musheernama')}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      {musheernamaFiles.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <FaHistory /> Upload History
                          </h4>
                          <div className="space-y-2">
                            {musheernamaFiles.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('musheernama', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Medical Report Upload */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FaUpload /> Upload Medical Report
                      </h3>
                      
                      <div className="mb-6 p-4 border-2 border-green-500 rounded-lg">
                        <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                          <FaCheckCircle /> Final Report
                        </h4>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Upload Final Report (JPG, PNG, PDF)
                          </label>
                          <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleFileUpload(e, 'medical-final', 'single')}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        {medicalFinal && (
                          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
                            <div className="flex items-center gap-3">
                              {getFileIcon(medicalFinal.type)}
                              <div>
                                <p className="font-medium text-gray-800 dark:text-white">{medicalFinal.name}</p>
                                <p className="text-xs text-gray-500">{medicalFinal.size} • {medicalFinal.date}</p>
                              </div>
                            </div>
                            <button onClick={() => deleteFile('medical-final', 0)} className="text-red-500 hover:text-red-700 p-2">
                              <FaTrash />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="p-4 border-2 border-yellow-500 rounded-lg">
                        <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-3">Provisional Report</h4>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Upload Provisional Report (JPG, PNG, PDF)
                          </label>
                          <input
                            type="file"
                            multiple
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleFileUpload(e, 'medical-provisional')}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        {medicalProvisional.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">History:</h5>
                            {medicalProvisional.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                <div className="flex items-center gap-3">
                                  {getFileIcon(file.type)}
                                  <div>
                                    <p className="font-medium text-gray-800 dark:text-white">{file.name}</p>
                                    <p className="text-xs text-gray-500">{file.size} • {file.date}</p>
                                  </div>
                                </div>
                                <button onClick={() => deleteFile('medical-provisional', idx)} className="text-red-500 hover:text-red-700 p-2">
                                  <FaTrash />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-end gap-4 pb-8">
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

export default CaseFileDetails;