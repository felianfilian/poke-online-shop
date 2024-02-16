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
          <Product title="tomatos" description="red and tasty" />
          <Product title="cucumber" />
          <Product title="apples" />
          <Product title="mango" />
        </div>
      </div>
    );
  }
}

export default App;
