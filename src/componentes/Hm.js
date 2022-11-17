import React from "react";


function Home() {
    const sobre = () => {

        if (window.outerWidth > 770){
            window.scrollTo({
                top: 5200,
                behavior: "smooth"
            })
        }
            
    }
    return (
        <div  id="home" >
            <div id="home-desc">
                <div><h1 id="ext-bv">Bem Vindo</h1></div>
                <div><p id="bv-desc">Olá, meu nome é Felipe Ceccotti,
                    e sou um desenvolvedor Front-End...</p>
                </div>
                <div id="btn-sbm"><button onClick={sobre} id="sbm">Saiba mais</button></div>
                
            </div>

        </div>
    );
}

export default Home;