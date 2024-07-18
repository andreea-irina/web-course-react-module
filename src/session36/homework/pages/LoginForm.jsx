import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AuthenticationContext } from "../store/Authentication/context";

function LoginForm() {
  const { setUser } = useContext(AuthenticationContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formValues.email.includes("test@gmail.com") &&
      formValues.password.includes("test")
    ) {
      setUser(formValues.email);
    } else {
      setUser(null);
      alert("Login failed!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={formValues.email}
          onChange={(event) => {
            setFormValues({
              ...formValues,
              email: event.target.value,
            });
          }}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formValues.password}
          onChange={(event) => {
            setFormValues({
              ...formValues,
              password: event.target.value,
            });
          }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
