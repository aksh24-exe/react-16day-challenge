import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // function handleUsername(e) {
  //   console.log(e.target.value);
  //   setUsername(e.target.value);
  // }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hello", username);
    console.log("Password", password);
  }
  return (
    <div className="App">
      <h1>Form Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
