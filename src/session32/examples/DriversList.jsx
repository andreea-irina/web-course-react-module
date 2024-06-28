import { useEffect, useState } from "react";
import { getAllDrivers } from "./api";
import DriverCard from "./DriverCard";
import "./DriversList.css";

function DriversList() {
  const [drivers, setDrivers] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    getAllDrivers().then((data) => setDrivers(data.MRData.DriverTable.Drivers));
  }, []);

  // useEffect(() => {
  //   setSeconds(seconds + 1);
  // }, [seconds]);

  return (
    <div>
      <h1>Drivers</h1>

      <span>{seconds}</span>

      <ul>
        {drivers.map((driver) => (
          <li key={driver.driverId}>
            <DriverCard driver={driver} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DriversList;
