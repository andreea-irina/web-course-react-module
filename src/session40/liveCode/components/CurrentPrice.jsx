import { useContext } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";

function getTitle(pair) {
  switch (pair) {
    case "BTCETH":
      return "Bitcoin vs Ethereum";
    default:
      return pair;
  }
}

export default function CurrentPrice({ pairTitle, data }) {
  const { state } = useContext(ThemeContext);
  const textColor = state.theme === "light" ? "dark" : "light";
  const subTextColor = state.theme === "light" ? "secondary" : "light";

  const rateChange = (
    parseFloat(data.ticker.ask) - parseFloat(data.ticker.bid)
  ).toFixed(4);
  const rateChangePercentage = (
    (rateChange / parseFloat(data.ticker.bid)) *
    100
  ).toFixed(2);

  return (
    <Container className="summary-card mb-4">
      <Row>
        <Col xs={3} className="d-flex justify-content-center m-2">
          <img
            height={100}
            src="https://cryptorunner.com/wp-content/uploads/2018/01/bitcoin-vs-ethereum-o-1024x650.png"
            alt={pairTitle}
          />
        </Col>

        <Col className={`text-${textColor}`}>
          <h2>{getTitle(pairTitle)}</h2>
          <Badge className="mx-2">{data.market.code}</Badge>
          <span>{data.market.name}</span>

          <div className="d-flex align-items-end gap-2">
            <span className="rate-display">
              {parseFloat(data.rate).toFixed(4)} ETH
            </span>
            <span
              className={`rate-change ${
                rateChange < 0 ? "text-danger" : "text-success"
              }`}
            >
              {rateChange} ({rateChangePercentage}%)
            </span>
          </div>

          <br />

          <p className={`text-${subTextColor}`}>
            As of today at {new Date(data.created_on).toUTCString()}
          </p>
          {/* <div>
            <strong>Rate:</strong> {data.rate} <br />
            <strong>Ask:</strong> {data.ticker.ask} <br />
            <strong>Bid:</strong> {data.ticker.bid} <br />
            <strong>Created On:</strong>
            {new Date(data.created_on).toDateString()} <br />
            <strong>Expiration Time:</strong>
            {new Date(data.expiration_time_unix).toDateString()} <br />
            <br />
            <strong>Allowed Historic Price Variance:</strong>
            {data.allowed_historic_price_variance ? "Yes" : "No"} <br />
            <strong>Allowed Historic Price Age:</strong>
            {data.allowed_historic_price_age ? "Yes" : "No"} <br />
          </div>{" "} */}
        </Col>
      </Row>
    </Container>
  );
}
