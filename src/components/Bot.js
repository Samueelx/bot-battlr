import React from "react";

function Bot({avatar, name, botClass, catchphrase, health, damage, armor}) {
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white max-w-sm flex-1">
                <a href="#!">
                    <img className="rounded-t-lg" src={avatar} alt="avatar"/>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 mx-2 inline-block">{name}</h5>
                    <p className="inline-block mx-2">{botClass}</p>
                    <p className="text-gray-700 text-base mb-4">
                        {catchphrase}
                    </p>

                    <hr className="mb-3.5"/>
                    <p className="inline-block p-1 m-1 font-thin">Health: {health}</p>
                    <p className="inline-block p-1 m-1 font-thin">Damage: {damage}</p>
                    <p className="inline-block p-1 m-1 font-thin">Armor: {armor}</p>
                    <button type="button" className=" block mt-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </>
    );
}

export default Bot;