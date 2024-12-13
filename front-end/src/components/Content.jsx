import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    const [contents, setContents] = useState([]); // Lista de conteúdos
    const [selectedContent, setSelectedContent] = useState(null); // Conteúdo selecionado
    const [explanations, setExplanations] = useState([]); // Explicações do conteúdo selecionado
    const [loading, setLoading] = useState(true); // Controle de carregamento


    // Carregar conteúdos ao montar o componente
    useEffect(() => {
        fetch('/api/contents')
            .then((response) => response.json())
            .then((data) => {
                setContents(data); // Salvar os conteúdos no estado
                setLoading(false); // Parar o carregamento
            })
            .catch((error) => {
                console.error('Erro ao carregar conteúdos:', error);
                setLoading(false);
            });
    }, []);

    // Função para carregar um conteúdo pelo ID
    const loadContent = (id) => {
        setLoading(true);

        // Buscar o conteúdo
        fetch(`/api/contents/${id}`)
            .then((response) => response.json())
            .then((content) => {
                setSelectedContent(content); // Salvar o conteúdo selecionado

                // Buscar explicações relacionadas ao conteúdo
                return fetch(`/api/explanations/content/${id}`);
            })
            .then((response) => response.json())
            .then((explanations) => {
                setExplanations(explanations); // Salvar as explicações
                setLoading(false); // Parar o carregamento
            })
            .catch((error) => {
                console.error('Erro ao carregar conteúdo ou explicações:', error);
                setLoading(false);
            });
    };

    // Renderizar enquanto carrega
    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {/* Lista de conteúdos */}
            <div style={{ flex: '1', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                <h2>Conteúdos</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {contents.map((content) => (
                        <li key={content.id}>
                            <button
                                onClick={() => loadContent(content.id)}
                                style={{
                                    backgroundColor: selectedContent?.id === content.id ? '#ccc' : 'transparent',
                                    border: 'none',
                                    padding: '10px',
                                    textAlign: 'left',
                                    width: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                {content.name}
                            </button>
                        </li>
                    ))}
                    <li>
                        <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
                            Desafios
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Detalhes do conteúdo */}
            <div style={{ flex: '2' }}>
                {selectedContent ? (
                    <>
                        <h2>{selectedContent.name}</h2>
                        <p>{selectedContent.explanation}</p>
                        <pre>
                            <code>{selectedContent.example}</code>
                        </pre>

                        <h3>Explicações Relacionadas</h3>
                        <ul>
                            {explanations.map((explanation) => (
                                <li key={explanation.id}>
                                    <h4>{explanation.title}</h4>
                                    <p>{explanation.explanation}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Selecione um conteúdo para ver mais detalhes.</p>
                )}
            </div>
        </div>
    );
};

export default Content;
