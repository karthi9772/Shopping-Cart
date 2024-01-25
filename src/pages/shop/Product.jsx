import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { AddToCart, cartItems } = useContext(ShopContext);

  const { id, name, img, price } = props.data;
  const CartItemAmount = cartItems[id];
  return (
    <div className="Product-div" key={id}>
      <img className="product-img" src={img} height="200px" width="300px"></img>
      <h1 className="product-name">{name}</h1>
      <h2 className="Product-price">₹{price}/-</h2>
      <button className="Add-to-cart-btn" onClick={() => AddToCart(id)}>
        Add To Cart {CartItemAmount > 0 ? <> ({CartItemAmount}) </> : <></>}
      </button>
    </div>
  );
};

export default Product;
