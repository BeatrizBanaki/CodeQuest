import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import worry from "../../assets/images/worry.png";
import smirk from "../../assets/images/smirk.png";
import smile2 from "../../assets/images/smile2.png";
import hearts from "../../assets/images/hearts.png";
import hug from "../../assets/images/hug.png";

export default function Result3() {
  const { feedback, inputValue } = useContext(ApiContext);
  const [localPosition1, setLocalPosition1] = useState(0);
  const [localPosition2, setLocalPosition2] = useState(5);
  const areAdjacent =
    Math.abs(localPosition1 - localPosition2) === 1 &&
    feedback.includes("Parabéns");

  useEffect(() => {
    const [pos1, pos2] = inputValue.split(",").map(Number);

    if (!isNaN(pos1) && pos1 >= 0 && pos1 < 6) {
      setLocalPosition1(pos1);
    }
    if (!isNaN(pos2) && pos2 >= 0 && pos2 < 6) {
      setLocalPosition2(pos2);
    }
  }, [inputValue]);

  return (
    <>
      <div className="mt-5">
        <div className="flex justify-center items-center gap-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`w-28 h-20 flex justify-center items-center border border-gray-300 bg-transparent rounded-lg bg-gray-200`}
            >
              {areAdjacent ? (
                <>
                  {index === localPosition1 && (
                    <img src={hearts} alt="Gato 1 com coração" className="w-16 h-16" />
                  )}
                  {index === localPosition2 && (
                    <img src={hug} alt="Gato 2 sorrindo" className="w-16 h-16" />
                  )}
                </>
              ) : (
                <>
                  {index === localPosition1 && (
                    <img src={smirk} alt="Gato 1" className="w-16 h-16" />
                  )}
                  {index === localPosition2 && (
                    <img src={smile2} alt="Gato 2" className="w-16 h-16" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        {feedback && (
          <p
            className={`text-lg text-center mt-3 ${feedback.includes("Parabéns") ? "text-green-500" : "text-red-500"
              }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </>
  );
}
