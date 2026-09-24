import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Title"),
  React.createElement("p", null, "Description"),
);

console.log(element);