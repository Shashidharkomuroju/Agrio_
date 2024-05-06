import React from "react";
import { PRODUCTS } from "../../../../../Products";
import { ShopContext } from "../../../../../Context/ShopContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const Navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h2>Your Cart Item</h2>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total Amount: Rs. {totalAmount}/- </p>
          <button onClick={() => Navigate("/agrio")}>Continue Shopping</button>
        </div>
      ) : (
        <div className="empty">
          <h2>Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
};
