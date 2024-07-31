import { useContext } from "react";
import { Card, Offcanvas, Spinner } from "react-bootstrap";

import { DashboardContext } from "../store/Dashboard/context";
import useFetch from "../hooks/useFetch";

export default function DashboardDrawer({ show, onClose }) {
  const { state: dashboardState } = useContext(DashboardContext);

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Dashboard</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {dashboardState.coins.length > 0 ? (
          dashboardState.coins.map((coin) => (
            <CoinCard key={coin} coin={coin} />
          ))
        ) : (
          <div> No coins added yet</div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

function CoinCard({ coin }) {
  const { data, loading, error } = useFetch(
    `https://api.n.exchange/en/api/v1/price/${coin}USD/latest`
  );

  if (loading) return <Spinner />;

  if (error) return <div>{error.message}</div>;

  const { rate, created_on } = data[0];

  return (
    <Card className="mb-4">
      <Card.Img
        src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${coin}--big.svg`}
        alt={coin}
        variant="top"
      />

      <Card.Body>
        <Card.Title>{coin}</Card.Title>

        <Card.Text className="mb-0 fw-bold">
          {parseFloat(rate).toLocaleString()} USD
        </Card.Text>

        <Card.Text className="text-muted">
          {new Date(created_on).toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
