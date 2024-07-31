import React, { useContext } from "react";
import { Badge, Table } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";
import styles from "./PriceTable.module.css";

const determineBadge = (askPrice) => {
  if (askPrice > 930) {
    return (
      <Badge bg="danger" className={styles.badge}>
        High
      </Badge>
    );
  } else if (askPrice > 920) {
    return (
      <Badge bg="warning" className={styles.badge}>
        Medium
      </Badge>
    );
  } else {
    return (
      <Badge bg="success" className={styles.badge}>
        Low
      </Badge>
    );
  }
};

export default function PriceTable({ prices }) {
  const { state } = useContext(ThemeContext);

  return (
    <Table borderless hover variant={state.theme} className={styles.priceTable}>
      <thead>
        <tr>
          <th>Created On</th>
          <th>Ask</th>
          <th>Bid</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {prices.splice(0, 10).map((price, index) => (
          <tr key={index}>
            <td>{new Date(price.created_on).toUTCString()}</td>
            <td>{parseFloat(price.ticker.ask).toFixed(2)}</td>
            <td>{parseFloat(price.ticker.bid).toFixed(2)}</td>
            <td>{determineBadge(parseFloat(price.ticker.ask))}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
