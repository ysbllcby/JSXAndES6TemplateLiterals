import React from "react";
import ReactDOM from "react-dom";

const fname = "Ysa";
const lname = "C";
const luckyNum = 3;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {luckyNum}.</p>
  </div>,
  document.getElementById("root")
);
