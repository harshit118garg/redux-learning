import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchUserAccount,
} from "../toolkit/slices/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="display-3">Account Component</h2>
      <h3 className="h3">Amount : {amount}</h3>
      <div className="container text-center">
        <div className="row mb-4 gx-4">
          <div className="col-6">
            <Button onClick={() => dispatch(increment())}>Increment +</Button>
          </div>
          <div className="col-6">
            <Button onClick={() => dispatch(decrement())}>Decrement -</Button>
          </div>
        </div>
        <div className="row mb-4 gx-4">
          <div className="col-6">
            <Form.Control
              type="number"
              value={value}
              name="value"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col-6">
            <Button onClick={() => dispatch(incrementByAmount(value))}>
              Increment By
            </Button>
          </div>
        </div>
        <div className="row mb-4 gx-4">
          <div className="col-6">
            <Form.Control
              type="text"
              value={userId}
              name="userId"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="col-6">
            <Button onClick={() => dispatch(fetchUserAccount(userId))}>
              Get User
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
