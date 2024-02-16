import React, { Component } from "react";

class Product extends Component {
  state = {};

  render() {
    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          src="/assets/img/tomato.jpeg"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

// default props
Product.defaultProps = {
  title: "Product",
  description: "no description",
};

export default Product;
