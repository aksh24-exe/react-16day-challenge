import React, { use } from "react";
import User from "./User";
// import { v4 as uuid } from "uuid";

function Users({ users, increaseAge, deleteUser }) {
  return (
    <>
      {/* {users.map((user) => (
        <User userDetails={user} />
      ))} */}
      {users.map((user) => (
        <User
          key={user.id}
          {...user}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      ))}
    </>
  );
}

export default Users;
