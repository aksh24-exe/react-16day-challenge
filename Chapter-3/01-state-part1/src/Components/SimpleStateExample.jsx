import { useState } from "react";

//hooks
//usestate
//useEffect

// In react we cannot use normal variable
// to chnage the ui

//state
//state ---> data
//when state change

// useState
// call like a function useState(default value) take default value
//[state value, functionToUpdateStateValue]

//State --> Akshat
// state --> Sassh
// when state changes our components rerender
// then ui change

function SimpleStateExample() {
  console.log("Component render");

  const [name, setName] = useState("Akshat");
  function handleNameChange() {
    if (name == "Akshat") setName("Sassh");
    else setName("Akshat");
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default SimpleStateExample;
