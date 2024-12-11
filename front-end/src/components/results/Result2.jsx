import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import upset from "../../assets/images/upset.png";
import shy from "../../assets/images/shy.png";
import worry from "../../assets/images/worry.png";
import smirk from "../../assets/images/smirk.png";
import cool from "../../assets/images/cool.png";
import party from "../../assets/images/party.png";
import sleep from "../../assets/images/sleep.png";

export default function Result2() {
  const { currentPosition, feedback, inputValue } = useContext(ApiContext);

  const bgColor = (position) => {
    switch (position) {
      case 0:
        return "bg-orange-500";
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-green-500";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-yellow-500";
      case 5:
        return "bg-purple-500";
      default:
        return null;
    }
  };

  const catMoodPosition = (position) => {
    if (position === 3) {
      return <img src={sleep} />
    } else {
      return <img src={smirk} />
    }
  }

  const spaces = ["laranja", "vermelho", "verde", "azul", "amarelo", "roxo"];

  return (
    <div className="mt-5">
      <div className="flex justify-center items-center gap-2">
        {spaces.map((color, index) => (
          <div
            key={index}
            className={`w-28 h-20 flex justify-center items-center border border-gray-300 rounded-lg relative ${bgColor(index)}`}
          >
            {index === currentPosition && (
              <div className="w-16 h-16">{catMoodPosition(currentPosition)}</div>
            )}
          </div>
        ))}
      </div>
      {feedback && (
        <p
          className={`text-lg text-center mt-3 ${feedback.includes("feliz") ? "text-green-500" : "text-red-500"
            }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
