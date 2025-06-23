import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import PageLayout from '../components/PageLayout';
import card from '../assets/casas-especificas/starks.png';
import './NomeCasas.css';



function Starks(){

    const[dadosCasa,setDadosCasa] = useState('')
    const[dadosFundador,setDadosFundador] = useState('')
    const[membros, setMembros] = useState([]);
    const[mostrarTudo, setMostrarTudo] = useState(false);
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
    

    useEffect(() =>{
    async function BuscarDadosCasa(){
        try{
            setLoading(true)
            const response = await axios.get( "https://www.anapioficeandfire.com/api/houses/362")
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
        }}

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
                    <h1 id='margin'>Starks</h1>
                    <img className='img-casas' src={card} alt="" />
                    
                    <p>A Casa Stark é uma das mais antigas e nobres famílias de Westeros. São conhecidos por sua honra, lealdade e pela rígida tradição de proteger o Norte. Descendem dos Primeiros Homens e governaram como Reis do Norte por milhares de anos antes da unificação dos Sete Reinos.
                    Mesmo após se tornarem Senhores de Winterfell, os Starks sempre foram respeitados por sua ligação com as tradições antigas, os deuses antigos e pela defesa dos valores do Norte. São sóbrios, sérios e extremamente ligados à família e ao dever..
                    </p>
                    <h2>Informacoes da casa</h2>
                    {loading ? (
                        <div className='loading-nomes-casas'>
                            <MoonLoader size={50} color='#81d4fa'/>
                        </div>
                     ) : (
                        dadosCasa && (
                            <>
                            <div>
                                <p><strong>Nome:</strong> {dadosCasa.name }</p>
                                <p><span>Região:</span> {dadosCasa.region || "Sem regiao"}</p>
                                <p><span>Fundação:</span> {dadosCasa.founded || 'Desconhecida'}</p>
                                <p><span>Fundador:</span> {dadosFundador.name || 'Desconhecido'}</p>
                                <p><span>Emblema:</span> {dadosCasa.coatOfArms}</p>
                                <div className='membros'>
                                    <h2>Membros e Aliados</h2>

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
                            </div>
                            <p className='frase-casa'>"{dadosCasa.words}"</p>
                            </>
                        ))}
                
                </section>
                
                
            </main>
        </PageLayout>
    )
}

export default Starks