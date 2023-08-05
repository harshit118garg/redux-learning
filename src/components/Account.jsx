import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getUser, increment, incrementBy } from "../redux/actions";

const Account = () => {
  const amount = useSelector((state) => state.account.amount);
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="display-3">Account Component</h2>
      <h3 className="h3">Amount : {amount}</h3>
      <div className="d-grid gap-2">
        <Button onClick={() => dispatch(increment())}>Increment +</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement -</Button>
        <Form.Control
          type="number"
          value={value}
          name="value"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementBy(value))}>
          Increment By
        </Button>
        <Form.Control
          type="text"
          value={userId}
          name="userId"
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button onClick={() => dispatch(getUser(userId))}>Get User</Button>
      </div>
    </>
  );
};

export default Account;
