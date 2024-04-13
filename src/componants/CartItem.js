import React from "react";
import { Button, Stack } from "react-bootstrap";
import Storeitems from "../data/StoreItems.json";
import formatCurrency from "./formatCurrancy";
import { useShoppingCart } from "../context/CartContext";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = Storeitems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap="2" className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity >= 1 && <span className="text-muted">x: {quantity}</span>}
        </div>
        <div className=" text-muted">{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
