import { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

function AddUserForm(props) {
  const [name, setName] = useState("");
  const { handleAdd } = props;

  const handleSubmit = (event) => {
    // Fix pentru a nu se mai da refresh la pagina cand userul da click pe "submit"\
    event.preventDefault();

    // API call pentru a adauga un user la lista
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((respone) => respone.json())
      .then((data) => handleAdd(data));
  };

  return (
    <Form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <FormGroup controlId="UserName">
        <FormLabel>Name</FormLabel>
        <FormControl
          type="text"
          name="name"
          placeholder="Please enter your name"
          value={name}
          onChange={(event) => {
            // Pas 1: extragem inputul userului
            const userInput = event.target.value;

            // Pas 2: modificam variabila "name" care va fi afisata in interfata
            setName(userInput);
          }}
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddUserForm;
