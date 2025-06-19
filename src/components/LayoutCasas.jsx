
import { Link } from 'react-router-dom';  
import cardStarks from '../assets/starks-layout-casas.jpg';
import cardLannisters from '../assets/lannisters-layout-casas.jpg';
import cardTargaryens from '../assets/targaryens-layout-casas.jpg';
import cardBaratheon from '../assets/baratheon-layout-casas.jpg';
import cardGreyjoys from '../assets/greyjoys-layout-casas.jpg';

import PageLayout from '../layout/PageLayout';
import './Layout.css';

function LayoutCasas() {
  const casas = [
    { nome: 'Starks', alt: 'Starks', img: cardStarks, rota: '/starks' },
    { nome: 'Lannisters', alt: 'Lannisters', img: cardLannisters, rota: '/lannisters' },
    { nome: 'Targaryens', alt: 'Targaryens', img: cardTargaryens, rota: '/targaryens' },
    { nome: 'Baratheon', alt: 'Baratheon', img: cardBaratheon, rota: '/baratheons' },
    { nome: 'Greyjoys', alt: 'Greyjoys', img: cardGreyjoys, rota: '/greyjoys' },
  ];

  return (
    <PageLayout>
      <>
        <h1 id='titulo-casas'>Casas</h1>
        <section id="container">
          {casas.map((casa, index) => (
            <div className="cards" key={index}>
              <img src={casa.img} alt={casa.alt} />
              <h2>
                <Link to={casa.rota}>{casa.nome}</Link>
              </h2>
            </div>
          ))}
        </section>
      </>
    </PageLayout>
  );
}

export default LayoutCasas;
