import React from "react";

export default function EnlistedBotCard({removeBot,bot_id,bot_name,catch_phrase,bot_class,bot_image}){

    function handleClick(){
        removeBot(bot_id)
    }

    return (
    <div className="card col-2 ms-4 me-2 mt-2" onClick={handleClick}>
        <img src={bot_image} className="card-img-top" alt={bot_name} />
        <div className="card-body bg-light">
            <h5 className="card-title">{bot_name}</h5>
            <p className="card-text" style={{fontSize: "10px"}}>{catch_phrase}</p>
            <p className="card-text">Class: {bot_class}</p>
        </div>
    </div>
    )
}