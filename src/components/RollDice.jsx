import React, { useState } from 'react';
import Dice1 from "../assets/dice_1.png";
import Dice2 from "../assets/dice_2.png";
import Dice3 from "../assets/dice_3.png";
import Dice4 from "../assets/dice_4.png";
import Dice5 from "../assets/dice_5.png";
import Dice6 from "../assets/dice_6.png";
import Rules from './Rules';

const DiceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const RollDice = ({ rollDice, currentDice, resetScore }) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-14 bg-transparent select-none">
      <div
        onClick={rollDice}
        className="group cursor-pointer relative"
      >
        <div className="absolute inset-0 bg-gray-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        <img
          src={DiceImages[currentDice - 1]}
          alt={`Dice ${currentDice}`}
          className="w-44 md:w-64 h-auto relative z-10 drop-shadow-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95 group-active:rotate-12"
        />
      </div>
      <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-gray-500 mt-6 animate-pulse">
        Click to <span className="text-black">Roll</span>
      </p>

      <div className="flex flex-col gap-4 mt-10 w-full max-w-[260px]">
        <button
          onClick={resetScore}
          className="w-full bg-white text-black border-2 border-black px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-standard shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-95"
        >
          Reset Game
        </button>
        <button
          onClick={() => setShowRules((prev) => !prev)}
          className={`w-full px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-standard border-2 border-black active:scale-95 ${showRules
              ? "bg-white text-black shadow-none translate-x-[3px] translate-y-[3px]"
              : "bg-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            }`}
        >
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>

      <div className={`transition-all duration-500 ease-in-out w-full max-w-[800px] overflow-hidden ${showRules ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <Rules />
      </div>
    </div>
  );
};

export default RollDice;