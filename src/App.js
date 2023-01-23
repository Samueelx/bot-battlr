import React, { useEffect, useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';

const BOTS_URL = "http://localhost:8001/bots"

function App() {
  const [bots, setBots] = useState([]);

  function fetchBots(){
    fetch(BOTS_URL).then(res => res.json())
    .then(data => console.log(data));
  }

  useEffect(() => {
    fetchBots();
  }, []);

  return (
    <div>
      <h1 className="text-center text-green-500 font-bold text-3xl">
        Hello world!
      </h1>
      <BotCollection />
    </div>
  );
}

export default App;
