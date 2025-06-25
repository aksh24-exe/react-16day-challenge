import { useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Akshat", lastName: "Sharma", age: 22 },
    { id: 2, firstName: "Ayush", lastName: "Sharma", age: 22 },
    { id: 3, firstName: "Akansha", lastName: "Sharma", age: 22 },
  ]);

  function deleteUser(id) {
    console.log("Delete user");

    // 1st ways to delete user

    // const newState = [];
    // for (let user of users) {
    //   if (user.id !== id) {
    //     newState.push(user)
    //   }
    // }
    // setUsers(newState)

    // 2nd ways

    // setUsers((prevState) => {
    //   return prevState.filter((user) => {
    //     return user.id !== id;
    //   });
    // });

    // 3rd in oneline

    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }

  function increaseAge(id) {
    // console.log(id);
    // console.log("Increase Age");

    // 1st way

    // const newUser = [];
    // for (let user of users) {
    //   if (user.id === id) {
    //     newUser.push({ ...user, age: user.age + 1 });
    //   } else {
    //     newUser.push({...user})
    //   }
    // }
    // setUsers(newUser);

    // 2nd way --> react developer way

    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <div className="App">
      <h1>State Example</h1>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
