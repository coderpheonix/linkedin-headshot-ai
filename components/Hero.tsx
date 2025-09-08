import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  // Updated image URLs
  const images = [
    "https://lh3.googleusercontent.com/CFD8jo5r9xhx8fioKrhS3cVyeZ0hAUf4FEpaMQ6elYzDnRmB6hg87qT2Y-ajE3JAppXkJolqPZeTrNvx41reG4AREAJ5lEltoi-KCaqJ9B-ANhkVqmA4XEXwrKZz-w_cK5U_p33qaVU=w1280",
    "https://lh5.googleusercontent.com/4t2aRDG8n4pKX5h3txhy8oSYtsrDLJGIzS9j7Pl9Ftkz4ooFTdxiM4GlStzaC4hDCC_78STcOMRHPjlDCGjX5-gpL3dPiood4qqHcF15LoD0C4tm_p1kMb-Jm1RSa560TCalbHLhMXU=w1280",
    "https://lh3.googleusercontent.com/yNq1yq7NxNdluTItAj6euSU6ko5TxcaLBEdflDguw2seSaxfKvHe9e7F7VeHJtG_lnNd60y46pKoa63ZSSa6Lj9K9e5cIQ4niid4iorsfEW_PfpYL2ZaWMYNbLkX2ea-2JvtMq2ffAM=w1280",
    "https://lh6.googleusercontent.com/Ws7Iz1UHYQzQ7lf5MS1ed-ro6IVsA4Vqz9jCxDkOMVCRntiWP9-_7HpfDL6ucbeiPzSGUcU4hOPHk69uikvPCpPXFEF4Lvpk9SXZ5BHaumMhm9YCD9wTeu77xkXC0uBJ5KP8vuoj0OA=w1280"
  ];

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
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`photo${idx + 1}`} className="rounded-xl shadow-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
