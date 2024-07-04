import { useEffect, useState } from "react";
import "../../App.css";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

function LiveCodeApp() {
  const [users, setUsers] = useState([]);

  // Pas 1: creeaza o functie care apeleaza API-ul
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Pas 2: salvez datele din API undeva
        setUsers(data);
      });
  }

  // Pas 3: apeleaza API-ul doar o singura data, dupa ce s-a incarcat pagina
  useEffect(() => {
    getUsers();
  }, []);

  // Pas 4: afisam datele de la API
  return (
    <div className="app-content">
      <AddUserForm />

      <UserList users={users} />
    </div>
  );
}

export default LiveCodeApp;
