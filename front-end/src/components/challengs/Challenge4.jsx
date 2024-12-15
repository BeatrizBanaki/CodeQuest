import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ApiContext } from '../../context/ApiContext';
import { Link } from 'react-router-dom';

export default function Challenge4() {
  const { setInputValue } = useContext(ApiContext);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setInputValue(input);
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        Você tem dois cachorros para alimentar, mas eles estão em posições diferentes no caminho. A comida está na última posição (posição 5), e sua tarefa é movê-los até lá.
        <ul className="list-disc ml-8">
          <li>
            Para mover um cachorro, você deve informar a posição atual dele no caminho.
          </li>
          <li>
            Para alimentar os dois cachorros ao mesmo tempo, você deve percorrer todo o array para descobrir como movê-los juntos.
          </li>
        </ul>
      </p>
      <p className="text-white mt-5">Descubra a lógica correta e alimente seus amigos peludos:</p>
      <div className="mt-5 text-center">
        <div className="font-mono text-left inline-block bg-gray-100 rounded-lg relative">
          <div className="pt-5 px-5">
            <p>
              <span className="text-blue-500">let</span> amigos = ["cachorro1", "cachorro2"];
            </p>
            <p>
              <span className="text-blue-500">function</span> alimentarAmigos(array) {"{"}
            </p>
            <p className="pl-5">
              <span className="text-blue-500">for</span> (let i = 0; i &lt; array.length; i++) {"{"}
            </p>
            <p className="pl-10">
              console.log(<span className="text-orange-500">"Alimentando o ${"{"}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="array[i]"
                className="w-20 text-center border border-gray-300 rounded"
              />
              <span className="text-orange-500">{"}"}"</span>);
            </p>
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
    </div >
  );
}
