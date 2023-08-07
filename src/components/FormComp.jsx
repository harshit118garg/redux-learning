import React, { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserData,
  userUpdateData,
} from "../toolkit/slices/userSlices/users";

const FormComp = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userId, setUserId] = useState(1);

  const handleClick = () => {
    if (userName || userEmail || userPhone || userAddress || age) {
      setTimeout(() => {
        dispatch(
          addUserData({
            name: userName,
            age: age,
            email: userEmail,
            address: userAddress,
            phone: userPhone,
          })
        );
      }, 1500);
      setUserName("");
      setUserEmail("");
      setUserAddress("");
      setUserPhone("");
      setAge(0);
    }
  };

  const userUpdated = users.find((user) => user.id === Number(userId));

  const handleThisUser = (userId) => {
    setUserName(userUpdated.name);
    setUserEmail(userUpdated.email);
    setUserAddress(userUpdated.address);
    setUserPhone(userUpdated.phone);
    setAge(userUpdated.age);
  };

  const handleUpdate = (userId) => {
    const updateUserData = {
      id: userUpdated.id,
      name: userName,
      age: age,
      email: userEmail,
      address: userAddress,
      phone: userPhone,
    };
    dispatch(userUpdateData(updateUserData));
    setUserName("");
    setUserEmail("");
    setUserAddress("");
    setUserPhone("");
    setAge(0);
  };

  return (
    <>
      <Container className="bg-warning-subtle p-lg-3">
        <Row className="mb-3">
          <div className="col-3">
            <Form.Control
              type="text"
              name="userName"
              value={userName}
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col-3">
            <Form.Control
              type="number"
              name="age"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="col-3">
            <Form.Control
              type="email"
              name="userEmail"
              value={userEmail}
              placeholder="UserEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="col-3">
            <Form.Control
              type="text"
              name="userPhone"
              value={userPhone}
              placeholder="UserPhone"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
        </Row>
        <Row className="align-items-center">
          <div className="col-3">
            <Form.Control
              type="text"
              name="userAddress"
              value={userAddress}
              placeholder="UserAddress"
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div className="col-3">
            <Button className="w-100" onClick={handleClick}>
              Add User
            </Button>
          </div>
          <div className="col-3">
            <Form.Control
              type="number"
              name="userId"
              value={userId}
              placeholder="UserId"
              onChange={(e) => setUserId(e.target.value)}
            />
            <Button className="w-100" onClick={() => handleThisUser(userId)}>
              Get This User
            </Button>
          </div>
          <div className="col-3">
            <Button className="w-100" onClick={handleUpdate}>
              Update User
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default FormComp;
