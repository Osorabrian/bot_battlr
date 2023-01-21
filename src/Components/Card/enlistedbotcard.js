import React from "react";

export default function EnlistedBotCard({removeBot,bot_health,bot_damage,bot_armor,
    bot_id,bot_name,catch_phrase,bot_class,bot_image}){

    function handleClick(){
        removeBot(bot_id)
    }

    let icon;
    if(bot_class === "Captain"){
        icon = <i class="fa-solid fa-jet-fighter"></i>
    }else if(bot_class === "Defender"){
        icon = <i class="fa-solid fa-shield"></i>
    }else if(bot_class === "Support"){
        icon = <i class="fa-solid fa-headset"></i>
    }else if(bot_class === "Witch"){
        icon = <i class="fa-solid fa-hat-wizard"></i>
    }else if(bot_class === "Medic"){
        icon = <i class="fa-solid fa-truck-medical"></i>
    }else if(bot_class === "Assault"){
        icon = <i class="fa-solid fa-gun"></i>
    }

    return (
    <div className="card col-2 ms-4 me-2 mt-2 h-50" onClick={() => {handleClick()}}>
        <img src={bot_image} className="card-img-top" alt={bot_name} />
        <div className="card-body">
            <h5 className="card-title">{bot_name} {icon}</h5>
            <p className="card-text" style={{fontSize: "10px"}}>{catch_phrase}</p>
            <i class="fa-solid fa-heart-crack text-danger col-4">{bot_health+"  "}</i>
            <i class="fa-solid fa-circle-exclamation text-warning c0l-4">{bot_damage+"  "}</i>
            <i class="fa-solid fa-shield-halved col-4">{bot_armor}</i>
        </div>
    </div>
    )
}