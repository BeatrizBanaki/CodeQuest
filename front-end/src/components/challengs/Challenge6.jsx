import { useContext, useState } from 'react';
import { ApiContext } from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Challenge6() {
  const { feedback, setFeedback, setInputValue } = useContext(ApiContext);
  const [pos1, setPos1] = useState("");
  const [pos2, setPos2] = useState("");

  const handleSubmit = () => {
    const position1 = parseInt(pos1, 10);
    const position2 = parseInt(pos2, 10);
    const array = Array(6).fill("vazio");

    if (
      position1 >= 0 &&
      position1 < 6 &&
      position2 >= 0 &&
      position2 < 6 &&
      position1 !== position2
    ) {
      array[position1] = "gato";
      array[position2] = "gato";

      setInputValue(`${position1},${position2}`);

      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === "gato" && array[i + 1] === "gato") {
          setFeedback("Gatos juntos! Parabéns!");
          return;
        }
      }
      setFeedback("Tente novamente!");
    } else {
      setFeedback("Posições inválidas. Use valores entre 0 e 5, e as posições não podem ser iguais.");
    }
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        Verifique se dois gatos estão em posições consecutivas no array. Você pode mover cada gato para qualquer espaço, escolhendo os índices correspondentes. Complete a lógica para verificar se eles estão lado a lado.
      </p>
      <p className="text-white mt-5">Complete com os índices das posições desejadas:</p>

      <div className="mt-5 text-center">
        <div className="font-mono text-left inline-block bg-gray-100 rounded-lg relative">
          <div className="pt-5 px-5">
            <p>
              <span className="text-blue-500">function</span> gatosJuntos(array, pos1, pos2) {"{"}
            </p>
            <p className="pl-5">array[pos1] = "gato";</p>
            <p className="pl-5">array[pos2] = "gato";</p>
            <p className="pl-5">
              <span className="text-blue-500">for</span> (let i = 0; i &lt; array.length - 1; i++) {"{"}
            </p>
            <p className="pl-10">
              <span className="text-blue-500">if</span> (array[
              <input
                type="text"
                value={pos1}
                onChange={(e) => setPos1(e.target.value)}
                placeholder="i"
                className="w-10 text-center border border-gray-300 rounded"
              />
              ] === "gato" && array[
              <input
                type="text"
                value={pos2}
                onChange={(e) => setPos2(e.target.value)}
                placeholder="i+1"
                className="w-10 text-center border border-gray-300 rounded"
              />
              ] === "gato") {"{"}
            </p>
            <p className="pl-15">return "Gatos juntos! Parabéns!";</p>
            <p className="pl-10">{"}"}</p>
            <p className="pl-5">{"}"}</p>
            <p className="pl-5">return "Tente novamente!";</p>
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
