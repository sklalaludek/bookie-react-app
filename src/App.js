import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Home from './routes/Home';
import Movie from './routes/Movie';
import Book from './routes/Book';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movie/:id" component={Movie}/>
          <Route path="/book/:id" component={Book}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}


export default App;
