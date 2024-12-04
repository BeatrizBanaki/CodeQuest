import { useState, useContext } from "react"
import { ApiContext } from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


export default function Question1() {
  const { text, setText,
    inputValue, setInputValue,
    currentPosition, setCurrentPosition,
    feedback, setFeedback } = useContext(ApiContext)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMove = () => {
    const steps = parseInt(inputValue, 10);

    if (isNaN(steps) || steps < 0 || steps > 5) {
      setFeedback("Tente novamente: insira um número entre 0 e 5.");
      return;
    }

    setFeedback("");
    let position = 0;

    for (let i = 0; i < steps; i++) {
      position += 1;
    }

    setCurrentPosition(position);

    if (position === 5) {
      setFeedback("Sucesso! O gato chegou à tigela de comida!");
    } else {
      setFeedback("Tente novamente! O gato ainda não chegou à tigela.");
    }

  };

  return (
    <div className="pt-10">
      <p className="text-white">Bem-vindo ao Code Quest, um jogo interativo onde você ajuda um gato esperto a superar desafios e alcançar seus objetivos escrevendo códigos de programação!</p>
      <p className="text-white mt-5">O gato precisa alcançar a latinha de comida, localizada à direita. Preencha a lacuna com o número correto de passos para que o gato chegue até a latinha.</p>



      <div className="text-center mt-24 w-full" >



        <div className="font-mono text-left inline-block bg-gray-100 p-5 rounded-lg">
          <p>
            <span className="text-blue-500">for</span>(
            <span className="text-orange-500">left</span> i= 0; i &lt;
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="___"
              className="w-10 font-mono text-base p-1 text-center border border-gray-300 rounded"
            />
            ; i++) {"{"}
          </p>
          <p className="pl-5">moverGato("direita", {inputValue})</p>
          <p>{"}"}</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleMove}
            className="px-5 py-2 mt-5 text-sm border-1 hover:bg-purple-600 hover:text-white text-purple-500 bg-white rounded duration-500 shadow-lg"
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>


      </div>



    </div>
  )
}

