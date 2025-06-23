import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import enviarEmail from '../components/EnviarEmail';
import PageLayout from '../components/PageLayout';
import card from '../assets/casas-especificas/greyjoy.png';
import './NomeCasas.css';



function Greyjoys(){

    

    const[dadosCasa,setDadosCasa] = useState('')
    const[dadosFundador,setDadosFundador] = useState('')
    const[membros, setMembros] = useState([]);
    const[mostrarTudo, setMostrarTudo] = useState(false);
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        enviarEmail("Greyjoys");
      }, []);
    

    useEffect(() =>{
    async function BuscarDadosCasa(){
        try{
        setLoading(true)
        const response = await axios.get( "https://www.anapioficeandfire.com/api/houses/169")
        setDadosCasa(response.data)
        const dadosFundador = await axios.get(response.data.founder)
        setDadosFundador(dadosFundador.data)
        const urls = response.data.swornMembers;
        const requisicoes = urls.map(url => axios.get(url));
        const respostas = await Promise.all(requisicoes);

        const nomes = respostas
            .map(res => res.data.name)
            .filter(nome => nome.trim() !== '');

        setMembros(nomes);

        
        }catch{
            alert("erro ao buscar")
            console.log('erro')
        }finally{
            setTimeout(() => {
                setLoading(false)
            }, 0.600);
        }
        }
        BuscarDadosCasa();
    },[]);

    console.log(dadosCasa)

    

 
    
    return(
        <PageLayout>
            <main id='container-casas'>

                
                
               
                <section className='section-cards'>
                    <button className='voltar' onClick={() => navigate(-1)}>
                        <FaArrowLeft style={{cursor:'pointer'}} size={40}/>
                    </button>
                    <h1 className='titulo-greyjoys' id='margin'>Greyjoys</h1>
                    <img className='img-casas' src={card} alt="" />
                    
                    <p>
                        A Casa Greyjoy é uma das grandes casas nobres de Westeros, governando as Ilhas de Ferro, um conjunto de ilhas conhecidas por sua cultura marítima única e espírito indomável. Os Greyjoys são famosos por sua tradição de pirataria, ataques relâmpagos e resistência feroz contra invasores.  
                        Vivem sob o código do Ferro, valorizando a força, a independência e a audácia, rejeitando muitas das convenções do continente. Suas terras são ásperas e o mar é a sua vida, moldando um povo acostumado à dureza e à sobrevivência em condições difíceis.  
                        Historicamente, os Greyjoys participaram de várias rebeliões contra o Trono de Ferro, buscando autonomia e respeito para seu povo e suas tradições. Apesar das disputas internas e desafios políticos, eles permanecem leais entre si, unidos pelo orgulho da herança marítima e pela determinação inabalável de manter sua liberdade e cultura únicas.
                    </p>
                    <h2 className='titulo-greyjoys'>Informacoes da casa</h2>
                    {loading ? (
                        <div className='loading-nomes-casas'>
                            <MoonLoader size={50} color='#81d4fa'/>
                        </div>
                     ) : (
                        dadosCasa && (
                            <div>
                                <p><span>Nome:</span> {dadosCasa.name }</p>
                                <p><span>Região:</span> {dadosCasa.region || "Sem regiao"}</p>
                                <p><span>Fundação:</span> {dadosCasa.founded || 'Desconhecida'}</p>
                                <p><span>Fundador:</span> {dadosFundador.name || 'Desconhecido'}</p>
                                <p><span>Emblema:</span> {dadosCasa.coatOfArms}</p>
                                <div className='membros'>
                                    <h2 className='titulo-greyjoys'>Membros e Aliados</h2>

                                    <ul>
                                        {(mostrarTudo ? membros : membros.slice(0, 5)).map((nome, index) => (
                                        <li key={index}>{nome}</li>
                                        ))}
                                    </ul>

                                    {membros.length > 5 && (
                                        <div style={{textAlign:'center'}}>
                                            <button  onClick={() => setMostrarTudo(!mostrarTudo)}>
                                            {mostrarTudo === false ? 'Mostrar tudo' : 'Mostrar menos' }
                                            </button>
                                        </div>
                                    )}
                                </div>     
                                <p className='frase-casa'>"{dadosCasa.words}"</p>
                            </div>
                        ))}
                
                </section>
                
            </main>
        </PageLayout>
    )
}

export default Greyjoys