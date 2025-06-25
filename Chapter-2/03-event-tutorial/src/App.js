import Greeting from "./Components/Greeting";

function App() {
  function handleClick(event) {
    // console.log(event.target);
    event.target.textContent = "You click me";
  }
  // handleClick(e)  :- pass event object in function

  function handleClick2(firstName, lastName) {
    console.log(firstName, lastName);
  }

  //Wrapper function
  // function Wrapper() {
  //   handleClick2("Akshat", "Sharma")
  // }

  // onClick => HTML elements h1, h2, button, o

  return (
    <>
      {/* <h1>APP</h1>
      <button onClick={handleClick}>Click Me</button>
      <button
        //browser call so it pass event object and we perform some functionality
        onClick={(e) => {
          handleClick2("Akshat", "Sharma");
          console.log(e.target);
          e.target.textContent = "You click me";
        }}
      >
        Click Me 2
      </button> */}

      <Greeting onClick={ handleClick} />
    </>
  );
}

export default App;
