import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import NASA from './views/NASA'
import Jobs from './views/Jobs'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/topnav'
function App() {
  return (
    <div>
        <div className="App">
          <HashRouter>
            <Nav />
            <Switch>
              <Route path='/' name="Home" component={Home} exact={true}/>
              <Route path='/NASA' name="Nasa" component={NASA} />
              <Route path='/Jobs' name="Jobs" component={Jobs} />
            </Switch>
          </HashRouter>
        </div>
      </div>
  );
}

export default App;
