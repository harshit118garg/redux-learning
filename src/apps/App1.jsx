import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import Account from "../components/Account";
import Bonus from "../components/Bonus";

function App1() {
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => setAccount({ amount: account.amount + 1 });
  const decrement = () => setAccount({ amount: account.amount - 1 });
  const incrementByAmount = (value) =>
    setAccount({ amount: account.amount + Number(value) });
  const incrementBonus = () => setBonus({ points: bonus.points + 1 });

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="display-3">App</h2>
          <h3 className="display-4">Current Amount : {account.amount}</h3>
          <h3 className="display-4">Total Bonus : {bonus.points}</h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Account
            account={account}
            increment={increment}
            decrement={decrement}
            incrementByAmount={incrementByAmount}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Bonus bonus={bonus} incrementBonus={incrementBonus} />
        </Col>
      </Row>
    </Container>
  );
}

export default App1;
