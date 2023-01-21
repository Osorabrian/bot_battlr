import './App.css';
import React from 'react';
import Navbar from "../Navbar/navbar"
import DisplayBots from '../Bots/displaybots';
import EnlistedBots from '../Bots/enlistedbots';
import { useEffect, useState } from 'react';

function App() {

  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/bots")
    .then(response => response.json())
    .then(data => setBots(data))
  },[]) 

  function EnlistBot(bot_id){
    console.log(bot_id)
  }

  return (
    <div className="App">
      <Navbar/>
      <EnlistedBots/>
      <DisplayBots bot={bots} EnlistBot={EnlistBot}/>
    </div>
  );
}

export default App;