import {useState,useEffect } from 'react'
import PageLayout from '../layout/PageLayout'
import './Personagens.css'
import axios from 'axios'
import { MoonLoader } from 'react-spinners';
import snow from '../assets/n.jpg';
import tywin from '../assets/tywin.jpg';
import ned from '../assets/ned.jpg';
import daenerys from '../assets/daenerys.jpeg';
import { Link } from 'react-router-dom';
import Citacao from '../api/citacoes';
import enviarEmail from './EnviarEmail';



function Personagens(){

    useEffect(() => {
        enviarEmail("Personagens");
    }, []);


    const [nomePersonagem, setNomePersonagem] = useState("")
    const [casas, setCasas] = useState("");
    const [resultados, setResultados] = useState("");
    const [loading,setLoading] = useState(false);
   
 


   
    const personagensFixos = [
    {   
        img: snow,
        nome: "Jon Snow",
        frase: "O Norte se lembra.",
        casa: "House Stark"
    },
    {   
        img: tywin,
        nome: "Tywin Lannister",
        frase: "Nunca esqueça quem manda.",
        casa: "House Lannister"
    },
    {   
        img: ned,
        nome: "Ned Stark",
        frase: "A espada é minha sentença.",
        casa: "House Stark"
    },
    {   
        img: daenerys,
        nome: "Daenerys Targaryen",
        frase: "Dracary!.",
        casa: "House Targaryen"
    },
    {   
        img: snow,
        nome: "Jaime Lannister",
        frase: "Pela mão do rei!",
        casa: "House Lannister"
    },
    {   
        img: snow,
        nome: "Robb Stark",
        frase: "O Rei no Norte!",
        casa: "House Stark"
    },
    {   
        img: snow,
        nome: "Robert Baratheon",
        frase: "Traga-me vinho!",
        casa: "House Baratheon"
    },
    {   
        img: snow,
        nome: "Theon Greyjoy",
        frase: "O que está morto não pode morrer.",
        casa: "House Greyjoy"
    },
    {   
        img: snow,
        nome: "Tyrion Lannister",
        frase: "Eu bebo e sei das coisas.",
        casa: "House Lannister"
    },
    
];


   

    async function buscarPersonagem(e) {
        e.preventDefault()

        if (nomePersonagem === ""){
            alert("erro,digite um personagem!")
            return
        }

        

        try {
            setLoading(true)
            const response = await axios.get('https://www.anapioficeandfire.com/api/characters', {
            params: { name: nomePersonagem }
            })

            if (response.data.length === 0) {
                alert("Personagem não encontrado.")
                setResultados([])
                setCasas([])
                setLoading(false)
                return
            }

            setResultados(response.data)

          
            if (response.data[0].allegiances.length > 0) {
            const nomesCasas = []

            for (const url of response.data[0].allegiances) {
                try {
                const res = await axios.get(url)
                nomesCasas.push(res.data.name)
                } catch {
                nomesCasas.push("Casa não encontrada")
                }
            }
            setCasas(nomesCasas)
            
            } else {
            setCasas(["Sem casa"])
            }
            setTimeout(() => {
                setLoading(false);
            }, 0.800);

    } catch (error) {
        console.error('Erro na busca:', error)
        setResultados([])
        setCasas([])
        setLoading(false)
    } 

    }

    function pegarNomeCasas(str) {
        const words = str.split(" ");
        return words.slice(0, 2).join(" ");
    }

    function casaParaRota(casa) {
        let base = casa.replace("House ", "");
        return "/" + base + "s";
    }

    console.log(resultados)

    return(
        <PageLayout>
            <main id='main-container'>
                <p id='title-text'>
                    Uma das principais atrações de <strong>Game of Thrones</strong> são as tramas envolventes e complexas que giram em torno dos personagens interessantes e multifacetados da série. Cada personagem traz sua própria história, ambições, alianças e conflitos, tornando o universo de Westeros rico em drama, reviravoltas e emoções intensas. Dos nobres senhores às figuras misteriosas, os personagens são o coração da narrativa, responsáveis por cativar fãs ao redor do mundo e manter o suspense em cada episódio. Nesta pagina,você pode pesquisar informações desses personagens além de explorar cards dos 9 principais. 
                    As informações incluem nome, data de nascimento, apelido e a casa, entre outros dados relevantes.
                </p>

                <h1>Busque por algum personagem!</h1>
                <section id='pesquisa-personagem'>
                   
                    <form onSubmit={buscarPersonagem} id='form-pesquisa'>
                        <label htmlFor="">Personagem:</label>
                        <input
                        type="text"
                        value={nomePersonagem}
                        onChange={e => setNomePersonagem(e.target.value)}/>
                        <button  type='submit'>Pesquisar</button>
                    </form>

                    {loading ? (
                         <div id='loading-personagem'>
                             <MoonLoader color='#81d4fa'/>
                         </div>

                    ) : (
                       
                        <>{resultados.length > 0  && (
                        <div id='show-personagens'>
                        <p><span className='info-title'>Nome:</span> {resultados[0].name}</p>
                        <p><span className='info-title'>Nascido:</span> {resultados[0].born}</p>
                        <p><span className='info-title'>Cultura:</span> {resultados[0].culture || "Desconhecido"}</p>
                        <p><span className='info-title'>Titulo:</span> {resultados[0].titles[0] || "Nao Possui"}</p>
                        <p><span className='info-title'>Apelidos:</span> {resultados[0].aliases.slice(0,2).join(", ") || "Sem apelidos"}</p>
                        <p>
                        <span className='info-title'>Casas e Alianças:</span> {
                            casas
                            .slice(0, 2)
                            .map(pegarNomeCasas)
                            .join(", ")
                        }
                        </p>

                        </div>
                    )}
                    </>
                    )
                    }

                    
                
                </section>

                <section id='cards'>
                    {personagensFixos.map(function(personagem, index) {
                        return (
                            <div key={index} className='cards-personagens'>
                                <img src={personagem.img} alt={personagem.nome} />
                                <div className='info-cards'>
                                    <strong>
                                        <p id='title-card'>{personagem.nome}</p>
                                    </strong>
                                    <p id='frase-personagem'>"{personagem.frase}"</p>
                                    <Link to={casaParaRota(personagem.casa)} className='link-casas'>
                                    {personagem.casa}
                                    </Link>
                                </div>
                                
                            </div>
                            
                        );
                    })}
                    
                </section>
               
                <Citacao personagem={"tywin"}/>
                   
            </main>
        </PageLayout>
    )
}

export default Personagens