import './App.css';
import React from 'react'
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import Home from './components/HomePage';
import MarkdownContainer from './components/MarkdownContainer';
import LoremIpsum from './data/LoremIpsum.md'
import BlankPage from './components/BlankPage';
import CampaignsOverview from './components/CampaignsOverview';

function App() {
  const history = useHistory()
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontWeight: 'bold', padding: '10px 100px' }} onClick={() => { history.push("/") }}>
          Sylvira's Compendium of Faerûn
        </div>
      </header>
      <div style={{ padding: '15px 50px', backgroundColor: '#EEE' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:category" children={<Child />} />
          <Route path= "/" component={BlankPage}/>
        </Switch>
        <div style={{ backgroundColor: 'lightcoral', fontWeight: 'bold', padding: '10px', color: 'white' }}>This website is a work in progress, and is currently in its infancy. More content will arrive over time.</div>
      </div>
    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { category } = useParams();
  console.log(category)
  switch(category){
      case "explore-the-realms":
        return <MarkdownContainer filePath={LoremIpsum}></MarkdownContainer>
      case "campaign-details":
        return <CampaignsOverview/>
      default:
        return <BlankPage></BlankPage>
  }
}

export default App;
