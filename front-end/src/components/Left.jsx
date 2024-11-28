import { useRef, useContext, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import upset from '../assets/images/upset.png'
import shy from '../assets/images/shy.png'
import worry from '../assets/images/worry.png'
import smirk from '../assets/images/smirk.png'
import cool from '../assets/images/cool.png'
import food from '../assets/images/canned-food.png'
import party from '../assets/images/party.png'
export default function Left() {
  const { text, setText } = useContext(ApiContext);
  const [inputValue, setInputValue] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMove = () => {
    const steps = parseInt(inputValue, 10);

    if (isNaN(steps) || steps <= 0 || steps > 5) {
      setFeedback("Tente novamente: insira um número entre 1 e 5.");
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

  const catMoodPosition = (valor) => {
    switch (valor) {
      case 0:
        return <img src={upset} />
      case 1:
        return <img src={worry} />
      case 2:
        return <img src={smirk} />
      case 3:
        return <img src={shy} />
      case 4:
        return <img src={cool} />
      case 5:
        return <img src={party} />
      default:
        break;
    }
  }

  return (
    <div className="w-full h-full bg-gradient-orange p-10">
      <h1 className="title text-3xl font-bold">Code <br /> Quest</h1>
      <p className="text-white">Lorem ipsum dolor sit amet. Non molestiae porro quo necessitatibus corporis eum debitis doloremque. Quo totam dolor qui galisum iusto et quae impedit ut illo fugit. Et sequi exercitationem in enim placeat est similique distinctio eum officia dicta non magni sunt. </p>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Complete o Código!</h1>
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
            Executar Código
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                {index === currentPosition && (
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    {catMoodPosition(currentPosition)}
                  </div>
                )}
                {index === 5 && (
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <img src={food} alt="comida de gato" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {feedback && (
            <p style={{ fontSize: "18px", color: feedback.includes("Sucesso") ? "green" : "red" }}>
              {feedback}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
