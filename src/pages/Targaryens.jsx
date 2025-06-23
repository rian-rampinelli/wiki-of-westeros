import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import enviarEmail from '../components/EnviarEmail';
import PageLayout from '../components/PageLayout';
import card from '../assets/casas-especificas/targaryen.png';
import './NomeCasas.css';



function Targaryens(){

    const[dadosCasa,setDadosCasa] = useState('')
    const[dadosFundador,setDadosFundador] = useState('')
    const[membros, setMembros] = useState([]);
    const[mostrarTudo, setMostrarTudo] = useState(false);
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        enviarEmail("Targaryesn");
      }, []);
    

    useEffect(() =>{
    async function BuscarDadosCasa(){
        try{
            setLoading(true)
            const response = await axios.get( "https://www.anapioficeandfire.com/api/houses/378")
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
                    <h1 className='titulo-targaryens' id='margin'>Targaryesn</h1>
                    <img className='img-casas' src={card} alt="" />
                    
                    <p>
                        A Casa Targaryen é uma família antiga e distinta, conhecida por sua linhagem valiriana e pela posse dos lendários dragões que dominaram Westeros durante séculos. Originalmente vindos da antiga Valíria, os Targaryens conquistaram e unificaram os Sete Reinos sob seu domínio com fogo e sangue, estabelecendo a dinastia mais duradoura da história recente.  
                        Apesar de terem sido derrubados do Trono de Ferro durante a Rebelião de Robert, os Targaryens mantêm uma forte presença na cultura e na memória de Westeros, simbolizando poder, magia e a busca pela restauração de sua glória ancestral.  
                        A casa é marcada por sua combinação única de carisma, coragem e às vezes loucura, com seus membros frequentemente divididos entre a ambição de recuperar o trono e as complexas relações familiares que desafiam sua estabilidade.
                    </p>

                    <h2 className='titulo-targaryens' >Informacoes da casa</h2>
                    {loading ? (
                        <div className='loading-nomes-casas'>
                            <MoonLoader size={50} color='#81d4fa'/>
                        </div>
                     ) : (
                        dadosCasa && (
                            <div>
                                <p><span>Nome:</span> {dadosCasa.name }</p>
                                <p><span>Região:</span> {dadosCasa.region || "Sem regiao"}</p>
                                <p><span>Fundação:</span>  Desconhecida</p>
                                <p><span>Fundador:</span> {dadosFundador.name || 'Desconhecido'}</p>
                                <p><span>Emblema:</span> {dadosCasa.coatOfArms}</p>
                                <div className='membros'>
                                    <h2 className='titulo-targaryens'>Membros e Aliados</h2>

                                    <ul>
                                        {(mostrarTudo ? membros : membros.slice(0, 5)).map((nome, index) => (
                                        <li  key={index}>{nome}</li>
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

export default Targaryens