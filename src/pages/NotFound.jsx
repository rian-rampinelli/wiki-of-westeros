import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSwordFill } from "react-icons/ri";
import gotImage from '../assets/fundo/img-principal.jpg';
import enviarEmail from '../components/EnviarEmail';
import './NotFound.css'


function NotFound() {
  useEffect(() => {
      enviarEmail("Notfound");
    }, []);

  return (
   <div className="page-background" style={{ backgroundImage: `url(${gotImage})` }}>
      <h1 className="title"><span>404 -</span> Beco sem saída.</h1>
      <p className="subtitle">"O inverno esta chegando... Volte enquanto há tempo!<RiSwordFill style={{fontSize:'18px', marginLeft:'4px'}}></RiSwordFill >"</p>
      <Link to="/" className="botao">
        Voltar para o castelo! 
      </Link>
    </div>
  );
}

export default NotFound