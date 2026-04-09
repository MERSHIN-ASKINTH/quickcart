import "../styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <img src={product.image} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;