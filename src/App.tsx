import './App.css';
import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import TombOfAnnihilation from './components/toa.tsx';
import Home from './components/landing.tsx';

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontWeight: 'bold', padding: '10px' }} onClick={()=>{history.push("/")}}>
          Sylvira's Compendium of Faerûn
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/tomb-of-annihilation" component={TombOfAnnihilation}/>
      </Switch>
      <div style={{ padding: '15px 50px', backgroundColor: '#EEE' }}>
        <div style={{backgroundColor:'lightcoral', fontWeight:'bold', padding:'10px', color:'white'}}>This website is a work in progress, and is currently in its infancy. More content will arrive over time.</div>
      </div>
    </div>
  );
}

export default App;
