import React from 'react';

const TotalScore = ({ score }) => {
  return (
    <div className="flex flex-col items-center md:items-start select-none">
      <h1 className="text-7xl md:text-9xl font-extrabold leading-none tracking-tighter text-black">
        {score}
      </h1>
      <p className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-500 mt-[-4px] md:mt-[-8px] ml-1">
        Total <span className="text-gray-900 border-b-2 border-black">Score</span>
      </p>
    </div>
  );
};

export default TotalScore;