import React from "react"
import BotCard from "../Card/botcard"

export default function DisplayBots({bot, EnlistBot, deleteBot}){

    // pass callback function to add data to parent delete function
    function addBots(id){
        EnlistBot(id)
    }

    // pass callback function to send data to parent delete function
    function deleteRobot(id){
        deleteBot(id)
    }

// create bot card for every bot in the collection
    return (
        <div className="displaybots row">
            <h2>Bot Collection</h2>
            {bot.map((profile) => {
                return (
        <BotCard 
        addBots={addBots} 
        deleteRobot={deleteRobot}
        key={profile.id} 
        bot_id={profile.id} 
        bot_name={profile.name} 
        catch_phrase={profile.catchphrase} 
        bot_class={profile.bot_class} 
        bot_image={profile.avatar_url}
        bot_health={profile.health}
        bot_damage={profile.damage}
        bot_armor={profile.armor} />
    )
    })}
        </div>
    )
}