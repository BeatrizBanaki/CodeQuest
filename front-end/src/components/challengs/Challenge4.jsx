import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ApiContext } from '../../context/ApiContext'; // Contexto para compartilhar estado

export default function Challenge4() {
  const { setInputValue } = useContext(ApiContext); // Função para enviar input para Result4
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setInputValue(input); // Passa o input do usuário para o contexto
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        O gato tem dois amigos cachorros que devem ser alimentados. Complete a lógica para movimentar os cachorros e alimentar corretamente!
      </p>
      <p className="text-white mt-5">Complete com os índices desejados para mover os cachorros:</p>

      <div className="mt-5 text-center">
        <div className="font-mono text-left inline-block bg-gray-100 p-5 rounded-lg relative">
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
            console.log(<span className="text-green-500">"Alimentando o ${"{"}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="array[i]"
              className="w-20 text-center border border-gray-300 rounded"
            />
            <span className="text-green-500">{"}"}"</span>);
          </p>
          <p className="pl-5">{"}"}</p>
          <p>{"}"}</p>
          <br />
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
