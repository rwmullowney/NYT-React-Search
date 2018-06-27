import React, { Component } from 'react';
import Transactions from "./Transactions"
import API from "../utils/API";

// Runs the CoinMarketCap API and console.logs the result
API.search().then(res => console.log(res.data.data))

// Defines variable for use as CSS
var textStyle = {
  fontFamily: "Georgia"
};

export default class Header extends Component {
  render() {
    return (
      <div className="container justify-content-center mt-3 header">
        <h1 className="text-center" style={textStyle}>Crypto Transactions</h1>

        <hr />

        {/* {this.props.children} */}
        <Transactions />
      </div>
    )
  }
}