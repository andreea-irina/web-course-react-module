import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./session34/examples/UserList";
import UserAddForm from "./session34/examples/UserAddForm";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="app-content">
      <div style={{ display: "flex", gap: "30px" }}>
        <UserList users={users} onDeleteUser={deleteUser} />

        <UserAddForm onAddUser={addUser} />
      </div>
    </div>
  );
}

export default App;
