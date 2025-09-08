import React from 'react';

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

      {/* Photo Cards */}
      <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <img src="https://picsum.photos/seed/photo1/400/400" alt="photo1" className="rounded-xl shadow-lg" />
          <img src="https://picsum.photos/seed/photo2/400/400" alt="photo2" className="rounded-xl shadow-lg" />
          <img src="https://picsum.photos/seed/photo3/400/400" alt="photo3" className="rounded-xl shadow-lg" />
          <img src="https://picsum.photos/seed/photo4/400/400" alt="photo4" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
