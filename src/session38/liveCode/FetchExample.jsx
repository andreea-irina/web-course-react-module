import { Container, ListGroup, ListGroupItem, Spinner } from "react-bootstrap";

import { useFetch } from "./hooks/useFetch";

export default function FetchExample() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <Container>
      <h1>User</h1>

      {loading && <Spinner />}

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
