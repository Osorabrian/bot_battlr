import './App.css';
import React from 'react';
import Navbar from "../Navbar/navbar"
import DisplayBots from '../Bots/displaybots';
import EnlistedBots from '../Bots/enlistedbots';
import { useEffect, useState } from 'react';

function App() {

  // useState for bots and bots been enlisted
  const [bots, setBots] = useState([])
  const [enlisted, setEnlisted] = useState([])

  // fetch data from json-server
  useEffect(() => {
    fetch("https://json-server-vercel1-mocha.vercel.app/bots")
    .then(response => response.json())
    .then(data => setBots(data))
  },[]) 

  // function for deleting bots
  function deleteBot(id){
    const bot = bots.filter(robot => robot.id !== id)
    setBots(bot)
    const robot = enlisted.filter(item => item.id !== id)
    setEnlisted(robot)
    fetch(`https://json-server-vercel1-mocha.vercel.app/bots/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application.json'
      }
    })
    .then(r => r.json())
  }

  // function for enlisting bot to your army
  function EnlistBot(bot_id){
    const bot = bots.filter((profile) => profile.id === bot_id)
    const [robot] = bot
    if(enlisted.find(element => element.id === bot_id)){
      setEnlisted([...enlisted])
    }else{
      setEnlisted([...enlisted, robot])
    }
  }

  // function to delist bot from your army
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