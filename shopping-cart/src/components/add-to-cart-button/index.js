import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slice/cart-slice";

const AddToCartButton = ({ productItem }) => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const handelAddToCart = () => {
    dispatch(addToCart(productItem));
  };
  const handelRemoveFromCart = () => {
    dispatch(removeFromCart(productItem?.id));
  };

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handelRemoveFromCart
            : handelAddToCart
        }
      >
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove From Cart"
          : "Add To Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
