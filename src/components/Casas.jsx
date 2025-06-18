import PageLayout from '../layout/PageLayout'
import './Casas.css'
import card2 from '../assets/starks.png';
import axios from 'axios';
import {useEffect, useState } from 'react';

function Casas(){

    const[dadosCasa,setDadosCasa] = useState('')
    const[dadosFundador,setDadosFundador] = useState('')
    const[membros, setMembros] = useState([]);
    

    useEffect(() =>{
    async function BuscarDadosCasa(){
        try{
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
        }
        }
        BuscarDadosCasa();
    },[]);

    console.log(dadosCasa)

    

 
    
    return(
        <PageLayout>
            <main id='container'>

                
                
               
                <section className='section-cards'>
                    <h1 id='margin'>Starks</h1>
                    <img className='img-casas' src={card2} alt="" />
                    
                    <p>A Casa Stark é uma das mais antigas e nobres famílias de Westeros. São conhecidos por sua honra, lealdade e pela rígida tradição de proteger o Norte. Descendem dos Primeiros Homens e governaram como Reis do Norte por milhares de anos antes da unificação dos Sete Reinos.
                    Mesmo após se tornarem Senhores de Winterfell, os Starks sempre foram respeitados por sua ligação com as tradições antigas, os deuses antigos e pela defesa dos valores do Norte. São sóbrios, sérios e extremamente ligados à família e ao dever..
                    </p>
                    <h2>Informacoes da casa</h2>
                    
                        {dadosCasa && (
                            <div>
                                <p><span>Nome:</span>{dadosCasa.name}</p>
                                <p><span>Regiao:</span>{dadosCasa.region}</p>
                                <p><span>Fundação:</span>{dadosCasa.founded}</p>
                                <p><span>fundador:</span>{dadosFundador.name}</p>
                                <p><span>Emblema:</span>{dadosCasa.coatOfArms}</p>
                                <div className='membros'>
                                <h2 style={{marginBottom:0}}>Membros e Aliados</h2>
                                    <select >
                                        <option value="">Membros</option>
                                        {membros.map((nome, index) => (
                                        <option key={index} value={nome}>
                                            {nome}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <p className='frase-casa'>"{dadosCasa.words}"</p>
                            </div>
                        )}
                
                </section>
                
            </main>
        </PageLayout>
    )
}

export default Casas