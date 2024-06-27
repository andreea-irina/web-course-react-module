export async function getAllDrivers() {
  return fetch("http://ergast.com/api/f1/2024/drivers.json").then((response) =>
    response.json()
  );
}
