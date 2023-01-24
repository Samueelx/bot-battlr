import React, { useEffect, useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const BOTS_URL = "https://json-server-vercel-2-ten.vercel.app/bots"

function App() {
  const [bots, setBots] = useState([]);

  function fetchBots(){
    fetch(BOTS_URL).then(res => res.json())
    .then(data => {
      console.log(data);
      setBots(() => data);
    });
  }

  useEffect(() => {
    fetchBots();
  }, []);

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  );
}

export default App;
