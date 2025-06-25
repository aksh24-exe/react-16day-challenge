import logo from "./logo.svg";
import "./App.css";
import User from "./Components/User";

const users = [
  { id: 1, firstName: "Harshit", lastName: "Sharma" },
  { id: 2, firstName: "Akshat", lastName: "Sharma" },
  { id: 3, firstName: "Ayush", lastName: "Sharma" },
  { id: 4, firstName: "Akansha", lastName: "Sharma" },
  { id: 5, firstName: "Sassh", lastName: "gogoi" },
];

//map method

function App() {
  return (
    <>
      <div className="App">
        {/* <User
          firstName={users[0].firstName}
          lastName={users[0].lastName}
          id={users[0].id}
        />
        <User
          firstName={users[1].firstName}
          lastName={users[1].lastName}
          id={users[1].id}
        />
        <User
          firstName={users[2].firstName}
          lastName={users[2].lastName}
          id={users[2].id}
        /> */}

        {/*  using map function */}

        {/* {users.map((user) => {
          return <User firstName={user.firstName} lastName={user.lastName} id={user.id} />
        })} */}

        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </div>
    </>
  );
}

export default App;
