import "./DriverCard.css";

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

export default DriverCard;
