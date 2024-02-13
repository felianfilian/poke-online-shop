import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app";
import "./index.css";

const element = <h1>hello world</h1>;

ReactDom.render(<App />, document.getElementById("root"));
