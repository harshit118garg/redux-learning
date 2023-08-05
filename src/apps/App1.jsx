import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "../App.css";
import Account from "../components/Account";
import Bonus from "../components/Bonus";
import { useDispatch, useSelector } from "react-redux";

function App1() {
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);

  const { amount, pending, error } = account;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="display-3">App</h2>
          {pending ? (
            <Spinner animation="border" variant="primary" />
          ) : error ? (
            <h3 className="text-bg-danger">{error} Occurred</h3>
          ) : (
            <h3 className="display-4">Current Amount : {amount}</h3>
          )}
          <h3 className="display-4">Total Bonus : {points}</h3>
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
