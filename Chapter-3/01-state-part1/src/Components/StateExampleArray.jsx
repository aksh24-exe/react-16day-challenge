import { useState } from "react";
import { v4 as uuid } from "uuid";

function StateExampleArray() {
  const [fruits, setFruits] = useState(["Apple", "Watermelon"]);
  function addFruits() {
    // setFruits([...fruits, "Mango"]);

    //   setFruits((prevState) => {
    //       return [...prevState, "Apple"]
    //   })

    setFruits((prevState) => [...prevState, "Licchi"]);
  }
  return (
    <>
      <ul>
        StateExampleArray{" "}
        {fruits.map((fruit) => (
          <li key={uuid()}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruits}>Add fruits</button>
    </>
  );
}

export default StateExampleArray;
