import './App.css';
import Navbar from "../Navbar/navbar"
import DisplayBots from '../Bots/displaybots';
import EnlistedBots from '../Bots/enlistedbots';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <EnlistedBots/>
      <DisplayBots/>
    </div>
  );
}

export default App;