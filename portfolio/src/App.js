import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import { Home } from './components/Home'
import { Header } from './components/Header'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/' component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App
