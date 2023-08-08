import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import Account from "../components/Account";
import Bonus from "../components/Bonus";
import { useDispatch, useSelector } from "react-redux";
import Interest from "../components/Interest";
import Admin from "../components/Admin";

function App4() {
  //   const amount = useSelector((state) => state.account.amount);
  //   const points = useSelector((state) => state.bonus.points);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="display-3">App</h2>
          <h3 className="display-4">Current Amount : {`amount`}</h3>
          <h3 className="display-4">Total Bonus : {`points`}</h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Admin />
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
          <Interest />
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

export default App4;
