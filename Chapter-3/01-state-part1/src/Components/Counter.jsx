import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function Increase() {
    // setCounter(counter + 1)

    setCounter((previousState) => previousState + 1);

    // setCounter((previousState) => {
    //   return previousState + 1;
    // });
  }
  function Reset() {
    setCounter(0);
  }
  function Decrease() {
    // setCounter(counter - 1)

    setCounter((previousState) => previousState - 1);

    // setCounter((previousState) => previousState - 1);

    // setCounter((previousState) => {
    //   return previousState - 1;
    // });
  }
  return (
    <>
      <h1>Conter Variable</h1>
      <h1>{counter}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={Decrease}>Decrease</button>
      {/* <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button> */}
    </>
  );
}

export default Counter;
