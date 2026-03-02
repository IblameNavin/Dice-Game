import React from 'react';

const NumberSelector = ({ numberSelected, setNumberSelected, error, setError }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setNumberSelected(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
      {error && (
        <p className="text-red-500 text-sm font-bold uppercase tracking-wider animate-bounce">
          {error}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {array.map((value, i) => (
          <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`h-11 w-11 md:h-14 md:w-14 border-2 border-black grid place-items-center text-lg md:text-xl font-bold cursor-pointer transition-standard select-none rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] ${value === numberSelected
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-gray-400 mt-2">
        Select a <span className="text-black">Number</span>
      </p>
    </div>
  );
};

export default NumberSelector;