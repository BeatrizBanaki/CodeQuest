import { useContext } from "react"
import { ApiContext } from '../../context/ApiContext';
import upset from '../../assets/images/upset.png'
import shy from '../../assets/images/shy.png'
import worry from '../../assets/images/worry.png'
import smirk from '../../assets/images/smirk.png'
import cool from '../../assets/images/cool.png'
import food from '../../assets/images/canned-food.png'
import party from '../../assets/images/party.png'


export default function Result1() {
  const { inputValue, setInputValue,
    currentPosition, setCurrentPosition,
    feedback, setFeedback } = useContext(ApiContext)

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
    <>
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
                width: "160px",
                height: "80px",
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
                    width: "60px",
                    height: "60px",
                  }}
                >
                  {catMoodPosition(currentPosition)}
                </div>
              )}
              {index === 5 && (
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <img src={food} alt="comida de gato" />
                </div>
              )}
            </div>
          ))}
        </div>
        {feedback && (
          <p style={{ fontSize: "18px", textAlign: 'center', marginTop: '15px', color: feedback.includes("Sucesso") ? "green" : "red" }}>
            {feedback}
          </p>
        )}
      </div >
    </>
  )
}