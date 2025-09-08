import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="text-center py-16 sm:py-24 px-4">
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
        Get your <span className="text-sky-600">LinkedIn-ready</span> headshot
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Upload your photos and let our AI create a polished, professional headshot.
      </p>
      <button
        onClick={onStart}
        className="mt-8 bg-sky-600 text-white font-bold py-3 px-6 rounded-full hover:bg-sky-700"
      >
        Upload Photos
      </button>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <img src="https://lh3.googleusercontent.com/CFD8jo5r9xhx8fioKrhS3cVyeZ0hAUf4FEpaMQ6elYzDnRmB6hg87qT2Y-ajE3JAppXkJolqPZeTrNvx41reG4AREAJ5lEltoi-KCaqJ9B-ANhkVqmA4XEXwrKZz-w_cK5U_p33qaVU=w1280" alt="photo1" className="rounded-xl shadow-lg" />
        <img src="https://lh5.googleusercontent.com/4t2aRDG8n4pKX5h3txhy8oSYtsrDLJGIzS9j7Pl9Ftkz4ooFTdxiM4GlStzaC4hDCC_78STcOMRHPjlDCGjX5-gpL3dPiood4qqHcF15LoD0C4tm_p1kMb-Jm1RSa560TCalbHLhMXU=w1280" alt="photo2" className="rounded-xl shadow-lg" />
        <img src="https://lh3.googleusercontent.com/yNq1yq7NxNdluTItAj6euSU6ko5TxcaLBEdflDguw2seSaxfKvHe9e7F7VeHJtG_lnNd60y46pKoa63ZSSa6Lj9K9e5cIQ4niid4iorsfEW_PfpYL2ZaWMYNbLkX2ea-2JvtMq2ffAM=w1280" alt="photo3" className="rounded-xl shadow-lg" />
        <img src="https://lh6.googleusercontent.com/Ws7Iz1UHYQzQ7lf5MS1ed-ro6IVsA4Vqz9jCxDkOMVCRntiWP9-_7HpfDL6ucbeiPzSGUcU4hOPHk69uikvPCpPXFEF4Lvpk9SXZ5BHaumMhm9YCD9wTeu77xkXC0uBJ5KP8vuoj0OA=w1280" alt="photo4" className="rounded-xl shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;
