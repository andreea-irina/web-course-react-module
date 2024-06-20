import React from "react";

import NavBar from "./NavBar";
import UserItem from "./UserItem";
// import NavBarClass from "./NavBarClass";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      {/* Restul paginii continua de aici */}
      <div className="app-content">
        <UserItem name="Jane Doe" email="jane.doe@gmail.com" />
      </div>
    </div>
  );
}

export default App;
