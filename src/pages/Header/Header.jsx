import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss"
const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
      <h1>Shoes Shop</h1>
        <ul className="nav">
         <li><Link className="tab_link" to="/">Home</Link></li>
          <li><Link className="tab_link" to="/about">About</Link></li>
          <div className="cart-icon"><Link className="tab_link" to="/cart">
          <CgShoppingCart />
          <span>5</span>
          </Link>
          </div>
          <li><Link className="tab_link" to="login">Login</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;