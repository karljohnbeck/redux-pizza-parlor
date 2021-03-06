import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Checkout from '../Checkout/Checkout.jsx';
import CustomerInfo from '../CustomerInfo/CustomerInfo.js'
import AdminView from '../AdminView/AdminView'

import ListOfPizzas from '../ListOfPizzas/ListOfPizzas.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            <h1 className="App-title">Mangiare La Pizza</h1>
            
          {/* <h2>Cart Total:${this.props.reduxState.cartReducer.reduce((prev, cur) => {
            return prev + cur.price;

          }, 0)}</h2> */}
        </header>

          <br />

        <br />

          <Route exact path="/" component={ListOfPizzas} /> 
          <Route exact path="/customer_info" component={CustomerInfo}/>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/admin" component={AdminView} />

        <p>Pizza is great.</p>
      </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
