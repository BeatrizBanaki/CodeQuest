import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import tears from "../../assets/images/tears.png";
import mousetoy from "../../assets/images/mouse-toy.png";
import poop from "../../assets/images/poop.png";


export default function Result5() {
  const { inputValue } = useContext(ApiContext);
  const caminho = ["obstaculo", "obstaculo", "livre", "obstaculo"];
  const fileiras = 4;
  const espacos = 6;

  const verificarCaminho = (posicao) => {
    if (isNaN(posicao) || posicao < 0 || posicao >= fileiras) {
      return "invalida";
    }
    return caminho[posicao] === "livre" ? "livre" : "bloqueado";
  };

  const resultado = verificarCaminho(parseInt(inputValue));

  return (
    <div className="mt-5 text-center">
      <div className="grid grid-rows-4 gap-2">
        {Array.from({ length: fileiras }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2">
            {Array.from({ length: espacos }).map((_, colIndex) => {
              const isSelected = parseInt(inputValue) === rowIndex;
              const isBlocked = resultado === "bloqueado" && isSelected;
              const isLastColumn = colIndex === espacos - 1;
              const isObstacle = caminho[colIndex] === "obstaculo";

              return (
                <div
                  key={colIndex}
                  className={`w-28 h-20 flex justify-center items-center border border-gray-300 rounded-lg
                    ${!isSelected ? "bg-transparent" :
                      (isSelected && !isBlocked ? "bg-green-400" : "bg-red-400")}
                  `}
                >
                  {isLastColumn && (
                    <img src={mousetoy} alt="Recompensa do gato" className="w-14 h-14" />
                  )}
                  {isBlocked && (colIndex > 0 && colIndex < 5) && (
                    <img src={poop} alt="Obstáculo" className="w-14 h-14" />
                  )}
                  {isSelected && colIndex === 0 && <img src={tears} alt="Gatinho" className="w-14 h-14" />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-lg">
        {resultado === "invalida" && (
          <span className="text-orange-500">Posição inválida! Digite um valor entre 0 e 3.</span>
        )}
        {resultado === "livre" && (
          <span className="text-green-500">Caminho livre! O gato percorreu com sucesso.</span>
        )}
        {resultado === "bloqueado" && (
          <span className="text-red-500">Caminho bloqueado! O gato encontrou um obstáculo.</span>
        )}
      </div>
    </div>
  );
}
