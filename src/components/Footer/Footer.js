import React from 'react';
import "./Footer.css";
import Logo from '../../img/logo.svg';

export const Footer = () => {
    return (
        <div className="footer cointainer">

            <div className="footer__logo">

                <img src={Logo} alt="Logo SunWater"/>
                <p>#SomosAgua</p>

            </div>

            <div className="footer__redes">

                <a href="https://www.instagram.com/sunwater.ar/" target="_blanck" rel="noreferrer">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a href="https://wa.me/5491153192246" target="_blanck" rel="noreferrer">
                    <i className="fab fa-whatsapp-square fa-2x"></i>
                </a>

            </div>

            <div className="footer__derechos-lugar">
                <p><i className="fas fa-map-marker-alt"></i> Argentina</p>
                <p>SunWater® 2021</p>
            </div>

        </div>
    );
} 