import React, { Component } from "react";

import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="product-container">
          <Product title="Tomaten" />
          <Product title="Gurken" />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
