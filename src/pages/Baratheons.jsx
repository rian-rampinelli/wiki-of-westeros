import axios from 'axios';
import { useEffect, useState } from 'react';

import PageLayout from '../layout/PageLayout';
import { FaArrowLeft } from "react-icons/fa";
import './Casas.css';
import card from '../assets/baratheon.png';
import { useNavigate } from 'react-router-dom';



function Baratheons() {

  const [dadosCasa, setDadosCasa] = useState('');
  const [dadosFundador, setDadosFundador] = useState('');
  const [membros, setMembros] = useState([]);
   const[mostrarTudo, setMostrarTudo] = useState(false);
   const navigate = useNavigate();

  useEffect(() => {
    async function BuscarDadosCasa() {
      try {
        const response = await axios.get("https://www.anapioficeandfire.com/api/houses/17");  
        setDadosCasa(response.data);

        if (response.data.founder) {
          const dadosFundador = await axios.get(response.data.founder);
          setDadosFundador(dadosFundador.data);
        }

        const urls = response.data.swornMembers || [];
        const requisicoes = urls.map(url => axios.get(url));
        const respostas = await Promise.all(requisicoes);

        const nomes = respostas
          .map(res => res.data.name)
          .filter(nome => nome.trim() !== '');

        setMembros(nomes);

      } catch {
        alert("Erro ao buscar dados da casa");
        console.log('erro');
      }
    }
    BuscarDadosCasa();
  }, []);

  return (
    <PageLayout>
      <main id='container-casas'>

        <section className='section-cards'>
          
          <button className='voltar' onClick={() => navigate(-1)}>
            <FaArrowLeft style={{cursor:'pointer'}} size={40}/>
          </button>
          <h1 id='margin'>Baratheons</h1>
          <img className='img-casas' src={card} alt="Baratheon" />
          <p>
            A Casa Baratheon é uma das mais poderosas e influentes famílias nobres dos Sete Reinos. Originária da Tempestade, a casa tem sua sede em Storm's End, um castelo construído para resistir a qualquer ataque. Os Baratheons são conhecidos por sua força, coragem e temperamento forte, frequentemente descritos como líderes naturais e guerreiros temíveis.  
            A família teve um papel central na história recente de Westeros, especialmente durante a Guerra dos Cinco Reis, quando Robert Baratheon assumiu o Trono de Ferro após derrubar a dinastia Targaryen.  
            Apesar de sua força, a casa também enfrenta desafios internos e rivalidades, tanto políticas quanto familiares, que testam sua união e determinação.  
            Os Baratheons valorizam a lealdade e a honra, mas sua reputação é marcada por um temperamento tempestuoso e pela paixão intensa que governa suas ações e decisões.
          </p>
          <h2>Informações da casa</h2>

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

              <p className='frase-casa'>"{dadosCasa.words || 'Sem lema'}"</p>
            </div>
          )}

        </section>


      </main>
    </PageLayout>
  );
}

export default Baratheons;
