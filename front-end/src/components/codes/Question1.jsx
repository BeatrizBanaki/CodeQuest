import { useState, useContext } from "react"
import { ApiContext } from '../../context/ApiContext';

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
      <p className="text-white">Bem-vindo ao Code Quest, um jogo interativo onde você ajuda um gato esperto a superar desafios e alcançar seus objetivos escrevendo códigos de programação! Aprenda e pratique lógica de programação de forma divertida enquanto explora diferentes missões com o nosso protagonista felino.</p>
      <p className="text-white mt-5">O gato precisa alcançar a latinha de comida, localizada à direita. Preencha a lacuna com o número correto de passos para que o gato chegue até a latinha.</p>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div
          style={{
            fontFamily: "monospace",
            textAlign: "left",
            display: "inline-block",
            background: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p>
            <span style={{ color: "blue" }}>for</span> (<span style={{ color: "orange" }}>let</span>{" "}
            i = 0; i &lt;{" "}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="___"
              style={{
                width: "40px",
                fontFamily: "monospace",
                fontSize: "16px",
                padding: "2px",
                textAlign: "center",
              }}
            />
            ; i++) {"{"}
          </p>
          <p style={{ paddingLeft: "20px" }}>moverGato("direita", {inputValue})</p>
          <p>{"}"}</p>
        </div>
        <div>
          <button
            onClick={handleMove}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Executar
          </button>
        </div>
      </div>
    </div>
  )
}