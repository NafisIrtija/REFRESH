import React from 'react';
import './App.css';
import { Navibar}  from './Components/Navibar'
import { Jumbotron } from './Components/Jumbotron'
import Home from './Views/Home.js'
import About from './Views/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navibar />
        <Jumbotron />
        <div className="p-3">
          <Switch>

            <Route exact path='/' >
              <Home />
            </Route>

            <Route path='/about' >
              <About />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
