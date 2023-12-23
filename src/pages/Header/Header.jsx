import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss"
const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
      <h1>Book Shop</h1>
        <ul className="nav">
         <li>Home</li>
          <li>About</li>
          <div className="cart-icon">
          <CgShoppingCart />
          <span>5</span>
          </div>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;