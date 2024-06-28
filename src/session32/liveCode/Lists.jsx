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

function DriverCard(props) {
  const { driver } = props;

  return (
    <div className="driver-card">
      <h3>
        {driver.givenName} {driver.familyName}
      </h3>
      <p>{driver.dateOfBirth}</p>
    </div>
  );
}

export default function Lists() {
  return (
    <ol>
      {/* Problema: */}
      {/* 
      <DriverCard driver={DRIVERS[0]} />
      <DriverCard driver={DRIVERS[1]} />
      <DriverCard driver={DRIVERS[2]} /> 
      */}

      {/* Solutie: */}
      {DRIVERS.map((driver, index) => (
        <DriverCard key={index} driver={driver} />
      ))}
    </ol>
  );
}
