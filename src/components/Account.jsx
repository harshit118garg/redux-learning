import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Account = ({account, increment, decrement, incrementByAmount}) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h2 className="display-3">Account Component</h2>
      <h3 className="h3">Amount : {account.amount}</h3>
      <div className="d-flex gap-2 justify-content-center">
        <Button onClick={increment}>Increment +</Button>
        <Button onClick={decrement}>Decrement -</Button>
        <Form.Control
          type="number"
          value={value}
          name="value"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => incrementByAmount(value)}>Increment By</Button>
      </div>
    </>
  );
};

export default Account;
