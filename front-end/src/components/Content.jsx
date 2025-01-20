import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const Content = () => {
  const [contents, setContents] = useState([]); // Lista de conteúdos
  const [selectedContent, setSelectedContent] = useState(null); // Conteúdo selecionado
  const [explanations, setExplanations] = useState([]); // Explicações do conteúdo selecionado
  const [videoContent, setVideoContent] = useState(null); // Explicações do conteúdo selecionado
  const [loading, setLoading] = useState(true); // Controle de carregamento

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/contents`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar conteúdos:', error);
        setLoading(false);
      });
  }, []);

  const loadContent = (id) => {
    setLoading(true);

    fetch(`${config.apiBaseUrl}/contents/${id}`)
      .then((response) => response.json())
      .then((content) => {
        setSelectedContent(content);
        setVideoContent(`${config.apiBaseUrl}/contents/video/${id}`);

        return fetch(`${config.apiBaseUrl}/explanations/content/${id}`);
      })
      .then((response) => response.json())
      .then((explanations) => {
        setExplanations(explanations);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar conteúdo ou explicações:', error);
        setLoading(false);
      });
  };

  // Função para substituir \n por <br />
  const formatText = (text) => {
    return text.split("\\n").map((line, index) => (
      <span key={index}>
        {line}
        <br></br>
      </span>
    ));
  };

  // Formatação do código para garantir que ele exiba corretamente
  const formatCode = (code) => {
    return code.split("\\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-light">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-opacity-50"></div>
        {/* Texto */}
        <p className="mt-4 text-purple-700 font-semibold text-lg">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="w-screen flex flex-row h-screen bg-gradient-light">
      {/* Lista de conteúdos */}
      <aside className="w-1/4 p-4 bg-gradient-dark text-white shadow-lg flex flex-col">
        <div className="w-full flex justify-center mb-10">
          <div className="title-wrapper">
            <h1 className="sweet-title">
              <span data-text="Code">Code</span>
              <span data-text="Quest">Quest</span>
            </h1>
          </div>
        </div>

        <ul className="w-4/4 space-y-3 flex-grow overflow-y-auto">
          {contents.map((content) => (
            <li key={content.id}>
              <button
                onClick={() => loadContent(content.id)}
                className={`card ${selectedContent?.id === content.id ? 'selected' : ''}`}
              >
                {content.name}
              </button>
            </li>
          ))}
        </ul>
        <Link to="/" className="link-desafios mt-6">
          Desafios
        </Link>
      </aside>

      {/* Detalhes do conteúdo */}
      <section className="w-3/4 p-6 bg-white shadow-lg overflow-y-auto">
        {selectedContent ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">{selectedContent.name}</h2>

            <div className="video-container">
              <video width="560" height="315" controls>
                <source src={videoContent} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>



            <p className="mb-4">{formatText(selectedContent.explanation)}</p>
            <div className="code-block mb-6">
              <pre className="bg-gray-800 p-4 text-white rounded-lg">
                <code>{formatCode(selectedContent.example)}</code>
              </pre>
            </div>

            <h3 className="text-xl font-bold mb-2 text-purple-700">Explicações Relacionadas</h3>
            <ul className="space-y-3">
              {explanations.map((explanation) => (
                <li key={explanation.id} className="p-3 bg-gray-100 rounded-lg shadow">
                  <h4 className="text-lg font-semibold text-purple-600">{explanation.title}</h4>
                  <p>{formatText(explanation.explanation)}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-600">Selecione um conteúdo para ver mais detalhes.</p>
        )}
      </section>
    </div>
  );
};

export default Content;
