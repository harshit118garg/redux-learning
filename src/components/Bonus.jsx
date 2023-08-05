import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Bonus = () => {
  const [bonus, setBonus] = useState({ points: 0 });
  const incrementBonus = () => setBonus({ points: bonus.points + 1 });
  return (
    <>
      <h2 className="display-3">Bonus Component</h2>
      <h3 className="h3">Total Bonus : {bonus.points}</h3>
      <div className="d-flex gap-2 justify-content-center">
        <Button onClick={incrementBonus}>Increment +</Button>
      </div>
    </>
  );
};

export default Bonus;
