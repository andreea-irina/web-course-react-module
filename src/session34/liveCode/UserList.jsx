import { Card, CardBody, CardTitle } from "react-bootstrap";
import "./UserList.css";

function UserItem(props) {
  const { user } = props;

  return (
    <li
      style={{
        marginBottom: "16px",
      }}
    >
      <Card>
        <CardTitle style={{ padding: "5px" }}>
          {user.name} - {user.email}
        </CardTitle>

        <CardBody>
          {user.username} - {user.phone}
        </CardBody>
      </Card>
    </li>
  );
}

function UserList(props) {
  const { users } = props;

  return (
    <ul>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
}

export default UserList;
