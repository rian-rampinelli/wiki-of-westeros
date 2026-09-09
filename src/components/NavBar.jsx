import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { GiStoneThrone } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import './NavBar.css'

function NavBar(){

     

    


    return(
        <header id='header'>
            <div id='header-text'>
                <GiStoneThrone style={{fontSize:50}} />
                <p id='text-logo'>Wiki of westeros</p>
            </div>
            <nav>
                <ul id='header-list-links'>
                    <li><Link to = "/sobre">Sobre</Link></li>
                    <li><Link to = "/personagens" >Personagens</Link></li>
                    <li><Link to = "/layoutcasas">Casas</Link></li>
                    <li><Link to = "/livros">Livros</Link></li>
                 
                
                </ul>
               
            </nav>
        </header>
    )
}

export default NavBar