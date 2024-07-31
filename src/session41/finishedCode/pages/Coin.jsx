import { Container, Row, Spinner } from "react-bootstrap";

import CoinSummaryHeader from "../components/CoinSummaryHeader";
import PriceTable from "../components/PriceTable";
import useFetch from "../hooks/useFetch";

export default function CoinPage({ coin }) {
  const { data, loading, error } = useFetch(
    `https://api.n.exchange/en/api/v1/price/${coin}USD/latest`
  );

  const {
    data: historyData,
    loading: historyLoading,
    error: historyError,
  } = useFetch(
    `https://private-anon-ca76953b65-nexchange2.apiary-proxy.com/en/api/v1/price/${coin}USD/history/`
  );

  if (loading || historyLoading)
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Spinner />
      </Container>
    );

  if (error) return <div>{error.message}</div>;
  if (historyError) return <div>{historyError.message}</div>;

  return (
    <Container>
      <Row>
        {data && data.length > 0 && (
          <CoinSummaryHeader coin={coin} data={data[0]} />
        )}
      </Row>

      <Row>
        <PriceTable prices={historyData.prices} />
      </Row>
    </Container>
  );
}
