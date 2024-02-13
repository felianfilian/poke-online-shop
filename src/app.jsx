import React, { Component } from "react";

import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default App;
