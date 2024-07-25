import { Col, Container, Row, Spinner } from "react-bootstrap";

import useFetch from "../hooks/useFetch";
import PriceTable from "../components/PriceTable";
import CurrentPrice from "../components/CurrentPrice";

export default function HomePage() {
  const {
    data: historyData,
    loading: historyLoading,
    error: historyError,
  } = useFetch(
    "https://private-anon-ca76953b65-nexchange2.apiary-proxy.com/en/api/v1/price/BTCETH/history/"
  );

  const {
    data: currentData,
    loading: currentLoading,
    error: currentError,
  } = useFetch("https://api.n.exchange/en/api/v1/price/BTCETH/latest/");

  if (historyLoading || currentLoading)
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Spinner />
      </Container>
    );

  if (historyError) return <div>Error: {historyError.message}</div>;
  if (currentError) return <div>Error: {currentError.message}</div>;

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <CurrentPrice pairTitle="BTCETH" data={currentData[0]} />
        </Col>

        <Col>
          <PriceTable prices={historyData.prices} />
        </Col>
      </Row>
    </Container>
  );
}
