import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//Components
import Front from './Components/front'
import Back from './Components/back'
// Styling
import './App.css';


function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>PDF Uploader</h1>
      </header>
      <nav>
        <Link className='navLink' to='/front' 
              style={{ textDecoration: 'none', padding: '2%' }}>
              Frontend Only</Link>
        <Link className='navLink' to='/back' 
              style={{ textDecoration: 'none', padding: '2%' }}>
              Backend Conversion</Link>
      </nav>
      <Switch>
        <Route path="/front" component={Front}/>
        <Route path="/back" component={Back} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
