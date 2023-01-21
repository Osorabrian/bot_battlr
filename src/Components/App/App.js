import './App.css';
import React from 'react';
import Navbar from "../Navbar/navbar"
import DisplayBots from '../Bots/displaybots';
import EnlistedBots from '../Bots/enlistedbots';
import { useEffect, useState } from 'react';

function App() {

  const [bots, setBots] = useState([])
  const [enlisted, setEnlisted] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/bots")
    .then(response => response.json())
    .then(data => setBots(data))
  },[]) 

  function deleteBot(id){
    const bot = bots.filter(robot => robot.id !== id)
    setBots(bot)
    const robot = enlisted.filter(item => item.id !== id)
    setEnlisted(robot)
    fetch(`http://localhost:8001/bots/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application.json'
      }
    })
    .then(r => r.json())
  }

  function EnlistBot(bot_id){
    const bot = bots.filter((profile) => profile.id === bot_id)
    const [robot] = bot
    if(enlisted.find(element => element.id === bot_id)){
      setEnlisted([...enlisted])
    }else{
      setEnlisted([...enlisted, robot])
    }
  }

  function deListBot(id){
      const newArray = enlisted.filter((robot) => robot.id !== id)
      setEnlisted(newArray)
  }


  return (
    <div className="App">
      <Navbar/>
      <EnlistedBots enlisted={enlisted} deListBot={deListBot}/>
      <DisplayBots bot={bots} EnlistBot={EnlistBot} deleteBot={deleteBot}/>
    </div>
  );
}

export default App;