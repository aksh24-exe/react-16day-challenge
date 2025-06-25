import { useState } from "react";

function StateExampleObject() {
  const [person, Setperson] = useState({
    id: 1,
    firstName: "Akshat",
    lastName: "Sharma",
    email: "akshat@gmail.com",
    phoneNo: "7301504346",
    age: 22,
  });

  function increaseAge() {
    Setperson((prevState) => {
      return { ...prevState, age: prevState.age + 1 };
    });
  }
  return (
    <>
      <p>firstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>
      <p>email: {person.email}</p>
      <p>phoneNo: {person.phoneNo}</p>
      <p>age: {person.age}</p>
      <button onClick={increaseAge}>Increade Age</button>
    </>
  );
}

export default StateExampleObject;
