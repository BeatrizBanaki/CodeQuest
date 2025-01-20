import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { ApiContext } from "../../context/ApiContext";
import { Link } from "react-router-dom";

export default function Challenge6() {
  const { setInputValue } = useContext(ApiContext);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setInputValue(input.trim());
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        O gato tem vários brinquedos espalhados. Sua tarefa é contar quantos são bolas.
        <ul className="list-disc ml-8">
          <li>
            Complete o código no espaço indicado para identificar corretamente os brinquedos.
          </li>
        </ul>
      </p>
      <p className="text-white mt-5">Digite o nome do brinquedo correto e veja o resultado:</p>
      <div className="mt-5 text-center">
        <div className="font-mono text-left inline-block bg-gray-100 rounded-lg relative">
          <div className="pt-5 px-5">
            <p>
              <span className="text-blue-500">let</span> brinquedos = ["bola", "ratinho", "bola", "osso", "bola", "osso"];
            </p>
            <p>
              <span className="text-blue-500">function</span> contarBolas(array) {"{"}
            </p>
            <p className="pl-5">
              <span className="text-blue-500">let</span> contador = 0;
            </p>
            <p className="pl-5">
              <span className="text-blue-500">for</span> (<span className="text-blue-500">let</span> i = 0; i {"<"} array.length; i++) {"{"}
            </p>
            <p className="pl-10">
              <span className="text-blue-500">if</span> (array[i] ==={" "}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='bola'
                className="w-24 text-center border border-gray-300 rounded"
              />
              ) {"{"}
            </p>
            <p className="pl-14">contador++;</p>
            <p className="pl-10">{"}"}</p>
            <p className="pl-5">{"}"}</p>
            <p className="pl-5">
              <span className="text-purple-500">return</span> contador;
            </p>
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
