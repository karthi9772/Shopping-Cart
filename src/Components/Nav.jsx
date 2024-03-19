import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="Nav-bar">
      <div className="links">
        <Link className="link" to="/Shoping-Cart/">
          Shop
        </Link>
        <Link className="link" to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
