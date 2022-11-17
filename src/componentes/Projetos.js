import React from "react";
import { Link } from "react-router-dom";

function Projetos() {

 


    return (
        <div id="content-proj">
            <h1 id="h1-projetos">Projetos</h1>
            <div id="Projetos" >


                <div className="card-proj">

                    <h2 className="h2-card">Todo-List React</h2>
                    <p className="desc-card"> Lista de tarefas 2.0 criada para substituir a lista do JS bruto</p>
                    <p className="card-ling">
                        Html | Css | Java Script | React.js
                    </p>
                    
                    <button  className=" ver-mais"><Link to="/todoListRCT">Ver Projeto</Link></button>
                </div>

                <div className="card-proj">

                    <h2 className="h2-card">Todo-List Js</h2>
                    <p className="desc-card"> Lista de Tarefas desenvolvida com Java Script bruto </p>
                    <p className="card-ling">
                        Html | Css | Java Script
                    </p>

                    <button className="ver-mais"><a href="https://www.felipececcotti.com/todolistJS/">Ver Projeto</a></button>

                </div>
                <div className="card-proj">

                    <h2 className="h2-card"> Jogo da Velha</h2>
                    <p className="desc-card"> O tradicional Jogo da Velha usando Java Script </p>
                    <p className="card-ling">
                        Html | Css | Java Script
                    </p>

                    <button className="ver-mais"><a href="https://www.felipececcotti.com/jdv/">Ver Projeto</a></button>

                </div>
                <div className="card-proj">

                    <h2 className="h2-card"> Jogo da Memoria</h2>
                    <p className="desc-card"> Joga da Memoria animado com CSS e a logica do Java Script </p>
                    <p className="card-ling">
                        Html | Css | Java Script
                    </p>
                    <button className="ver-mais"><a href="https://www.felipececcotti.com/jogodamemoria/">Ver Projeto</a></button>

                </div>
            </div>

        </div>)
}

export default Projetos;