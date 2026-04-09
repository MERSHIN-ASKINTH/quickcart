import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductList from "./ProductList";

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(
    p => p.category === category
  );

  return (
    <ProductList products={filtered} onAddToCart={addToCart} />
  );
}

export default CategoryPage;