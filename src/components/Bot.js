import React from "react";

function Bot({id, avatar, name, botClass, catchphrase, health, damage, armor, onAdd}) {
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white max-w-xs flex-1" onClick={() => {onAdd(id, botClass)}}>
                <img className="rounded-t-lg" src={avatar} alt="avatar"/>
                <div className="p-3">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 mx-2 inline-block">{name}</h5>
                    <p className="inline-block mx-2">{botClass}</p>
                    <p className="text-gray-700 mb-4 text-sm text-clip overflow-hidden">
                        {catchphrase}
                    </p>

                    <hr className="mb-3.5"/>
                    <p className="inline-block p-1 m-1 font-thin">Health: {health}</p>
                    <p className="inline-block p-1 m-1 font-thin">Damage: {damage}</p>
                    <p className="inline-block p-1 m-1 font-thin">Armor: {armor}</p>
                </div>
            </div>
        </>
    );
}

export default Bot;