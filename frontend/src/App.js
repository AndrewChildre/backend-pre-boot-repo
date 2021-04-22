import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Fitness from './components/Fitness';
import Forms from './components/Forms'
import Nav from './components/Nav'
import Header from './components/Header'
import Values from './components/Values'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
    {/* <Fitness /> */}

      
      <main>
        <Header />
        <Router>
        <Route path='/' exact component={Home} />
        <Route path='/values' exact component={Values} />
        <Route path='/fitness' exact component={Fitness} />
        </Router>
      </main>

    </div>
  );
}

export default App;
