
import React from 'react';

interface BeforeAfterCardProps {
  beforeSrc: string;
  afterSrc: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ beforeSrc, afterSrc }) => {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <img src={beforeSrc} alt="Before" className="aspect-square w-full h-auto object-cover rounded-xl" />
        <p className="text-center mt-2 font-semibold text-sm text-slate-600">Before</p>
      </div>
      <div>
        <img src={afterSrc} alt="After" className="aspect-square w-full h-auto object-cover rounded-xl" />
        <p className="text-center mt-2 font-semibold text-sm text-sky-600">After AI</p>
      </div>
    </div>
  );
};

export default BeforeAfterCard;
