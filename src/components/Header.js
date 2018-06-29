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
    cryptos: [],
    value: 0
  };

  // Runs the API query upon page load
  componentDidMount() {
    this.cryptoAPI();
  };

  // Runs the CoinMarketCap API and updates the state with the response
  cryptoAPI() {
    API.search()
      .then(
        res => this.setState({ cryptos: res.data.data })
      )
      .catch(err => console.log(err));
  };

  // Passes successfully!
  testFunction() {
    console.log("this is a test");
  };


  updateCrypto = e => {
    console.log("updating with " + e.target.value)
    // this.setState({value: e.target.value})
  }

  // updateCrypto() {
  //   console.log("updating")
  //   console.log(this.value)
  // }






  render() {
    return (
      <div className="container justify-content-center mt-3 header">
        <h1 className="text-center" style={textStyle}>Crypto Transactions</h1>

        <hr />

        {/* {this.props.children} */}
        <Transactions
          cryptos={this.state.cryptos}
          value={this.state.value}
          updateCrypto={this.updateCrypto}
        />
      </div>
    )
  }
}