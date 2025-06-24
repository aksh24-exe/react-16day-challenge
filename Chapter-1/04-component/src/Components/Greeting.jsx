import React from "react";
import "./Greeting.css";

function Greeting() {
  // const firstName = (name) => {
  //   return name.toUpperCase();
  // }

  // function firstName(name) {
  //   return name.toUpperCase();
  // }

  const firstName = function (name) {
    return name.toUpperCase();
  };

  const cssStyle = {
    backgroundColor: "lightblue",
    margin: "1rem",
    fontfamily: "sans-serif",
    padding: "1rem",
  };

  const isDarkMode = false;

  return (
    <div
      className={`conatiner ${isDarkMode ? "bg-dark" : ""}`}
      // style={cssStyle}
    >
      <h1>Hello {firstName("harshit")}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        praesentium vero, autem saepe accusamus velit.
      </p>

      <h2>form</h2>
      <form action="">
        <label htmlFor="fname"></label>
        <input type="text" id="fname" />
      </form>
    </div>
  );
}

export default Greeting;
