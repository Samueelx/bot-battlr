import React from "react";
import YourBot from "./YourBot";

function YourBotArmy({army}) {
    const soldier = army.map((bot) => {
        return <YourBot key={bot.id} avatar={bot.avatar_url} name={bot.name} 
        botClass={bot.bot_class} catchphrase={bot.catchphrase} health={bot.health}
        damage={bot.damage} armor={bot.armor} />
    });
    return (
        <div className="bg-gradient-to-r from-cyan-600 to-green-400 h-max">
            <div className="flex flex-wrap justify-start gap-x-4 gap-y-4 content-around my-1">
                {soldier}
            </div>
        </div>
    );
}

export default YourBotArmy;