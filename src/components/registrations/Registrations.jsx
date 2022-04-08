// import React, { useEffect, useState } from "react";
import "./Registrations.css";
// import axios from "axios";
import { useSelector } from "react-redux";
function Registrations() {
  const users = useSelector((state) => state.createAccountReducer);
  console.log(users);
  // const { userFirstName, userLastName, userEmail, userPassword } = users;
  // const [users, setUsers] = useState();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/user/users")
  //     .then((users) => setUsers(users.data))
  //     .catch((error) => console.log(error));
  // }, [users]);
  // console.log(users);
  return (
    <div className="registrations">
      <table>
        <caption>Users</caption>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, inx) => (
            <tr key={inx}>
              <td>{user?.userFirstName}</td>
              <td>{user?.userLastName}</td>
              <td>{user?.userEmail}</td>
              <td>{user?.userPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registrations;
