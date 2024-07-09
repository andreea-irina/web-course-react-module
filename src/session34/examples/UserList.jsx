import { Button, Card, CardFooter, CardText, CardTitle } from "react-bootstrap";

function UserItem({ user, onDeleteUser }) {
  return (
    <Card style={{ marginBottom: "16px" }}>
      <CardTitle style={{ padding: "10px" }}>
        {user.name} - {user.email}
      </CardTitle>
      <CardText style={{ padding: "10px" }}>
        {user.username} - {user.phone}
      </CardText>

      <CardFooter>
        <Button
          size="sm"
          variant="danger"
          onClick={() => onDeleteUser(user.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

function UserList({ users, onDeleteUser }) {
  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </ul>
  );
}
export default UserList;
