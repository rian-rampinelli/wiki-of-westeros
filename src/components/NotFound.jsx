import { Link } from 'react-router-dom';
import { RiSwordFill } from "react-icons/ri";
import gotImage from '../assets/got-nf.jpg'; 
import './NotFound.css'

function NotFound() {
  return (
   <div className="page-background" style={{ backgroundImage: `url(${gotImage})` }}>
      <h1 className="title">Beco sem saída. O frio lhe aguarda.</h1>
      <p className="subtitle">"O inverno é iminente... Volte enquanto há tempo!<RiSwordFill style={{fontSize:'18px', marginLeft:'4px'}}></RiSwordFill >"</p>
      <Link to="/" className="botao">
        Voltar para o castelo! 
      </Link>
    </div>
  );
}

export default NotFound