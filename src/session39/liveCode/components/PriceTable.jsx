import { Spinner, Table } from "react-bootstrap";

import useFetch from "../hooks/useFetch";

export default function PriceTable() {
  const { data, loading, error } = useFetch(
    "https://api.n.exchange/en/api/v1/price/BTCETH/history/"
  );

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table>
      <thead>
        <tr>
          <th>Created on</th>
          <th>Ask</th>
          <th>Bid</th>
        </tr>
      </thead>

      <tbody>
        {data &&
          data.prices.slice(0, 20).map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.created_on).toUTCString()}</td>
              <td>{parseFloat(item.ticker.ask).toFixed(2)}</td>
              <td>{parseFloat(item.ticker.bid).toFixed(2)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
