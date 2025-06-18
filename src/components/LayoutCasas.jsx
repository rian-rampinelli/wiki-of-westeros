import React from 'react';
import cardStarks from '../assets/starks-layout-casas.jpg';
import cardLannisters from '../assets/lannisters-layout-casas.jpg';
import cardTargaryens from '../assets/targaryens-layout-casas.jpg';
import cardBaratheon from '../assets/baratheon-layout-casas.jpg';
import cardGreyjoys from '../assets/greyjoys-layout-casas.jpg';

import PageLayout from '../layout/PageLayout';
import './layout.css';

function LayoutCasas() {
  const casas = [
    { nome: 'Starks', alt: 'Starks', img: cardStarks },
    { nome: 'Lannisters', alt: 'Lannisters', img: cardLannisters },
    { nome: 'Targaryens', alt: 'Targaryens', img: cardTargaryens },
    { nome: 'Baratheon', alt: 'Baratheon', img: cardBaratheon },
    { nome: 'Greyjoys', alt: 'Greyjoys', img: cardGreyjoys },
  ];

  return (
    <PageLayout>
      <h1 id='titulo-casas'>Casas</h1>
      <section id="container">
        {casas.map((casa, index) => (
          <div className="cards" key={index}>
            <img src={casa.img} alt={casa.alt} />
            <h2 className="titulos-casas">{casa.nome}</h2>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}

export default LayoutCasas;
