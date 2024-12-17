import { useState, useContext } from "react";
import { ApiContext } from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Challenge2() {
  const {
    inputValue,
    setInputValue,
    setCurrentPosition,
    setFeedback,
  } = useContext(ApiContext);

  const spaces = ["laranja", "vermelho", "verde", "azul", "amarelo", "roxo"];

  const handleSubmit = () => {
    const index = spaces.indexOf(inputValue.toLowerCase());
    if (index !== -1) {
      setCurrentPosition(index);
      if (index === 3) {
        setFeedback("Gatinho feliz! Ele pode dormir agora!");
      } else {
        setFeedback("Gatinho ainda não encontrou o lugar azul.");
      }
    } else {
      setFeedback("Cor inválida! Tente novamente.");
    }
  };

  return (
    <div className="pt-10">
      <p className="text-white">Bem-vindo ao Code Quest, um jogo interativo onde você ajuda um gato esperto a superar desafios e alcançar seus objetivos escrevendo códigos de programação!</p>
      <p className="text-white mt-5">
        O gato está procurando o lugar perfeito para dormir.
      </p>
      <ul className="list-disc ml-8 text-white">
        <li>
          Complete o código no espaço indicado para verificar corretamente as cores e ajudar o gato a encontrar o lugar ideal para descansar.
        </li>
      </ul>
      <p className="text-white mt-5">Descubra a lógica correta e ajude o gato a encontrar o lugar azul para dormir:</p>

      <div className="text-center mt-10 w-full">
        <div className="font-mono text-left inline-block bg-gray-100 rounded-lg">
          <div className="pt-5 px-5">
            <p>
              <span className="text-blue-500">function</span>{" "}
              escolherLugar(cor) {"{"}
            </p>
            <p className="pl-5">
              <span className="text-blue-500">if</span> (cor ==={" "}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-28 font-mono text-base p-1 text-center border border-gray-300 rounded"
              />
              ) {"{"}
            </p>
            <p className="pl-10">return "Gatinho dormindo!";</p>
            <p className="pl-5">{"}"} else {"{"}</p>
            <p className="pl-10">return "Gatinho acordado.";</p>
            <p className="pl-5">{"}"}</p>
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
            onClick={handleSubmit}
            className="px-5 py-2 mt-5 text-sm border-1 hover:bg-purple-600 hover:text-white text-purple-500 bg-white rounded duration-500 shadow-lg"
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
    </div>
  );
}
