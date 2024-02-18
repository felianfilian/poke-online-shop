import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {
    items: [],
  };
  render() {
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {this.props.items.map((item) => (
          <div key={item.name}>
            {item.amount}x {item.name} - {item.price}
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
