import React from "react";

export default function BotCard({name,phrase,bot_class}){
    return (
    <div className="card col-3 ms-2 mt-2" >
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{phrase}</p>
            <p className="card-text">Class: {bot_class}</p>
        </div>
    </div>
    )
}