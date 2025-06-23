import { useEffect } from 'react';
import { Link } from 'react-router-dom';  
import enviarEmail from '../components/EnviarEmail';
import cardStarks from '../assets/casas-main/starks.jpg';
import cardLannisters from '../assets/casas-main/lannisters.jpg';
import cardTargaryens from '../assets/casas-main/targaryens.jpg';
import cardBaratheon from '../assets/casas-main/baratheon.jpg';
import cardGreyjoys from '../assets/casas-main/greyjoys.jpg';
import PageLayout from '../components/PageLayout';
import './Casas.css';



function LayoutCasas() {

  useEffect(() => {
    enviarEmail("Casas");
  }, []);

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
