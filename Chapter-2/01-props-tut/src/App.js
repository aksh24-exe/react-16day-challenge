import Greeting from "./Components/Greeting";
import ShowFullName from "./Components/ShowFullName";
const Users = ["user1", "user2"];

function App() {
  return (
    <div>
      {/* <Greeting firstName="Akshat" lastName="Sharma" age={21} users={Users} fullName="Akshat" /> */}
      {/* <Greeting name="Kuldeep" lastName="Gupta" /> */}
      {/* <Greeting firstName="Sassh" lastName="Gogoi" age={20} /> */}
      {/* <Greeting firstName="Akshat" lastName="Sharma" /> */}
      <Greeting firstName="Akshat" lastname="Sharma">
        <h1>Hii there</h1>
        <p>Hope you are doing good</p>
      </Greeting>
    </div>
  );
}

export default App;
