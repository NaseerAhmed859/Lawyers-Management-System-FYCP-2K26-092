import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUpload, FaFilePdf, FaFileImage, FaTrash, FaSave } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const PetitionCourt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [files, setFiles] = useState({
    memoPetitionsAffidavit: [],
    applicationAuthorities: [],
    newspaper: [],
    exemptionApplication: [],
    urgentApplication: [],
    vakalatnama: []
  });

  const handleFileUpload = (category, e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => ({
      ...prev,
      [category]: [...prev[category], ...selectedFiles.map(file => ({
        name: file.name,
        type: file.type,
        size: (file.size / 1024).toFixed(2) + ' KB',
        date: new Date().toLocaleString(),
        url: URL.createObjectURL(file)
      }))]
    }));
  };

  const deleteFile = (category, index) => {
    setFiles(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  const getFileIcon = (type) => {
    if (type.includes('pdf')) return <FaFilePdf className="text-red-500 text-xl" />;
    return <FaFileImage className="text-blue-500 text-xl" />;
  };

  const saveDocuments = () => {
    const allFiles = JSON.parse(localStorage.getItem(`case_${id}_files`) || '{}');
    allFiles.petitionCourt = files;
    localStorage.setItem(`case_${id}_files`, JSON.stringify(allFiles));
    alert('Documents saved successfully!');
    navigate(`/dashboard/case-file/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-64 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Petition Court</h1>
              <p className="text-gray-600 dark:text-gray-400">Upload required documents for petition court</p>
            </div>

            <div className="space-y-6">
              {/* 1. Memo of Petitions along with Affidavit */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 1. Memo of Petitions along with Affidavit
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Upload Files (PDF, JPG, PNG)
                  </label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('memoPetitionsAffidavit', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.memoPetitionsAffidavit.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.memoPetitionsAffidavit.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('memoPetitionsAffidavit', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Application to the concerned authorities */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 2. Application to the concerned authorities
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('applicationAuthorities', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.applicationAuthorities.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.applicationAuthorities.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('applicationAuthorities', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Newspaper */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 3. Newspaper (Supporting document)
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('newspaper', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.newspaper.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.newspaper.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('newspaper', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Exemption Application */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 4. Exemption Application
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('exemptionApplication', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.exemptionApplication.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.exemptionApplication.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('exemptionApplication', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Urgent Application */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 5. Urgent Application
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('urgentApplication', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.urgentApplication.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.urgentApplication.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('urgentApplication', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 6. Vakalatnama */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 6. Vakalatnama
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('vakalatnama', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.vakalatnama.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.vakalatnama.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('vakalatnama', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button onClick={() => navigate('/dashboard/add-case')} className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400">Cancel</button>
                <button onClick={saveDocuments} className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 flex items-center gap-2"><FaSave /> Save Documents</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetitionCourt;