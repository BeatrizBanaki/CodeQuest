import { useState, useContext } from "react";
import { ApiContext } from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Challenge2() {
  const { inputValue, setInputValue, feedback, setFeedback } = useContext(ApiContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setFeedback(inputValue.trim() === '"azul"' ? "Gatinho Feliz!" : "Gatinho Triste.");
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        O gato precisa escolher um lugar azul para dormir. Ele ignora qualquer lugar que não seja azul.
      </p>
      <p className="text-white mt-5">
        Complete o código para verificar a cor:
      </p>

      <div className="text-center mt-10 w-full">
        <div className="font-mono text-left inline-block bg-gray-100 p-5 rounded-lg">
          <p>
            <span className="text-blue-500">function</span> escolherLugar(cor) {"{"}
          </p>
          <p className="pl-5">
            <span className="text-blue-500">if</span> (cor ==={" "}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="___"
              className="w-10 font-mono text-base p-1 text-center border border-gray-300 rounded"
            />
            ) {"{"}
          </p>
          <p className="pl-10">return "Gatinho Feliz!";</p>
          <p className="pl-5">{"}"} else {"{"}</p>
          <p className="pl-10">return "Gatinho Triste.";</p>
          <p className="pl-5">{"}"}</p>
          <p>{"}"}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-5 py-2 mt-5 text-sm border-1 hover:bg-purple-600 hover:text-white text-purple-500 bg-white rounded duration-500 shadow-lg"
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
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
