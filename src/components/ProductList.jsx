import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h2 className="title">Our Products</h2>

      <div className="grid">
        {products.map(p => (
          <ProductCard 
            key={p.id} 
            product={p} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;