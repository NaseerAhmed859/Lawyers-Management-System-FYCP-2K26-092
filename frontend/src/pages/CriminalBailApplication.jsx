import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUpload, FaFilePdf, FaFileImage, FaTrash, FaSave } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const CriminalBailApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [files, setFiles] = useState({
    impungedOrder: [],
    fir: [],
    challan: [],
    otherSupportive: []
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
    allFiles.criminalBailApplication = files;
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
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Criminal Bail Application</h1>
              <p className="text-gray-600 dark:text-gray-400">Upload required documents for criminal bail application</p>
            </div>

            <div className="space-y-6">
              {/* 1. Impunged order and inverse */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 1. Impunged order and inverse
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('impungedOrder', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.impungedOrder.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.impungedOrder.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('impungedOrder', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. FIR */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 2. FIR
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('fir', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.fir.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.fir.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('fir', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Challan */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 3. Challan
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('challan', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.challan.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.challan.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('challan', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Other supportive document */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FaUpload /> 4. Other supportive document
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files (PDF, JPG, PNG)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload('otherSupportive', e)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                {files.otherSupportive.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.otherSupportive.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div><p className="font-medium text-gray-800 dark:text-white">{file.name}</p><p className="text-xs text-gray-500">{file.size} • {file.date}</p></div>
                        </div>
                        <button onClick={() => deleteFile('otherSupportive', idx)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
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

export default CriminalBailApplication;