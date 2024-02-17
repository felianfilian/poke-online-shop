import React, { Component } from "react";

import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <div className="product-container">
            <Product
              image="tomato.jpeg"
              title="tomatos"
              description="red and tasty"
            />
            <Product
              image="cucumber.jpeg"
              title="cucumber"
              description="green and long"
            />
            <Product
              image="apples.jpeg"
              title="apples"
              description="delicious"
            />
            <Product
              image="mango.jpeg"
              title="mango"
              description="sweet and exotic"
            />
          </div>
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
    );
  }
}

export default App;
