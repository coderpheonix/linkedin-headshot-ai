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

      {/* Four-photo grid */}
      <section className="py-12">
        <h3 className="text-3xl font-bold text-brand-gray-900 mb-8">From Casual to Corporate</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img
              src="https://lh6.googleusercontent.com/Bf2eCReODmtngw4CD96QoUf20ChSfOez54OrAF5Tq2ftE-b3bLtF2yMvhLdCPUXV9i0i9VoqkMNDhPlPtOXPZWShrV1-XeM7Y9T77weCG-r1GSxQA7H95jKdRW0zvvv8uagjFn7YIB8=w1280"
              alt="Photo 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img
              src="https://lh4.googleusercontent.com/iiWKRS-oHG3enPXuptFzKlsqf93srfRpFCZAmx52L2Chu9WvJ-Yqq7LReDImB66FXr0e_04EfHwI8u3AqH-qaOcKrP2SpotPUASV8tX1mC9p2zLWN6TEmyQKzCehweWru9X9gJ8FS1A=w1280"    
              alt="Photo 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img
              src="https://lh5.googleusercontent.com/4fKOAXeEoZRVAfWj2kCPr7p6SqzSuQQSkmdqO2IfWbWu4HisufC7UV2PAR2uvrH9PWBk0bWLlVuMWG8tGjDHRjUIsDBNnYXIFMOhO1voZlBFJaYCYfphQ1ZtN0Qqle38lzDARcXzDJ8=w1280"
              alt="Photo 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/GG56Zq5_qDwAa7_N7qHbgEO1gMIKguMMyc3N72bSy1cERlfYWs0X51gKAvnLxYTQvzISo8F0kHodIXkLqkwtlduRDDtVHc7XXArbZC3bzAW9aDx10DzYG4OmsvHfisXMKLSEMtEFvgk=w1280"
              alt="Photo 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
