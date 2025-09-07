
import React from 'react';
import BeforeAfterCard from './BeforeAfterCard';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="text-center py-16 sm:py-24 px-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
        Get your <span className="text-sky-600">LinkedIn-ready</span> headshot in minutes—<span className="underline decoration-sky-400">free!</span>
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-600">
        Stop using selfies. Upload your photos and let our AI create a polished, professional headshot that makes the right impression.
      </p>
      <div className="mt-10">
        <button
          onClick={onStart}
          className="bg-sky-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300 transform hover:scale-105"
        >
          Upload Your Photos
        </button>
      </div>

      <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <BeforeAfterCard beforeSrc="https://picsum.photos/seed/before1/400/400" afterSrc="https://picsum.photos/seed/after1/400/400" />
            <BeforeAfterCard beforeSrc="https://picsum.photos/seed/before2/400/400" afterSrc="https://picsum.photos/seed/after2/400/400" />
            <div className="hidden lg:block">
                <BeforeAfterCard beforeSrc="https://picsum.photos/seed/before3/400/400" afterSrc="https://picsum.photos/seed/after3/400/400" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
