import { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import './Personagens.css'
import axios from 'axios'
import { MoonLoader } from 'react-spinners';
import Js from '../assets/JonSnow.jpg';



//Daenerys Targaryen
//Sansa Stark




function Personagens(){

    const [nomePersonagem, setNomePersonagem] = useState("")
    const [casas, setCasas] = useState("");
    const [resultados, setResultados] = useState("");
    const [loading,setLoading] = useState(false);
 

    const urls = [
    "https://anapioficeandfire.com/api/characters/583",  // Jon Snow
    "https://anapioficeandfire.com/api/characters/271",  // Daenerys Targaryen
    "https://anapioficeandfire.com/api/characters/1052", // Tyrion Lannister
    "https://anapioficeandfire.com/api/characters/529",  // Arya Stark
    "https://anapioficeandfire.com/api/characters/238",  // Cersei Lannister
    "https://anapioficeandfire.com/api/characters/957",  // Sansa Stark
    "https://anapioficeandfire.com/api/characters/565",  // Bran Stark
    "https://anapioficeandfire.com/api/characters/167",  // Jaime Lannister
    "https://anapioficeandfire.com/api/characters/339",  // Ned Stark
    "https://anapioficeandfire.com/api/characters/901",  // Samwell Tarly
    "https://anapioficeandfire.com/api/characters/823",  // Brienne of Tarth
    "https://anapioficeandfire.com/api/characters/1303"  // Jorah Mormont
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

    console.log(resultados)

    return(
        <PageLayout>
            <main id='main-container'>
                <p id='title-text'>
                    Nesta página, você pode buscar informações sobre os personagens de <strong>Game of Thrones</strong>, além de explorar dados completos dos 12 principais. 
                    As informações incluem nome, data de nascimento, apelido e a casa (com link clicável para mais detalhes), entre outros dados relevantes.
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
                         <div id='loading'>
                             <MoonLoader color='#81d4fa'/>
                         </div>

                    ) : (
                       
                        <>{resultados.length > 0  && (
                        <div id='show-personagens'>
                        <p><span className='info-title'>Nome:</span> {resultados[0].name}</p>
                        <p><span className='info-title'>Nascido:</span> {resultados[0].born}</p>
                        <p><span className='info-title'>Cultura:</span> {resultados[0].culture || "Desconhecido"}</p>
                        <p><span className='info-title'>Principal Titulo:</span> {resultados[0].titles[0] || "Nao Possui"}</p>
                        <p><span className='info-title'>Apelidos:</span> {resultados[0].aliases.slice(0,1).join(", ") || "Sem apelidos"}</p>
                        <p><span className='info-title'>Casas e Alianças:</span></p>
                        <ul>
                            {casas.length > 0 ? (
                            casas.map((casa, index) => <li key={index}>{casa}</li>)
                            ) : (
                            <li>Desconhecido</li>
                            )}
                        </ul>
                        
                        </div>
                    )}
                    </>
                    )
                    }

                    
                
                </section>

                <section id='cards'>
                     <div className='cards-personagens'>
                        <img src={Js} alt="Jon Snow" />
                        <div className='info-cards'>
                            <h1 id='title-card'>Jon Snow</h1>
                            <p>"O Norte se lembra."</p>
                            <p>House statk</p>
                            </div>
                    </div>
                     <div className='cards-personagens'>
                        <img src={Js} alt="Jon Snow" />
                        <div className='info-cards'>
                            <h1 id='title-card'>Jon Snow</h1>
                            <p>"O Norte se lembra."</p>
                            <p>House statk</p>
                            </div>
                    </div>
                     <div className='cards-personagens'>
                        <img src={Js} alt="Jon Snow" />
                        <div className='info-cards'>
                            <h1 id='title-card'>Jon Snow</h1>
                            <p>"O Norte se lembra."</p>
                            <p>House statk</p>
                            </div>
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}

export default Personagens