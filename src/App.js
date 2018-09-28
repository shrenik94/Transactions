import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from './HomePage/home-page';
import TransactionPage from './TransactionPage/transaction-page'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/homePage" component={HomePage} />
            <Route path="/transactions" component={TransactionPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
