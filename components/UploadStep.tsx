
import React, { useState, useCallback, useRef } from 'react';
import { CheckCircleIcon, UploadCloudIcon } from './icons';
import { UPLOAD_TIPS } from '../constants';

interface UploadStepProps {
  onFilesSubmit: (files: File[]) => void;
  onBack: () => void;
}

const PhotoInput: React.FC<{
  index: number;
  file: File | null;
  onFileChange: (index: number, file: File | null) => void;
}> = ({ index, file, onFileChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(index, e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(index, e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  return (
    <div className="w-full aspect-square">
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        className="hidden"
        id={`file-input-${index}`}
      />
      <label
        htmlFor={`file-input-${index}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`flex items-center justify-center w-full h-full border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-200 ${
          file ? 'border-sky-500 bg-sky-50' : 'border-slate-300 hover:border-sky-400 hover:bg-slate-50'
        }`}
      >
        {file ? (
          <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <div className="text-center text-slate-500">
            <UploadCloudIcon className="mx-auto h-10 w-10" />
            <p className="mt-2 text-sm">Drop photo #{index + 1} here</p>
            <p className="text-xs">or click to browse</p>
          </div>
        )}
      </label>
    </div>
  );
};

const UploadStep: React.FC<UploadStepProps> = ({ onFilesSubmit, onBack }) => {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);

  const handleFileChange = useCallback((index: number, file: File | null) => {
    setFiles(prev => {
      const newFiles = [...prev];
      newFiles[index] = file;
      return newFiles;
    });
  }, []);

  const validFiles = files.filter(f => f !== null) as File[];
  const isReady = validFiles.length === 3;

  const handleSubmit = () => {
    if (isReady) {
      onFilesSubmit(validFiles);
    }
  };
  
  return (
    <div className="py-16 sm:py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center">Upload 3 Photos of Yourself</h2>
        <p className="text-slate-600 text-center mt-2">The more varied the photos, the better the AI can learn your features.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {files.map((file, i) => (
                <PhotoInput key={i} index={i} file={file} onFileChange={handleFileChange} />
            ))}
        </div>

        <div className="mt-10 p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h3 className="font-semibold text-lg text-slate-800">Upload Tips for Best Results:</h3>
            <ul className="mt-4 space-y-2">
                {UPLOAD_TIPS.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{tip}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
                onClick={handleSubmit}
                disabled={!isReady}
                className="w-full sm:w-auto bg-sky-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:shadow-none hover:bg-sky-700"
            >
                Generate My Headshots
            </button>
             <button
                onClick={onBack}
                className="w-full sm:w-auto text-slate-600 font-semibold py-4 px-8 rounded-full hover:bg-slate-200 transition-colors"
            >
                Go Back
            </button>
        </div>
    </div>
  );
};

export default UploadStep;
