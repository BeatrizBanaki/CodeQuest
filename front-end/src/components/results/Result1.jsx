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
      <div className="mt-5">
        <div className="flex justify-center items-center gap-2"
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-28 h-20 flex justify-center items-center border border-gray-300 rounded-lg relative">
              {index === currentPosition && (
                <div className="w-16 h-16">
                  {catMoodPosition(currentPosition)}
                </div>
              )}
              {index === 5 && (
                <div className="w-16 h-16">
                  <img src={food} alt="comida de gato" />
                </div>
              )}
            </div>
          ))}
        </div>
        {feedback && (
          <p className={`text-lg text-center mt-3 ${feedback.includes("Sucesso") ? "text-green-500" : "text-red-500"
            }`}>
            {feedback}
          </p>
        )}
      </div >
    </>
  )
}