import { Col, Container, Row } from "react-bootstrap";

import PriceTable from "../components/PriceTable";

export default function HomePage() {
  return (
    <Container>
      <h1>Home Page</h1>

      <Row>
        <Col xs={12} md={4}>
          coloana 1
        </Col>
        <Col>
          <PriceTable />
        </Col>
      </Row>
    </Container>
  );
}
