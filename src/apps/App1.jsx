import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import Account from "../components/Account";
import Bonus from "../components/Bonus";

function App1() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="display-3">App</h2>
          <h3 className="display-4">Current Amount : </h3>
          <h3 className="display-4">Total Bonus : </h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Account />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Bonus />
        </Col>
      </Row>
    </Container>
  );
}

export default App1;
