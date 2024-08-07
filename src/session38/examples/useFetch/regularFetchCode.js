export function fetchUsers(doSomethingCallback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      doSomethingCallback(data);
    });
}
