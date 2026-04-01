import products from "../data/products.json";
import ProductCard from "./ProductCard";

const Products = ({ addToCart, cart }) => {
  return (
    <div className="px-6 py-10 md:px-12">
      
      
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 max-w-7xl">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
            cart={cart || []}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;