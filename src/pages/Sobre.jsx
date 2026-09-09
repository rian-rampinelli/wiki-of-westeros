import { useState } from 'react';
import { Link } from 'react-router-dom';
import Citacao from '../api/CitacoesApi.jsx';
import PageLayout from '../components/PageLayout.jsx';
import card5 from '../assets/sobre/card5.jpeg';
import card2 from '../assets/sobre/card2.jpeg';
import card4 from '../assets/sobre/card4.jpeg';
import './Sobre.css'










function Sobre(){
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
                            <Link to="/layoutcasas">Casas</Link>
                            </div>
                        </div>
                        <div className="card card-3" style={{ backgroundImage: `url(${card4})` }}>
                            <div className="cards-overlay"></div>
                            <div className="card-info">
                            <Link to="/livros">Livros</Link>
                            </div>
                        </div>
                        </section>
                    
                   
                    
                   
                
                    
                    <Citacao personagem={"ned"}/>
                    
                </main>
            </PageLayout>
    
    )
}

export default Sobre