import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <h1>🛒 QuickCart</h1>

      <button onClick={onCartClick}>
        Cart ({cartItemCount})
      </button>
    </header>
  );
}

export default Header;