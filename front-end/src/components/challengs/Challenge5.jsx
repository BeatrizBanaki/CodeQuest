import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ApiContext } from '../../context/ApiContext';
import { Link } from 'react-router-dom';

export default function Challenge5() {
  const { setInputValue } = useContext(ApiContext);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setInputValue(input);
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        O gato está tentando chegar ao seu brinquedo, mas existem obstáculos no caminho. Sua tarefa é ajudá-lo a encontrar o caminho livre.
        <ul className="list-disc ml-8">
          <li>
            Para verificar um caminho, você deve informar a posição do array a ser checada.
          </li>
          <li>
            Use a lógica para percorrer o array e descobrir o caminho livre.
          </li>
        </ul>
      </p>
      <p className="text-white mt-5">Descubra a posição correta e ajude o gato a chegar ao seu brinquedo:</p>
      <div className="mt-5 text-center">
        <div className="font-mono text-left inline-block bg-gray-100 rounded-lg relative">
          <div className="pt-5 px-5">
            <p>
              <span className="text-blue-500">let</span> caminho = ["obstaculo", "obstaculo", "livre", "obstaculo"];
            </p>
            <p>
              <span className="text-blue-500">function</span> caminhoLimpo(array) {"{"}
            </p>
            <p className="pl-5">
              <span className="text-blue-500">let</span> posicao =
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="0 - 3"
                className="w-16 text-center border border-gray-300 rounded"
              />
              ;
            </p>
            <p className="pl-5">
              <span className="text-blue-500">if</span> (array[posicao] === <span className="text-orange-500">"livre"</span>) {"{"}
            </p>
            <p className="pl-10">
              <span className="text-purple-500">return</span> "Caminho livre!";
            </p>
            <p className="pl-5">{"} else {"}</p>
            <p className="pl-10">
              <span className="text-purple-500">return</span> "Caminho bloqueado!";
            </p>
            <p className="pl-5">{"}"}</p>
            <p>{"}"}</p>
          </div>
          <div className="w-full flex justify-end items-center pr-2 pb-1">
            <Link to="/content" className="text-blue-500 duration-500">
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
