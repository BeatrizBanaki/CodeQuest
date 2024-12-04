import { useState } from "react";
import Code from './challengs/Code';
import Result from './results/Result';
import Challenge1 from './challengs/Challenge1';
import Result1 from './results/Result1';

export default function CodeQuest() {
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challenges = [
    {
      component: <Challenge1 />,
      result: <Result1 />
    }
  ];

  const goToNextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge((prev) => prev + 1);
    }
  };

  const goToPreviousChallenge = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge((prev) => prev - 1);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <Code>
        <div>
          {challenges[currentChallenge].component}
          <div className="flex gap-3 mt-5 justify-center">
            <button
              onClick={goToPreviousChallenge}
              disabled={currentChallenge === 0}
              className={`px-4 py-2 bg-gray-200 rounded-md duration-500 shadow-lg ${currentChallenge === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
                }`}
            >
              Voltar
            </button>
            <span className=" flex items-center text-gray-700 font-medium text-sm ">
              Level {currentChallenge + 1} de {challenges.length}
            </span>

            <button
              onClick={goToNextChallenge}
              disabled={currentChallenge === challenges.length - 1}
              className={`px-4 py-2 bg-gray-200 rounded-md duration-500 shadow-lg ${currentChallenge === challenges.length - 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
                }`}
            >
              Avançar
            </button>
          </div>
        </div>
      </Code>
      <Result>{challenges[currentChallenge].result}</Result>
    </div>
  );
}
