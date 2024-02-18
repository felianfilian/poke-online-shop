import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app";
import "./index.css";

const element = <h1>hello world</h1>;

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
