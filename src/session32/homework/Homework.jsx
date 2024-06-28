import { useState } from "react";

function PostCard() {
  // Adauga props relevante
  return (
    <div>
      <h2>Post Title</h2>
      <p>Post Body</p>
    </div>
  );
}

function UserCard() {
  // Adauga props relevante
  return (
    <div>
      <h2>User Name</h2>
      <p>User Email</p>
    </div>
  );
}

function Homework() {
  const [view, setView] = useState("users");

  // Pas 1: Adauga un buton cu textul "Posts" care, la click, sa schimbe valoarea view-ului in "posts"
  // Pas 2: In functie de valoarea view-ului, sa se afiseze componenta PostCard sau UserCard
  // Pas 3: Daca view-ul este "posts", schimba textul butonului in "Users"
  // Pas 4: Daca view-ul este "users", schimba textul butonului in "Posts"

  // Datele le luam de la url-ul "https://jsonplaceholder.typicode.com" unde adaugam /users sau /posts in functie de view

  // Pas 5: Foloseste useEffect si useState pentru a face request-ul catre server si a salva datele in state
  // Pas 6: Inlocuieste datele statice din PostCard si UserCard cu datele de la url-ul de mai sus

  return null;
}

export default Homework;
