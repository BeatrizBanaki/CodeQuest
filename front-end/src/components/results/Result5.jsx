import { useState, useEffect, useContext } from "react";
import { ApiContext } from '../../context/ApiContext';
import pitbull from "../../assets/images/pitbull.png";
import schnauzer from "../../assets/images/schnauzer.png";
import food from "../../assets/images/pet-food.png";

export default function Result4() {
  const { inputValue } = useContext(ApiContext);
  const [positions, setPositions] = useState([0, 1]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!inputValue) return;

    const newPositions = [0, 1];

    if (inputValue === "array[0]") {
      newPositions[0] = 5;
    } else if (inputValue === "array[1]") {
      newPositions[1] = 5;
    } else if (inputValue === "array[i]") {
      newPositions[0] = 5;
      newPositions[1] = 5;
    } else {
      setFeedback("Entrada inválida. Tente array[0], array[1], ou array[i].");
      return;
    }

    setPositions(newPositions);
    setFeedback(
      inputValue === "array[i]"
        ? "Alimentando os dois cachorros, parabéns!"
        : inputValue === "array[0]"
          ? "Alimentando o Pitbull"
          : "Alimentando o Schnauzer"
    );
  }, [inputValue]);

  return (
    <div className="mt-5">
      <div className="flex justify-center items-center gap-2">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`w-28 h-20 flex justify-center items-center border border-gray-300 bg-transparent rounded-lg bg-gray-200`}
          >
            {index === 5 && positions[0] === 5 && positions[1] === 5 && (
              <div className="flex">
                <img src={pitbull} alt="Pitbull" className="w-14 h-14" />
                <img src={schnauzer} alt="Schnauzer" className="w-14 h-14" />
              </div>
            )}
            {index === positions[0] && !(index === 5 && positions[1] === 5) && (
              <img src={pitbull} alt="Pitbull" className="w-14 h-14" />
            )}
            {index === positions[1] && !(index === 5 && positions[0] === 5) && (
              <img src={schnauzer} alt="Schnauzer" className="w-14 h-14" />
            )}
            {index === 5 && !(positions[0] === 5 && positions[1] === 5) && (
              <img src={food} alt="Lata de ração" className="w-14 h-14" />
            )}
          </div>
        ))}
      </div>
      {feedback && (
        <p className={`text-lg text-center mt-3 ${feedback.includes("parabéns") ? "text-green-500" : "text-red-500"}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}
