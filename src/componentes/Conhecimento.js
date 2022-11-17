import React from "react";
import LogoHTML from "../assets/html.png";
import LogoCSS from "../assets/css.png";
import LogoJS from "../assets/javascript.png";
import LogoRCT from "../assets/react.png";
import LogoBOOT from "../assets/bootstrap.png";
import LogoNODE from "../assets/node.png";




function Conhecimento() {
    return (
    <div className="container-conhecimentos ">
        <h1 className="conhecimentos">Tecnologias dominates</h1>
        
        
            <ul className="ul-conhecimento ">
            
                <li  className="list-conhecimento l1 ">
                    <img className="img-list img-fluid" alt="html" src={LogoHTML}></img>
                    O HTML é um componente que permite inserir o conteúdo e estabelecer a estrutura básica de  um website. </li>

                <li  className="list-conhecimento l2">
                     <img className="img-list" alt="css" src={LogoCSS}></img>
                    O CSS é uma linguagem de folha de estilo e é composta por camadas, que permitem estilizar as páginas desenvolvidas com HTML.</li>

                <li className="list-conhecimento l3">
                    <img className="img-list" alt="javascript" src={LogoJS}></img>
                    O JavaScript é a linguagem de programação usada para adicionar interatividade mais complexas ao seu site.</li>

                    
          
                <li  className="list-conhecimento l4">
                    <img className="img-list" alt="bootstrap" src={LogoBOOT}></img>
                    O Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites de forma rápida e simples.</li>

                <li className="list-conhecimento l5">
                    <img className="img-list" alt="react" src={LogoRCT}></img>
                    O React.js é, uma biblioteca de JavaScript, utilizada para construir user interfaces, nomeadas para aplicações de página única.</li>

                <li className="list-conhecimento l6">
                    <img className="img-list" alt="node" src={LogoNODE}></img>
                    O Node.js é uma tecnologia usada para executar código JavaScript fora do navegador, com ele podemos construir aplicações web.</li>
            </ul>
        


    </div>)
}
export default Conhecimento;