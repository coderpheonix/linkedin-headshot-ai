
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-auto">
  <div className="w-full max-w-5xl mx-auto px-4 py-6 text-center text-brand-gray-700 flex items-center justify-center gap-2">
    {/* LinkedIn Icon with link */}
    <a
      href="https://www.linkedin.com/in/mazharul-islam-tanvir/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline-block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.865 0-2.149 1.454-2.149 2.957v5.709h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.562 2.838-1.562 3.034 0 3.594 1.997 3.594 4.592v5.603z" />
      </svg>
    </a>
    <span>&copy; {new Date().getFullYear()} Mazharul Islam Tanvir</span>
  </div>
  <div className="text-sm text-center text-brand-gray-500 mt-1">
    Generate professional headshots for free.
  </div>
</footer>

  );
};

export default Footer;

