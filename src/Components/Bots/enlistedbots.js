import  React from "react"
import "./enlistedbots.css"
import EnlistedBotCard from "../Card/enlistedbotcard"

export default function EnlistedBots({enlisted, deListBot}){

    function removeBot(id){
        deListBot(id)
    }
    
    const enlist = enlisted.map((profile) => {
        return (
        <EnlistedBotCard removeBot={removeBot} 
        key={profile.id} 
        bot_id={profile.id} 
        bot_name={profile.name} 
        catch_phrase={profile.catchphrase} 
        bot_class={profile.bot_class} 
        bot_image={profile.avatar_url}
        bot_health={profile.health}
        bot_damage={profile.damage}
        bot_armor={profile.armor}/>
        )})

    return (
        <div className="enlisted-bots row">
            <h2>Your Army</h2>
            <p>( Click on Bot avatar to delist from your army)</p>

            {enlist}
        </div>
    )
}