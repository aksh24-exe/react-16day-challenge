// import ShowFullName from "./ShowFullName"

// function Greeting(props) {
//    console.log(props);  // object
//   return (
//       <h1>{`Hello ${props.name} ${props.lastName}`}</h1>
//   )
// }

// function Greeting({ firstName, lastName}) {
//     //   return <h1>{`Hello ${firstName} ${lastName} ${fullName} `}</h1>;
//     return <ShowFullName fName={firstName} lName={lastName}/>
// }

function Greeting({ firstName, lastName, children }) {
  //   return <h1>Hello {props.firstName} {props.lastName}  </h1>;
  // return <ShowFullName {...props} />
  return (
      <>
          {children}
          <div>
              <h3>
                  {firstName} {lastName}
              </h3>
      </div>
    </>
  );
}

export default Greeting;
