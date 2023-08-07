import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { deleteUserData } from "../toolkit/slices/userSlices/users";

const TableComp = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <Container className="bg-info-subtle">
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => dispatch(deleteUserData(user.id))}
                        >
                          <BsTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableComp;
