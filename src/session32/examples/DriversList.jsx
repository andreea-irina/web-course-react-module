import { useEffect, useState } from "react";
import { getAllDrivers } from "./api";
import DriverCard from "./DriverCard";
import "./DriversList.css";

const DRIVERS = [
  {
    driverId: "alonso",
    givenName: "Fernando",
    familyName: "Alonso",
    dateOfBirth: "1981-07-29",
  },
  {
    driverId: "hamilton",
    givenName: "Lewis",
    familyName: "Hamilton",
    dateOfBirth: "1985-01-07",
  },
  {
    driverId: "vettel",
    givenName: "Sebastian",
    familyName: "Vettel",
    dateOfBirth: "1987-07-03",
  },
];

function DriversList() {
  // const [drivers, setDrivers] = useState([]);
  // const [teams, setTeams] = useState({});
  // const [view, setView] = useState("all");

  // useEffect(() => {
  //   getAllDrivers().then((data) => {
  //     setDrivers(data.MRData.DriverTable.Drivers);
  //   });
  // }, []);

  return (
    <div>
      <h1>Drivers</h1>
      <ul>
        {DRIVERS.map((driver) => (
          <li key={driver.driverId}>
            <DriverCard driver={driver} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DriversList;
