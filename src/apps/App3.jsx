import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormComp from "../components/FormComp";
import TableComp from "../components/TableComp";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../toolkit/slices/userSlices/users";

export default function App3() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <>
      <Container>
        <Row className="p-5">
          <Col>
            <FormComp />
          </Col>
        </Row>
        {users && users.length > 0 && (
          <Row className="p-5">
            <Col>
              <TableComp />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
