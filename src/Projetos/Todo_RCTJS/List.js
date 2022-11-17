import React from "react";
import verified from "./assets/marca-de-verificacao.png";
import unVerified from "./assets/unVerified.png"
import apagar from  "./assets/apagar-linhas.png"
function CheckedImg(props) {

    if (props.check) {
        return (<img alt="check" width="40px" src={verified}></img>)
    } else {
        return (<img alt="uncheck" width="40px" src={unVerified}></img>)
    }
}


function List(props) {


    return (
        <div id="listItems"><ul>
            {props.items.map(item => (<li key={item.id} className={item.check ? "check" : ""}>
                <div><button className="btn" onClick={() => { props.checked(item) }}><CheckedImg check={item.check}></CheckedImg></button>
                    {item.text}</div>

                <button className=" btn apagar " onClick={() => props.itemDeleted(item)}><img alt="del" width="30px" src={apagar}></img></button></li>))}
        </ul>
        </div>);
}

export default List;