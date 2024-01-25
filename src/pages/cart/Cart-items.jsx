import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function CartItems(props) {
  const { AddToCart, RemoveFromCart, cartItems, ChangeValue } =
    useContext(ShopContext);
  const { id, name, img, price } = props.data;
  return (
    <div className="Outer-layer">
      <div className="container" key={id}>
        <div className="product-img">
          <img height="150px" width="120px" src={img}></img>
        </div>
        <div className="details">
          <h3>{name}</h3>
          <h4>₹{price}/-</h4>
          <div className="stat">
            <button onClick={() => RemoveFromCart(id)}>-</button>
            <input
              onChange={(e) => ChangeValue(Number(e.target.value), id)}
              value={cartItems[id]}
            ></input>
            <button
              onClick={() => {
                AddToCart(id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
