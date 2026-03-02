import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dices from "../assets/dices.png";

const StartGame = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1240px] mx-auto h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-12 md:gap-20">
      <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
        <img
          src={Dices}
          alt="Dices"
          className="w-full max-w-[450px] md:max-w-[550px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-black uppercase leading-none">
            Dice <span className="text-gray-400">Game</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide text-center md:text-left">
            Test your luck in the ultimate dice challenge.
          </p>
        </div>
        <button
          onClick={() => navigate('/game')}
          className="group relative min-w-[240px] bg-black text-white px-8 py-4 rounded-xl text-lg font-bold border-2 border-black overflow-hidden transition-all duration-300 hover:bg-white hover:text-black shadow-xl hover:shadow-2xl active:scale-95"
        >
          <span className="relative z-10 uppercase tracking-widest">Play Now</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        </button>
      </div>
    </div>
  );
};

export default StartGame;

