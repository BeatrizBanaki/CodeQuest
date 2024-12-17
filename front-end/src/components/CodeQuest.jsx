import { useState } from "react";
import Code from './challengs/Code';
import Result from './results/Result';
import Result1 from './results/Result1';
import Result2 from './results/Result2';
import Result3 from './results/Result3';
import Result4 from './results/Result4';
import Result5 from './results/Result5';
import Result6 from './results/Result6';
import Challenge1 from './challengs/Challenge1';
import Challenge2 from './challengs/Challenge2';
import Challenge3 from './challengs/Challenge3';
import Challenge4 from './challengs/Challenge4';
import Challenge5 from './challengs/Challenge5';
import Challenge6 from './challengs/Challenge6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CodeQuest() {
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challenges = [
    {
      component: <Challenge2 />,
      result: <Result2 />
    },

    {
      component: <Challenge1 />,
      result: <Result1 />
    },

    {
      component: <Challenge5 />,
      result: <Result5 />
    },

    {
      component: <Challenge6 />,
      result: <Result6 />
    },

    {
      component: <Challenge4 />,
      result: <Result4 />
    },

    {
      component: <Challenge3 />,
      result: <Result3 />
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
          <div className="flex gap-3 mt-10 justify-center">
            <button
              onClick={goToPreviousChallenge}
              disabled={currentChallenge === 0}
              className={`px-4 py-2 bg-gray-200 rounded-md duration-500 shadow-lg ${currentChallenge === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
                }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
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
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </Code>
      <Result>{challenges[currentChallenge].result}</Result>
    </div>
  );
}
