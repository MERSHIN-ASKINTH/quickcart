import { useCart } from "../context/CartContext";
import ProductList from "./ProductList";

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProductList products={filtered} onAddToCart={addToCart} />
  );
}

export default HomePage;