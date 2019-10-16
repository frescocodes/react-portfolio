import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>hello</h1>
        <Switch>
          <Route path='/about' />
          <Route path='/work' />
          <Route path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
