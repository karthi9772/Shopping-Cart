import { Products } from "../../products";
import Product from "./Product";
import "./shop.css";

export function Shop() {
  return (
    <>
      <div className="shop">
        <div className="shop-title">
          <h1>Kannan Departmental store</h1>
        </div>
        <div className="Products-container">
          {Products.map((item) => (
            <Product data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
