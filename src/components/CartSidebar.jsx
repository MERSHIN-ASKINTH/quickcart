import { useCart } from "../context/CartContext";

function CartSidebar() {
  const { cart, isCartOpen, toggleCart } = useCart();

  return (
    <div style={{
      position: "fixed",
      right: isCartOpen ? "0" : "-300px",
      top: 0,
      width: "300px",
      height: "100%",
      background: "white"
    }}>
      <button onClick={toggleCart}>Close</button>

      {cart.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default CartSidebar;