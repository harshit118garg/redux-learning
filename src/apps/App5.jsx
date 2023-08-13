import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Products from "../components/project/Products";
import "../App.css";
import Cart from "../components/project/Cart";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsAsync } from "../toolkit/slices/cart/cartSlice";

const App5 = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    try {
      dispatch(fetchItemsAsync());
    } catch (error) {
      console.log("error in calling cart api");
    }
  }, []);

  const totalCartItems = cartItems.reduce((acc, i) => i.quantity + acc, 0);

  return (
    <Container>
      <Row className="m-2">
        <Button variant="dark" onClick={() => setShowCart(!showCart)}>
          Show Cart {totalCartItems}
        </Button>
      </Row>
      <Row>
        {showCart ? (
          <Col className="m-5">
            <h2 className="display-4 text-center text-white">
              Cart has {cartItems.length} items
            </h2>
            <Cart />
          </Col>
        ) : (
          <Col className="m-5">
            <h2 className="display-4 text-center text-white">Products</h2>
            <Products />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default App5;
