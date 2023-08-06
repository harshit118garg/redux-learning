import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { rateIncrement, stepRateIncrement } from "../redux/reducers/interest";

const Interest = () => {
  const rate = useSelector((state) => state.interest.rate);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="display-3">Interest Component</h2>
      <h3 className="h3">Total Interest : {rate}</h3>
      <div className="d-flex gap-2 justify-content-center">
        <Button onClick={() => dispatch(rateIncrement())}>Increment +</Button>
        <Button onClick={() => dispatch(stepRateIncrement(0.5))}>
          Increment +
        </Button>
      </div>
    </>
  );
};

export default Interest;
