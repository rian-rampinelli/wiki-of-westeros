import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import PageLayout from '../components/PageLayout';
import card from '../assets/casas-especificas/lannister.png';
import './NomeCasas.css';

function Lannisters(){

    const[dadosCasa,setDadosCasa] = useState('')
    const[dadosFundador,setDadosFundador] = useState('')
    const[membros, setMembros] = useState([]);
    const[mostrarTudo, setMostrarTudo] = useState(false);
    const navigate = useNavigate();
    

    useEffect(() =>{
    async function BuscarDadosCasa(){
        try{
        const response = await axios.get( "https://www.anapioficeandfire.com/api/houses/229")
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
                    <h1 id='margin'>Lannisters</h1>
                    <img className='img-casas' src={card} alt="" />
                    
                   <p>
                        A Casa Lannister é uma das famílias mais ricas e poderosas de Westeros, famosa por sua imensa riqueza oriunda das minas de ouro de sua região, as Terras Ocidentais. Governando a fortaleza de Rochedo Casterly, os Lannisters são conhecidos por sua astúcia política, ambição e influência em todo o reino.  
                        Eles têm uma história marcada por alianças estratégicas, intrigas e jogos de poder, frequentemente dominando o Trono de Ferro através do casamento e manipulação.  
                        Apesar das tensões internas e rivalidades, eles permanecem uma força a ser reconhecida em Westeros, guiados pelo orgulho, inteligência e determinação.
                    </p>
                    <h2>Informacoes da casa</h2>
                    
                        {dadosCasa && (
                            <div>
                                <p><span>Nome:</span> {dadosCasa.name }</p>
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
                                <p className='frase-casa'>"{dadosCasa.words}"</p>
                            </div>
                        )}
                
                </section>
                
            </main>
        </PageLayout>
    )
}

export default Lannisters