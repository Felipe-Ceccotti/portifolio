import React from "react";
import Linkedin from '../assets/linkedin.png'
import GitHub from '../assets/github.png'
import Email from '../assets/email.png'
function Sobre() {
    return (<div id="sobre">
        <div id="container-sobre">
            <div id="desc-sobre">
                <h1 className="h1-sobre">Sobre Mim</h1>
                <h3 id="sobre-mim">Olá, meu nome é Felipe Ceccotti, e sou um desenvolvedor web Front-End e um apaixonado pela tecnologia desde criança, e eu estou buscando uma jornada neste ramo, caso queira entrar em contato comigo, só me mandar um e-mail ou acessar minhas redes nos links abaixo.
                </h3>
            </div>
            <div id="desc-contato">
                <h1 id="h1-contato" className="h1-sobre">Contato</h1>
                <ul id="links-contato">
                    <li className="li-contato"><a className="link-contato" href="https://www.linkedin.com/in/felipe-f-ceccotti-593428250/"><img className="logo-contato" alt="Linkedin" src={Linkedin}></img> Linkedin</a></li>
                    <li className="li-contato"> <a className="link-contato" href="https://github.com/Felipe-Ceccotti"><img className="logo-contato" alt="GitHub" src={GitHub}></img> GitHub</a></li>
                    <li className="li-contato"> <a className="link-contato" href="mailto:Felipefceccotti@hotmail.com"><img className="logo-contato" alt="Email" src={Email}></img> Felipefceccotti@hotmail.com</a></li>
                </ul>
            </div>
        </div>
    </div>)
}

export default Sobre;