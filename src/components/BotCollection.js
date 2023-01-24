import React from "react";
import Bot from "./Bot";

function BotCollection({bots}) {
    const cards = bots.map((bot) => {
        return <Bot key={bot.id} avatar={bot.avatar_url} name={bot.name} 
        botClass={bot.bot_class} catchphrase={bot.catchphrase} health={bot.health}
        damage={bot.damage} armor={bot.armor} />
    });
    return (
        <>
        <div className="flex flex-wrap justify-around gap-4 content-around">
            {cards}
        </div>
        </>
    );
}

export default BotCollection;