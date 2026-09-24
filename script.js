const heading = React.createElement(
  "h1",
  { id: "heading", class: "main-heading" },
  "Hello world!",
);

const container = React.createElement("div", { id: "container" }, [
  React.createElement("h2", {}, "The heading 2"),
  React.createElement("p", {}, "This is para inside container div"),
]);

const mainContainer = React.createElement("div", { id: "main-container" }, [
  heading,
  container,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(mainContainer);

// console.log(React);

// console.log(ReactDOM);
{
  /* <div id="parent">
<div id="child1">
<h1>I'm in child 1</h1>
</div>
<div id="child2">
<h2>I'm in child 2</h2>
</div>
</div> */
}

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },

    React.createElement("h1", {}, "I'm in child 1"),
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "I'm in child 2"),
  ),
]);

root.render(parent);
