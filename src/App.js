import React from 'react';
import './App.css';
import Navibar  from './Components/Navibar'
import Jumbotron from './Components/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import Home from './Views/Home.js'
import Contact from './Views/Contact'
import Scope from './Views/Scope'
import Topics from './Views/Topics';
import Program from './Views/Program';
import Dates from './Views/Dates';
import Committee from './Views/Committee';
import Submissions from './Views/Submissions';



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

            <Route path='/scope' >
              <Scope />
            </Route>


            <Route path='/submissions' >
              <Submissions />
            </Route>

            <Route path='/topics' >
              <Topics />
            </Route>

            <Route path='/dates' >
              <Dates />
            </Route>

            <Route path='/committees' >
              <Committee />
            </Route>

            <Route path='/program' >
              <Program />
            </Route>

            <Route path='/contact' >
              <Contact/>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
