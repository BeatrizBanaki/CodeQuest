import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Challenge3() {
  const { inputValue, setInputValue, feedback, setFeedback } = useContext(ApiContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const [pos1, pos2] = inputValue.split(",").map(Number);
    const array = Array(6).fill("vazio");

    if (pos1 >= 0 && pos1 < 6 && pos2 >= 0 && pos2 < 6) {
      array[pos1] = "gato";
      array[pos2] = "gato";

      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === "gato" && array[i + 1] === "gato") {
          setFeedback("Gatos juntos! Parabéns!");
          return;
        }
      }
      setFeedback("Tente novamente!");
    } else {
      setFeedback("Posições inválidas. Use valores entre 0 e 5.");
    }
  };

  return (
    <div className="pt-10">
      <p className="text-white">
        Verifique se dois gatos estão em posições consecutivas no array. Você pode mover cada gato para qualquer espaço, escolhendo os índices correspondentes.Complete a lógica para verificar se eles estão lado a lado.
      </p>
      <p className="text-white mt-5">Complete com os índices das posições desejadas:</p>

      <div className="mt-5 text-center">
        <div className="font-mono text-left inline-block bg-gray-100 p-5 rounded-lg">
          <p>
            <span className="text-blue-500">function</span> gatosJuntos(array, pos1, pos2) {"{"}
          </p>
          <p className="pl-5">array[pos1] = "gato";</p>
          <p className="pl-5">array[pos2] = "gato";</p>
          <p className="pl-5">
            <span className="text-blue-500">for</span> (let i = 0; i &lt; array.length - 1; i++) {"{"}
          </p>
          <p className="pl-10">
            <span className="text-blue-500">if</span> (array[i] === "gato" && array[i + 1] === "gato") {"{"}
          </p>
          <p className="pl-15">return "Gatos juntos! Parabéns!";</p>
          <p className="pl-10">{"}"}</p>
          <p className="pl-5">{"}"}</p>
          <p className="pl-5">return "Tente novamente!";</p>
          <p>{"}"}</p>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ex: 1,2"
          className="mt-5 block w-28 mx-auto font-mono text-center border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmit}
          className="px-5 py-2 mt-5 text-sm border-1 hover:bg-purple-600 hover:text-white text-purple-500 bg-white rounded duration-500 shadow-lg"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
      {feedback && (
        <p
          className={`text-lg text-center mt-3 ${feedback.includes("Parabéns") ? "text-green-500" : "text-red-500"}`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
