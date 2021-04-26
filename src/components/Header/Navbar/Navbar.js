import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css"

const Navbar = () => {
    const menuBars = <FontAwesomeIcon icon={faBars}/>
    return(
        <div className="navbar-container">
            <div className="navbar-logo">
                <a href="#">
                    <img src="http://simplelocacao.com/uploads/2019/11/Logo-Simple-Loca%C3%A7%C3%A3o.png" alt="Logotipo" />
                </a>
            </div>
                <ul className="navbar-list">
                    <   li> <a href="#"> VEÍCULOS </a> </li>
                    <li> <a href="#"> ALUGUEL </a> </li>
                    <li> <a href="#"> MINHA RESERVA </a> </li>
                    <li> <a href="#"> DÚVIDAS </a> </li>
                    <li> <a href="#"> SOBRE A SIMPLE </a> </li>
                    <li> <a href="#"> CONTATO </a> </li>
                </ul>
        </div>
    )
}

export default Navbar;