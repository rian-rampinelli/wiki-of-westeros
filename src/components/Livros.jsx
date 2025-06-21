import { useEffect, useState } from 'react';
import axios from 'axios';
import './Livros.css';
import PageLayout from '../layout/PageLayout';
import Citacao from '../api/citacoes';
import { MoonLoader } from 'react-spinners';
export default function Livros() {
    const [selecionadosLivros, setSelecionadosLivros] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        async function pegarLivro() {
            setLoading(true)
            try {
                const response = await axios.get('https://www.anapioficeandfire.com/api/books');

                const descricoes = [
                    {
                        nome: "A Game of Thrones",
                        descricao: "O primeiro livro da série As Crônicas de Gelo e Fogo. Sete reinos lutam pelo controle do Trono de Ferro enquanto forças antigas retornam além da Muralha."
                    },
                    {
                        nome: "A Clash of Kings",
                        descricao: "Com a morte do rei Robert, vários lordes e reis se levantam para reivindicar o trono. Enquanto isso, guerras e traições moldam o futuro de Westeros."
                    },
                    {
                        nome: "A Storm of Swords",
                        descricao: "A guerra continua e alianças são quebradas. Este livro é marcado por eventos chocantes como o Casamento Vermelho e outras grandes reviravoltas."
                    },
                    {
                        nome: "A Feast for Crows",
                        descricao: "Após as guerras, os sobreviventes tentam se reorganizar. Enquanto o caos se instala, surgem novos jogadores no jogo dos tronos."
                    },
                    {
                        nome: "A Dance with Dragons",
                        descricao: "Enquanto Daenerys tenta governar Meereen, Jon Snow enfrenta desafios na Muralha, e Tyrion busca um novo propósito do outro lado do mar."
                    },
                    {
                        nome: "The Hedge Knight",
                        descricao: "Uma história passada cerca de 90 anos antes dos eventos da série principal. Acompanhe Dunk (Ser Duncan, o Alto) e Egg (Aegon Targaryen V) em suas aventuras."
                    },
                    {
                        nome: "The Sworn Sword",
                        descricao: "Continuação de The Hedge Knight. Dunk e Egg enfrentam conflitos entre senhores locais durante um período de relativa paz em Westeros."
                    },
                    {
                        nome: "The Mystery Knight",
                        descricao: "Dunk e Egg participam de um torneio secreto, onde conspirações surgem e ameaçam a estabilidade dos Sete Reinos."
                    },
                    {
                        nome: "The Princess and the Queen",
                        descricao: "Relata a história da 'Dança dos Dragões', uma guerra civil entre Targaryens que quase destruiu a dinastia e seus dragões."
                    },
                    {
                        nome: "The Rogue Prince",
                        descricao: "Prelúdio da Dança dos Dragões, focando na vida do príncipe Daemon Targaryen e nas tensões que levaram à guerra civil."
                    },
                    
                    
                ];

                const livros = [];

                for (let i = 0; i < response.data.length; i++) {
                    const livro = response.data[i];
                    const nomeLivro = livro.name;
                    const dataLivro = livro.released;
                    const paginas = livro.numberOfPages;
                    const descricaoEncontrada = descricoes.find(item => item.nome === nomeLivro);

                    livros.push({
                        nome: nomeLivro,
                        data: dataLivro,
                        paginas: paginas,
                        descricao: descricaoEncontrada ? descricaoEncontrada.descricao : "Descrição não disponível."
                    });
                }

                setSelecionadosLivros(livros);
                
            } catch (error) {
                console.error("Erro ao buscar os livros:", error);
            }finally{
                setTimeout(() => {
                    setLoading(false)
                }, 1000);

            }
        }
        

        pegarLivro();
        
    }, []);

    return (
        <>
        {loading ? (
            <div id='loading'>
                <MoonLoader size={80} color='#81d4fa'/>
            </div>
        ) : (
        <PageLayout>
            <section className="container-livros">
                <h1>Livros</h1>
                <p>
                    Explore informações sobre os livros da franquia de George R. R. Martin, que inspiraram a série Game of Thrones. Aqui você encontrará dados como título, número de páginas, data de lançamento e uma breve descrição de cada obra.
                </p>

                <div className="lista-livros">
                    {selecionadosLivros.map((livro, index) => (
                        <div key={index} className="card-livro">
                            <h2>{livro.nome } - {index  + 1}</h2>
                            <p><strong>Data de lançamento:</strong> {new Date(livro.data).toLocaleDateString()}</p>
                            <p><strong>Páginas:</strong> {livro.paginas}</p>
                            <p id='descricao'><strong>Descrição:</strong> {livro.descricao}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Citacao personagem={"theon"}/>
        </PageLayout>
    )}
        </>
    );
}
