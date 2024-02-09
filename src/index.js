import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/navbar";

const element = <h1>hello world</h1>;

ReactDom.render(<Navbar />, document.getElementById("root"));
