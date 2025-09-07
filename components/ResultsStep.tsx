
import React from 'react';
import type { GeneratedImage } from '../types';
import { DownloadIcon } from './icons';

interface ResultsStepProps {
  images: GeneratedImage[];
  onStartOver: () => void;
}

const ResultsStep: React.FC<ResultsStepProps> = ({ images, onStartOver }) => {
  
  const handleDownload = (src: string, filename: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-16 sm:py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Your AI Headshots Are Ready!</h2>
            <p className="mt-3 text-slate-600">Click on any image to download it. We hope you find one you love!</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {images.map((image, index) => (
                <div key={image.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src={image.src} alt={`Generated headshot ${index + 1}`} className="aspect-square w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleDownload(image.src, `linkedin-headshot-${index + 1}.png`)}
                          className="flex items-center gap-2 bg-white/90 text-slate-800 font-bold py-3 px-6 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"
                        >
                            <DownloadIcon className="h-5 w-5" />
                            Download
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center">
            <button
                onClick={onStartOver}
                className="bg-sky-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-sky-700 transition-colors duration-300"
            >
                Start Over with New Photos
            </button>
        </div>
    </div>
  );
};

export default ResultsStep;
