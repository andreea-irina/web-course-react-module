import { Container, Row, Spinner } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import PriceTable from "../components/PriceTable";
import CoinSummaryHeader from "../components/CoinSummaryHeader";

export default function CoinPage({ coin }) {
  const {
    data: historyData,
    loading: historyLoading,
    error: historyError,
  } = useFetch(`https://api.n.exchange/en/api/v1/price/${coin}USD/history/`);
  const {
    data: latestData,
    loading: latestLoading,
    error: latestError,
  } = useFetch(`https://api.n.exchange/en/api/v1/price/${coin}USD/latest/`);

  if (historyLoading || latestLoading)
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Spinner />
      </Container>
    );

  if (historyError || latestError) return <div>{historyError.message}</div>;

  return (
    <Container>
      <Row className="mb-2">
        <CoinSummaryHeader coin={coin} data={latestData[0]} />
      </Row>

      <Row>
        <PriceTable prices={historyData.prices} />
      </Row>
    </Container>
  );
}
