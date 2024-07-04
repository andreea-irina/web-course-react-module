import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function UserAddForm({ onAddUser }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = { ...formValues };

    // Call the API to add the user
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        // Call the parent function to update the user list
        onAddUser(data);
      });
  };

  const handleReset = () => {
    setFormValues({
      name: "",
      email: "",
      username: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group controlId="formUserEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formUserUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="formUserPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </Form.Group>

      <br />

      <div style={{ display: "flex", gap: "16px" }}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </Form>
  );
}

export default UserAddForm;
