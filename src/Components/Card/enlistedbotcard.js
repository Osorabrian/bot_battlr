import React from "react";

export default function EnlistedBotCard({removeBot,bot_health,bot_damage,bot_armor,
    bot_id,bot_name,catch_phrase,bot_class,bot_image}){

    // handle the click eventlistener
    function handleClick(){
        removeBot(bot_id)
    }

    // icons irrespective of class
    let icon;
    if(bot_class === "Captain"){
        icon = <i className="fa-solid fa-jet-fighter"></i>
    }else if(bot_class === "Defender"){
        icon = <i className ="fa-solid fa-shield"></i>
    }else if(bot_class === "Support"){
        icon = <i className="fa-solid fa-headset"></i>
    }else if(bot_class === "Witch"){
        icon = <i className ="fa-solid fa-hat-wizard"></i>
    }else if(bot_class === "Medic"){
        icon = <i className ="fa-solid fa-truck-medical"></i>
    }else if(bot_class === "Assault"){
        icon = <i className ="fa-solid fa-gun"></i>
    }
// create a bot card
    return (
    <div className="card col-2 ms-4 me-2 mt-2 h-90 mb-1" onClick={() => {handleClick()}}>
        <img src={bot_image} className="card-img-top" alt={bot_name} />
        <div className="card-body">
            <h5 className="card-title">{bot_name} {icon}</h5>
            <p className="card-text" style={{fontSize: "10px"}}>{catch_phrase}</p>
            <i className="fa-solid fa-heart-crack text-success col-4">{bot_health+"  "}</i>
            <i className="fa-solid fa-circle-exclamation text-warning c0l-4">{bot_damage+"  "}</i>
            <i className="fa-solid fa-shield-halved col-4">{bot_armor}</i>
        </div>
    </div>
    )
}