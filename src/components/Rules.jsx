import React from 'react';

const Rules = () => {
  return (
    <div className="mt-10 mb-10 p-6 md:p-8 bg-[#fdf2f2] rounded-2xl border border-[#fee2e2] shadow-sm animate-fade-in-up">
      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-6 text-gray-900 border-b-2 border-red-200 pb-2 inline-block">
        How to play <span className="text-red-500">dice game</span>
      </h2>
      <div className="flex flex-col gap-4">
        {[
          "Select any number from the top",
          "Click on the dice image to roll",
          "If the dice matches your selection, you win points equal to the dice value",
          "If the guess is wrong, 2 points will be deducted from your total score"
        ].map((rule, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
              {idx + 1}
            </span>
            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              {rule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;

