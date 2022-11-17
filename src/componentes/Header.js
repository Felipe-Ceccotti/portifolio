import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const largura = window.outerWidth;
    const link1 = () => {

        if (largura > 455){
            setTimeout(()=>{
                window.scrollTo({
                    top: 945,
                    behavior: "smooth"
                })
            },200)
        }
        else{
            setTimeout(()=>{
                window.scrollTo({
                    top: 745,
                    behavior: "smooth"
                })
            },200)
        }
        

            
    };
    const link2 = () => {

        if (largura > 769){
            setTimeout(()=>{
                window.scrollTo({
                    top: 1845,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <= 769 && largura > 455){
            setTimeout(()=>{
                window.scrollTo({
                    top: 2165,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <= 455 && largura > 430){
            setTimeout(()=>{
                window.scrollTo({
                    top: 2000,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <= 430){
            setTimeout(()=>{
                window.scrollTo({
                    top: 1770,
                    behavior: "smooth"
                }) 
            },200)
           
        }
    }
    const link3 = () => {

        if (largura > 879){
            setTimeout(()=>{
                window.scrollTo({
                    top: 2900,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <= 879 && largura > 769){
            setTimeout(()=>{
                window.scrollTo({
                    top: 3600,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <=769 && largura > 455){
            setTimeout(()=>{
                window.scrollTo({
                    top: 3930,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <=455 && largura >430){
            setTimeout(()=>{
                window.scrollTo({
                    top: 3730,
                    behavior: "smooth"
                }) 
            },200)
           
        }
        if (largura <= 430 && largura > 350){
            setTimeout(()=>{
                window.scrollTo({
                    top: 3490,
                    behavior: "smooth"
                }) 
            },200)
           
        }
            if (largura <= 350 && largura >344){
                setTimeout(()=>{
                    window.scrollTo({
                        top: 3260,
                        behavior: "smooth"
                    }) 
                },200)
               
            }
            if (largura <=344 && largura > 312){
                setTimeout(()=>{
                    window.scrollTo({
                        top: 3320,
                        behavior: "smooth"
                    }) 
                },200)
               
            }
            if (largura <= 312 && largura > 290){
                setTimeout(()=>{
                    window.scrollTo({
                        top: 3380,
                        behavior: "smooth"
                    }) 
                },200)
               
            }
            if (largura <= 290){
                setTimeout(()=>{
                    window.scrollTo({
                        top: 3420,
                        behavior: "smooth"
                    }) 
                },200)
               
            }
            
    }
    const home= () => {

        if (window.outerWidth > 0){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
            
    }
return (

    <header>
        <div id="logo" ><button id="link-logo" onClick={home}><Link to="/">Felipe Ceccotti</Link></button></div>
        <div>
            <ul id="nav-links">
                <li id="link-1" className="header-links"><button onClick={home} ><Link to="/">Home</Link></button></li>
                <li id="link-2" className="header-links"><button onClick={link1} ><Link to="/">Tecnologias</Link></button></li>
                <li id="link-3" className="header-links"><button onClick={link2} ><Link to="/">Projetos</Link></button></li>
                <li id="link-4" className="header-links"><button onClick={link3} ><Link to="/">Sobre</Link></button></li>
                
            </ul>

        </div>

    </header>

)
    
}

export default Header