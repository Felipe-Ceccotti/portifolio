import React, { useEffect, useState } from "react";
import './Todo.css';
import List from "./List";
import Item from "./ItemObj";
import addF from "./assets/adicionar-ficheiro.png";



function Todo() {
    const localItems = 'Local_Items';
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(localItems))
        if (savedItems) {
            setItems(savedItems);
        }
        // if(localStorage.getItem(localItems)!== null){
        //     setItems(JSON.parse(localStorage.getItem(localItems)))
        // }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem(localItems, JSON.stringify(items))
        }, 5);



    }, [items])






    function handleChange(event) {

        let t = event.target.value;
        setText(t);
    }

    function putItem(event) {

        event.preventDefault();
        if (text) {

            let listItem = new Item(text);
            setItems([listItem, ...items])
            setText("");
        }

    }

    function itemDeleted(item) {

        let filtered = items.filter(listItem => (listItem.id !== item.id))
        setItems(filtered)

    }

    function checked(item) {
        let UpdatedItems = items.map(listItem => {
            if (listItem.id === item.id) {
                listItem.check = !listItem.check;
            }
            return (listItem);
        })
        setItems(UpdatedItems)
    }



    return (

        <div id="fundo">
            <div className="content ">

                <h1 className="header">TO-DO LIST</h1>
                <div id="form">
                    <form>
                        <input onChange={handleChange} type="text" value={text}></input>
                        <button className="submit" onClick={putItem}><img className="img-sub" alt="add" src={addF}></img></button>
                    </form>
                </div>
                <List checked={checked} itemDeleted={itemDeleted} items={items}></List>
                
            </div>
            <div id="developed">Developed by <a href="https://github.com/Felipe-Ceccotti">Felipe Ceccotti</a></div>
        </div>
        )
        


}


export default Todo;