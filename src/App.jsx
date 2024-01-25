import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import ShopcontextProvider from "./context/shop-context";

const App = () => {
  return (
    <div className="App">
      <ShopcontextProvider>
        <Router>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopcontextProvider>
    </div>
  );
};

export default App;
