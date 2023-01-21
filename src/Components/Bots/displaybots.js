import React from "react"
import BotCard from "../Card/botcard"

export default function DisplayBots({bot, EnlistBot}){

    function addBots(id){
        EnlistBot(id)
    }

    return (
        <div className="displaybots row">
            {bot.map((profile) => {
                return (
        <BotCard addBots={addBots} key={profile.id} bot_id={profile.id} bot_name={profile.name} catch_phrase={profile.catchphrase} bot_class={profile.bot_class} bot_image={profile.avatar_url} />
    )
    })}
        </div>
    )
}