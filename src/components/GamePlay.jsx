import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from "./NumberSelector";
import RollDice from './RollDice';

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [numberSelected, setNumberSelected] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rollDice = () => {
    if (!numberSelected) {
      setError("Please select a number before rolling");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (numberSelected === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setNumberSelected(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setNumberSelected(undefined);
    setCurrentDice(1); // Fix: Reset dice to default (1)
  };

  return (
    <main className="pt-10 md:pt-20 px-6 max-w-[1280px] mx-auto min-h-screen flex flex-col animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-10 md:gap-0">
        <TotalScore score={score} />
        <NumberSelector
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice
        rollDice={rollDice}
        currentDice={currentDice}
        resetScore={resetScore}
      />
    </main>
  );
};

export default GamePlay;