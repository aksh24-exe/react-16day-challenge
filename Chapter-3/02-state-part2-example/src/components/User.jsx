import React from "react";

// function User({ userDetails }) {
//   return (
//     <>
//       <div className="user">
//         <p key={uuid()}>firstName: {userDetails.firstName}</p>
//         <p key={uuid()}>lastName: {userDetails.lastName}</p>
//         <p key={uuid()}>age: {userDetails.age}</p>
//       </div>
//     </>
//   );
// }

function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
  return (
    <>
      <div className="user">
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>age: {age}</p>
        <button
          onClick={() => {
            increaseAge(id);
          }}
        >
          Increase age
        </button>
        <button
          onClick={() => {
            deleteUser(id);
          }}
        >
          Delete User
        </button>
      </div>
    </>
  );
}

export default User;
