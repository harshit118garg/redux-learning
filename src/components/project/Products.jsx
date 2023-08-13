import React, { useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { fetchProductsAsync } from "../../toolkit/slices/products/productSlice";
import {
  addItemAsync,
  updateItemAsync,
} from "../../toolkit/slices/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const phonesdata = useSelector((state) => state.product.products);
  const itemsData = useSelector((state) => state.cart.items);

  useEffect(() => {
    try {
      dispatch(fetchProductsAsync());
    } catch (error) {
      console.log("error in calling api");
    }
  }, []);

  const addToCartHandler = (phone) => {
    const recordExists =
      itemsData.findIndex((item) => item.id === phone.id) === -1 ? false : true;
    if (!recordExists) {
      dispatch(addItemAsync(phone));
    } else {
      const itemIdx = itemsData.findIndex((item) => item.id === phone.id);
      const newQuant = itemsData[itemIdx].quantity + 1;
      dispatch(
        updateItemAsync({
          id: phone.id,
          modifiedItem: { quantity: newQuant },
        })
      );
    }
  };

  return (
    <>
      <Container className="bg-warning p-2 rounded-2">
        <Row xs={1} sm={2} md={3} className="cardRow">
          {phonesdata.length > 0 &&
            phonesdata.map((phone) => (
              <Card key={phone.id}>
                <Card.Body>
                  <Card.Title>{phone.brand}</Card.Title>
                  <Card.Text className="text-bg-danger rounded-4 text-center">
                    {phone.price}
                  </Card.Text>
                  <Card.Text>{phone.description}</Card.Text>
                  <Button
                    variant="dark"
                    className="w-100"
                    onClick={() => addToCartHandler(phone)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
