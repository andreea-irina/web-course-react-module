import { useContext } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";
import { DashboardContext } from "../store/Dashboard/context";
import { addCoin, removeCoin } from "../store/Dashboard/actions";
import { AlertContext } from "../store/Alert/context";

export default function CoinSummaryHeader({ coin, data }) {
  const { state: themeState } = useContext(ThemeContext);
  const { state: dashboardState, dispatch: dashboardDispatch } =
    useContext(DashboardContext);
  const { addAlert } = useContext(AlertContext);

  const isCoinInDashboard = dashboardState.coins.includes(coin);
  const handleDashboardAction = () => {
    if (isCoinInDashboard) {
      dashboardDispatch(removeCoin(coin));
      addAlert("Coin removed from dashboard", "danger");
    } else {
      dashboardDispatch(addCoin(coin));
      addAlert("Coin added to dashboard", "success");
    }
  };

  const { theme } = themeState;
  const textColor = theme === "light" ? "dark" : "light";
  const subTextColor = theme === "light" ? "secondary" : "light";

  const { rate, market, created_on } = data;
  const { url, label, place } = getCoinData(coin);
  const ratePrice = parseFloat(rate).toLocaleString();
  const change = -1185; // Static data
  const changePercentage = -1.81; // Static data

  return (
    <Container className={`text-${textColor} mb-4`}>
      <Row className="align-items-center mb-4">
        <Col xs="auto" className="mb-2">
          <img height={100} src={url} alt={coin} />
        </Col>

        <Col>
          <h1 className="mb-0">{label}</h1>
          <Badge bg={textColor} text={theme}>
            #{place}
          </Badge>
        </Col>

        <Col xs="auto">
          <Button
            variant={isCoinInDashboard ? textColor : `outline-${textColor}`}
            onClick={handleDashboardAction}
          >
            {isCoinInDashboard ? "Added to Dashboard" : "Add to My Dashboard"}
          </Button>
        </Col>
      </Row>

      <Row className="align-items-end mb-2">
        <Col xs="auto">
          <Badge className="mx-2">{market.code}</Badge>
          <span>{market.name}</span>
          <h2 className="mb-0 fw-bold">{ratePrice} USD</h2>
        </Col>

        <Col xs="auto" className="text-danger">
          <h4 className="mb-0">
            {change.toLocaleString(undefined, { maximumFractionDigits: 0 })}{" "}
            {changePercentage}%
          </h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className={`text-${subTextColor}`}>
            As of today at {new Date(created_on).toUTCString()}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

const getCoinData = (coin) => {
  switch (coin) {
    case "BTC": {
      return {
        url: "https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg",
        label: "Bitcoin",
        place: "1",
      };
    }

    case "ETH": {
      return {
        url: "https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg",
        label: "Ethereum",
        place: "2",
      };
    }

    case "LTC": {
      return {
        url: "https://s3-symbol-logo.tradingview.com/crypto/XTVCLTC--big.svg",
        label: "Litecoin",
        place: "20",
      };
    }

    default:
      return { url: "", label: "", place: "" };
  }
};
