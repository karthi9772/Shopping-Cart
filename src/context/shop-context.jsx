import { createContext, useState } from "react";
import { Products } from "../products";

export const ShopContext = createContext(null);

const DefaultCartItems = () => {
  const Cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    Cart[i] = 0;
  }
  return Cart;
};

const ShopcontextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(DefaultCartItems());

  const AddToCart = (ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };

  const RemoveFromCart = (ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
  const ChangeValue = (NewNumber, ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: NewNumber }));
  };
  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        TotalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return TotalAmount;
  };

  const CheckOut = () => {
    console.log("checkOut Successful");
    SetCartItems(() => DefaultCartItems());
    alert("Your Check-Out is SucessFully Done");
  };
  const ContextValue = {
    cartItems,
    AddToCart,
    RemoveFromCart,
    ChangeValue,
    getTotalCartAmount,
    CheckOut,
  };
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopcontextProvider;
