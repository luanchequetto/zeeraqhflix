import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/zeeraqhflix_logo.png'
import './Menu.css'
import Button from '../Button';
// import ButtonLink from './components/ButtonLink/index'

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="Zeeraqhflix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;