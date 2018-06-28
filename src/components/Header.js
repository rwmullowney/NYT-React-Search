import React, { Component } from 'react';
import Transactions from "./Transactions"
import API from "../utils/API";

// Defines variable for use as CSS
var textStyle = {
  fontFamily: "Georgia"
};

export default class Header extends Component {

  // Set initial state
  state = {
    cryptos: {}
  }




// Runs the API query upon page load
componentDidMount() {
  this.cryptoAPI();
}

// Runs the CoinMarketCap API and updates the state with the response
cryptoAPI(){
  API.search()
  .then(res => this.setState({ cryptos: res.data.data}))
  .catch(err => console.log(err));
}








render() {
  return (
    <div className="container justify-content-center mt-3 header">
      <h1 className="text-center" style={textStyle}>Crypto Transactions</h1>

      <hr />

      {/* {this.props.children} */}
      <Transactions
        cryptos={this.state.cryptos}
      />
    </div>
  )
}
}