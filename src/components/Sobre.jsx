import './Sobre.css'
import PageLayout from '../layout/PageLayout';
import card5 from '../assets/card5.jpeg';
import card2 from '../assets/card2.jpeg';
import card4 from '../assets/card4.jpeg';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios'







function Sobre(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [assunto, setAssunto] = useState('');
    const [citacao,setcitacao] = useState('')
    const [personagemCitacao,setPersonagemCitacao] = useState('')


    const templateParams = {
      email: email,
      name: nome,
      mensagem: message,
      assunto:assunto,
    };

     useEffect(() => {
        axios.get('https://api.gameofthronesquotes.xyz/v1/author/jon/1')
        .then(response => {
            console.log(response.data)
            setcitacao(response.data.sentence)
            setPersonagemCitacao(response.data.character.name)
            
        })
        .catch(error => {
            console.error('Erro ao buscar citacoes:', error);
        });
    }, []);


    function handleEmail(e){
    e.preventDefault();

    if (!nome || !email || !message || !assunto) {
      alert('Erro ao enviar, preencha todos os campos!');
      return;
    }


   
    emailjs.send('service_qfallhk', 'template_zzsvrcc', templateParams, 'YU30LAJ_Djv-ASqLK')
      .then(
        (result) => {
          alert('Email enviado!');
          console.log(result.text);
         
        },
        (error) => {
          alert('Erro ao enviar o email!');
          console.log(error.text);
        }
    )




}
    return(
        
            
            <PageLayout>
                <main id='about-container'>
                    <h1>Bem vindo a westeros,uma terra de fogo e gelo!</h1>
                    <p id='sobre'>
                        Este site tem como objetivo ser uma mini wiki do universo de <strong>Game of Thrones</strong>, obra criada por George R. R. Martin.
                        O projeto foi desenvolvido por Rian Barbosa Rampinelli Delgado como parte da disciplina de Desenvolvimento Web.
                        Aqui você encontrará informações detalhadas sobre os personagens marcantes da saga, as grandes casas nobres de Westeros e Essos, bem como dados sobre os episódios da série.
                        O conteúdo foi organizado a partir das APIs
                        <a target="_blank" className="link-api" href="https://anapioficeandfire.com/"> An API of Ice and Fire</a> e
                        <a target="_blank" className="link-api" href="https://gameofthronesquotes.xyz/"> Game of Thrones Quotes API</a>, para oferecer uma experiência dinâmica e fiel ao universo original.
                        Aproveite a jornada, viajante...
                    </p>
                   <section id="section-cards">
                        <div className="card card-personagem" style={{ backgroundImage: `url(${card5})` }}>
                            <div className="cards-overlay"></div>
                            <div className="card-info">
                            <Link to="/personagens">Personagens</Link>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundImage: `url(${card2})` }}>
                            <div className="cards-overlay"></div>
                            <div className="card-info">
                            <Link to="/casas">Casas</Link>
                            </div>
                        </div>
                        <div className="card card-3" style={{ backgroundImage: `url(${card4})` }}>
                            <div className="cards-overlay"></div>
                            <div className="card-info">
                            <Link to="/serie">Série</Link>
                            </div>
                        </div>
                        </section>
                    <h2 id='title-form'>Envie suas dúvidas, sugestões ou comentários!</h2>
                    <form onSubmit={handleEmail} id='form-contato'>
                        <div>
                            <label>Nome</label>
                            <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="Email"
                             value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                
                
                        </div>
                         <div>
                            <label>Assunto</label>
                            <input type="text"
                             value={assunto}
                            onChange={(e) => setAssunto(e.target.value)} />
                
                        </div>
                        <div>
                            <label>Mensagem</label>
                            <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="button-sobre">
                            <button variant="light" type="submit">
                            Enviar
                            </button>
                        </div>
                    </form>
                
                     <p id="citacao">
                        {citacao} <br />
                        <strong><span id="spancitacao">"{personagemCitacao}"</span></strong>
                    </p>
                </main>
            </PageLayout>
    
    )
}

export default Sobre