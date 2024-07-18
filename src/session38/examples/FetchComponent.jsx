// src/pages/Products.jsx
import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

import useFetch from "./useFetch/useFetch";

function FetchComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h1>Users</h1>
      <ListGroup>
        {data &&
          data.map((user) => (
            <ListGroupItem key={user.id}>
              <h2>{user.name}</h2>
            </ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
}

export default FetchComponent;
