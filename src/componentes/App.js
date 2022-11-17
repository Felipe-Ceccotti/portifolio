import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Header";
import '../App.css';
import Home from "./Hm";
import Conhecimento from "./Conhecimento";
import Projetos from "./Projetos";
import Sobre from "./Sobre";
import TodoRCT from "./TodoRct";
function Page(){
    return(
        <div>
        <Home/>
        <Conhecimento/>
        <Projetos/>
        <Sobre/>
            </div>
        
    )
}

function app() {
    return (
        <Router>
            <div>
            <Header/>
                <Routes>
                <Route path="*" element={<Page/>}></Route>
                <Route path="todoListRCT" element={<TodoRCT/>}></Route>
                </Routes>

            </div>
        </Router>
    )


}

export default app;