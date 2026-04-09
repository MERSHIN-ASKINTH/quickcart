import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart();

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo">🛒 QuickCart</Link>

        <div className="search-box">
          <input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <button className="cart-btn" onClick={toggleCart}>
          Cart ({getTotalItems()})
        </button>
      </div>
    </header>
  );
}

export default Header;