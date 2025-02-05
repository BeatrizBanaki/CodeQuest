import { useState, useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import smile from "../../assets/images/smile.png";
import mousetoy from "../../assets/images/mouse-toy.png";
import bone from "../../assets/images/bone.png";
import catToy from "../../assets/images/cat-toy.png";

export default function Result6() {
  const { inputValue } = useContext(ApiContext);
  const brinquedos = ["bola", "ratinho", "bola", "osso", "bola", "osso"];
  const contarBrinquedos = (tipo) => {
    let contador = 0;
    for (let i = 0; i < brinquedos.length; i++) {
      if (brinquedos[i] === tipo) {
        contador++;
      }
    }
    return contador;
  };

  const respostaUsuario = inputValue.toLowerCase();
  const contagem = contarBrinquedos(respostaUsuario);

  let mensagem = "";
  let corMensagem = "";

  switch (true) {
    case !inputValue:
      mensagem = "";
      corMensagem = "";
      break;

    case respostaUsuario === "bola":
      mensagem = `Tem ${contagem} bolas, parabéns!`;
      corMensagem = "text-green-500";
      break;

    case respostaUsuario === "ratinho":
      mensagem = `Tem ${contagem} ratinho, mas não são bolas.`;
      corMensagem = "text-yellow-500";
      break;

    case respostaUsuario === "osso":
      mensagem = `Tem ${contagem} ossos, mas não são bolas.`;
      corMensagem = "text-yellow-500";
      break;

    default:
      mensagem = `Não existe esse brinquedo ou você digitou errado.`;
      corMensagem = "text-red-500";
      break;
  }

  return (
    <div className="pt-10 text-center">
      <div className="flex gap-2 mt-5">
        {brinquedos.map((brinquedo, index) => {
          let imagem;
          switch (brinquedo) {
            case "bola":
              imagem = catToy;
              break;
            case "ratinho":
              imagem = mousetoy;
              break;
            case "osso":
              imagem = bone;
              break;
            default:
              imagem = poop;
              break;
          }

          return (
            <div key={index} className="flex justify-center items-center w-28 h-20 border border-gray-300 rounded-lg">
              <img src={imagem} alt={brinquedo} className="w-14 h-14" />
            </div>
          );
        })}
      </div>
      <div className={`mt-5 text-lg text-center ${corMensagem}`}>
        {mensagem}
      </div>
    </div>
  );
}
