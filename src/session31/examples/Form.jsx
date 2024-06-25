import React, { useState } from "react";

function Form() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState, // Copiaza toate valorile din state-ul anterior
      [name]: value, // Actualizeaza valoarea campului cu numele `name`
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <p>
        Username: {formState.username}, Email: {formState.email}
      </p>
    </form>
  );
}

export default Form;
