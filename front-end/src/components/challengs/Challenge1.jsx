import { useState, useContext, useEffect } from "react"
import { ApiContext } from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Challenge1() {
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

  useEffect(() => {
    setInputValue("")
  }, [])

  return (
    <div className="pt-10">
      <p className="text-white mt-5">O gato está tentando alcançar sua latinha de comida, que está localizada à direita. Para que o gato chegue até a latinha, você precisa preencher o código com o número correto de passos.</p>
      <ul className="list-disc ml-8 text-white">
        <li>
          Complete o código no espaço indicado e ajude o gato a chegar até sua refeição.
        </li>
      </ul>
      <p className="text-white mt-5">Descubra a lógica correta e ajude o gato a alcançar a latinha de comida à direita:</p>
      <div className="text-center mt-10 w-full" >
        <div className="font-mono text-left inline-block bg-gray-100 rounded-lg">
          <div className="pt-5 px-5">
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
          <div className="w-full flex justify-end items-center pr-2 pb-1">
            <Link to="/content" className={`text-blue-500 duration-500"
                }`}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </Link>
          </div>
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

