import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/product";

const element = <h1>hello world</h1>;

// ReactDom.render(<Navbar />, document.getElementById("root"));
ReactDom.render(<Product />, document.getElementById("root"));
