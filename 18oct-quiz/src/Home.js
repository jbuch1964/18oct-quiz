import React from 'react';
import './App';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './About.js';
import Profiles from './Profiles.js';

export default function Home() {
    return (
        <div>
          <Link to="/">Home</Link>
        </div>
    );
};