//import logo from './logo.svg';
import React from 'react';

import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About.js';
import Profiles from './Profiles.js';

export default function App() {
  
    return (
      
      <div className="App">

          <Router>
            <Switch>      
                  <Route exact path="/profiles" component={Profiles} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/" component={Home} />
            </Switch>
            
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/profiles">Profiles</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
               
              </nav>
          </Router>

      </div>
    );
  }

