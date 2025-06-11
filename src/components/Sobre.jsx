import './Sobre.css'
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';
//import emailjs from 'emailjs-com';
import { useState } from 'react';







function Sobre(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [assunto, setAssunto] = useState('');

    

    function handleEmail(e){
    e.preventDefault();

    if (!nome || !email || !message || !assunto) {
      alert('Erro ao enviar, preencha todos os campos!');
      return;
    }
    console.log(assunto,email,nome,message)
    alert("email enviado!")



}
    return(
            
            <main id='about-container'>
                <h1>Bem vindo a westeros,uma terra de fogo e gelo!</h1>
                <p>Este site tem como objetivo ser uma mini wiki do universo de Game of Thrones.
                Aqui, você encontrará informações detalhadas sobre os personagens marcantes da saga, as grandes casas nobres de Westeros e Essos, bem como dados sobre os episódios da série. foi feito utilizando a API “<span style={{color:'#2a3b47'}}>An API of Ice and Fire</span>” para trazer conteúdo dinâmico e fiel à obra.

                Explore as histórias de lealdade, traição e conquista que moldaram os Sete Reinos. Descubra as árvores genealógicas das casas, as alianças e rivalidades que definiram o destino de reis e plebeus. Navegue por um acervo de dados que cresce junto com sua curiosidade.

                Então, aproveite a jornada, viajante...</p >
                <section id="section-cards">

                        <div className="card" style={{ backgroundImage: `url(${card1})` }}>
                            <div className="cards-overlay"></div>
                            <div className="card-info">
                                <a href="#">Personagens</a>
                            </div>
                        </div>

                    <div className="card" style={{ backgroundImage: `url(${card2})` }}>
                            <div className="cards-overlay"></div>
                            <div className="card-info">
                                <a href="#">Casas</a>
                            </div>
                        </div>

                    <div className="card card-3" style={{ backgroundImage: `url(${card3})` }}>
                        <div className="cards-overlay"></div>
                        <div className="card-info">
                            <a href="#">Serie</a>
                        </div>
                    </div>
                    </section>
                <h2 id='title-form'>Envie suas dúvidas, sugestões ou comentários sobre Westeros. Sua voz ecoará pelos Sete Reinos!</h2>
                <form onSubmit={handleEmail} id='form-contato'>
                    <div>
                        <label>Nome</label>
                        <input 
                        type="text" 
                        onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                        
                        
                    </div>
                     <div>
                        <label>Assunto</label>
                        <input type="text"
                        onChange={(e) => setAssunto(e.target.value)} />
                        
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea 
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="button-sobre">
                        <button variant="light" type="submit">
                        Enviar
                        </button>
                    </div>
                </form>
                
            
            </main>
    
    )
}

export default Sobre