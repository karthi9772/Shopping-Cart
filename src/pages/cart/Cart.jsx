import { Products } from "../../products";
import { CartItems } from "./Cart-items";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { CheckOut, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const Totalamount = getTotalCartAmount();
  return (
    <div>
      {Totalamount > 0 ? (
        <div>
          <div className="title">
            <h1 className="title">Your Cart Items</h1>
          </div>
          <div>
            {Products.map((item) => {
              if (cartItems[item.id] !== 0) {
                return <CartItems key={item.id} data={item} />;
              }
            })}
          </div>
          <div className="footer">
            <div className="Amount">
              <h2>Total Amount: ₹{Totalamount}</h2>
            </div>
            <div className="btn-div">
              <button className="btn" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
              <button className="btn" onClick={() => CheckOut()}>
                CheckOut
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="Empty-cart">
          <h1>Your Cart Is Empty</h1>
          <h2>Go And Do The Shopping.</h2>
        </div>
      )}
    </div>
  );
}
