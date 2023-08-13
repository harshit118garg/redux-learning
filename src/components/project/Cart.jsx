import React from "react";
import { Button, Card, Container, Row, Stack } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemAsync
} from "../../toolkit/slices/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const itemsData = useSelector((state) => state.cart.items);

  const totalAmount = itemsData
    .reduce((acc, it) => it.price * it.quantity + acc, 0)
    .toFixed(2);

  return (
    <>
      <Container className="bg-danger p-2 rounded-2">
        <Row xs={1} sm={2} md={3} className="cardRow">
          {itemsData.length > 0 &&
            itemsData.map((phone) => (
              <Card key={phone.id}>
                <Card.Body>
                  <Card.Title>{phone.brand}</Card.Title>
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-evenly"
                  >
                    <Card.Text className="text-bg-danger rounded-4 text-center p-2">
                      {phone.price}
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteItemAsync(phone.id))}
                    >
                      <BsTrash />
                    </Button>
                  </Stack>
                  <Card.Text className="text-bg-warning rounded-4 text-center p-2 fs-4">
                      Item Quantity {phone.quantity}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Row>
        <Row className="bg-dark m-3 rounded-3">
          <h2 className="display-3 text-light text-center">
            Total: {totalAmount}
          </h2>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
