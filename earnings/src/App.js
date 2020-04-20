import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home';
import Earnings from "./components/earnings/Earnings";
import Price from "./components/price/Price";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/earnings">Earnings</Link>{' '}
          <Link to="/price">Price</Link>{' '}
          <Link to="/links">Links</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/earnings" component={Earnings} />
            <Route path="/price" component={Price} />
            <Route path="/links" render={() => <h1>Links</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
