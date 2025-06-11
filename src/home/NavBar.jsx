import './NavBar.css'
import { Link } from 'react-router-dom'

import { GiStoneThrone } from "react-icons/gi";

function NavBar(){
    return(
        <header id='header'>
            <div id='header-text'>
                <GiStoneThrone style={{fontSize:50}} />
                <p>Wiki of westeros</p>
            </div>
            <nav>
                <ul id='header-list-links'>
                    <li><Link to = "/sobre">Sobre</Link></li>
                    <li><Link to = "/casas">Casas</Link></li>
                    <li><Link to = "/personagens" >Personagens</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar