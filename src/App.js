import React, { useEffect, useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const BOTS_URL = "https://json-server-vercel-2-ten.vercel.app/bots"

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [armyClass, setClass] = useState([]);

  function fetchBots(){
    fetch(BOTS_URL).then(res => res.json())
    .then(data => {
      console.log(data);
      setBots(() => data);
    });
  }

  function addToArmy(id, botClass) {
    if(army.length >= 3) 
      alert("You've reached maximum number of bots");
    else{
      bots.forEach((bot) => {
        if(bot.id === id){
          setArmy([...army, bot]);
          setClass([...armyClass, botClass]);
        }
      });

      // const updatedBots = bots.filter((bot) => bot.id !== id);
      // setBots(() => updatedBots);

      console.log(`Army: ${army}`);
    }
  }

  function removeFromArmy(id, botClass) {
    const updatedBotClasses = armyClass.filter((bCl) => bCl !== botClass);
    setClass(updatedBotClasses);
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy); 
  }

  useEffect(() => {
    fetchBots();
  }, []);

  return (
    <div>
      <YourBotArmy army={army} onRemove={removeFromArmy}/>
      <BotCollection bots={bots} onAdd={addToArmy}/>
    </div>
  );
}

export default App;
