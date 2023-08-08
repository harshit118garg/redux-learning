import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../toolkit/slices/bonusSlice";

const Bonus = () => {
  // const points = useSelector((state) => state.bonus.points);
  // const dispatch = useDispatch();

  return (
    <>
      <h2 className="display-3">Bonus Component</h2>
      <h3 className="h3">Total Bonus : {`points`}</h3>
      <div className="d-flex gap-2 justify-content-center">
        {/* <Button onClick={() => dispatch(increment())}>Increment +</Button> */}
      </div>
    </>
  );
};

export default Bonus;
