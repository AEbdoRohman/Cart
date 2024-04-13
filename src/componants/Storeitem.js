import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrancy";
import { useShoppingCart } from "../context/CartContext";
const Storeitem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  let quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div>
          {quantity === 0 ? (
            <Button
              variant="outline-dark"
              size="sm"
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column gap-3">
              <div>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <span className="mx-3">{quantity} in cart</span>

                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Storeitem;
