import { useState } from "react";

export default function ConditionalRendering() {
  const [person, setPerson] = useState({
    name: "Jane Doe",
    age: 16,
  });

  // Metoda 1: functie care returneaza cod HTML
  function isOldEnoughToDrive() {
    if (person.age >= 18) return <span>Can drive!</span>;
    else return <span>Cannot drive!</span>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={() => setPerson({ ...person, age: 20 })}>
        Modify Age
      </button>

      <h3>{person.name}</h3>
      <p>{person.age}</p>

      {/* Metoda 1: functie care returneaza cod HTML  */}
      {isOldEnoughToDrive()}

      {/* Metoda 2: afisam sau nu o anumita componenta, in functie de o conditie */}
      {person.age >= 20 && <span>Is older than 20!</span>}

      {/* Metoda 3: afisam fie o componenta, fie alta, in functie de o conditie */}
      {person.age >= 18 ? <span>Can drink!</span> : <span>Go 2 Vaslui!</span>}
    </div>
  );
}
