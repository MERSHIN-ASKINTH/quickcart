import "../styles/CartSidebar.css";

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>Close</button>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>

            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            {item.quantity}
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>

            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CartSidebar;