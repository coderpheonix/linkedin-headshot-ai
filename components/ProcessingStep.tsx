
import React, { useState, useEffect } from 'react';
import { PROCESSING_MESSAGES } from '../constants';
import { LoaderIcon } from './icons';

const ProcessingStep: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % PROCESSING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 sm:py-32 px-4 flex flex-col items-center justify-center text-center">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-slate-200 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <LoaderIcon className="w-16 h-16 text-sky-500 animate-spin" />
        </div>
      </div>
      <h2 className="mt-8 text-2xl sm:text-3xl font-bold text-slate-800">
        AI is crafting your headshots...
      </h2>
      <p className="mt-4 text-slate-600">This can take up to a minute. Please don't close this page.</p>

      <div className="mt-8 h-6 w-full max-w-md">
        <p className="text-lg text-sky-600 font-medium transition-opacity duration-500">
            {PROCESSING_MESSAGES[messageIndex]}
        </p>
      </div>
    </div>
  );
};

export default ProcessingStep;
