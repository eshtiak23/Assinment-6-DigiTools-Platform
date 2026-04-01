import products from "../data/products.json";
import ProductCard from "./ProductCard";

const Products = ({ addToCart, cart }) => {
  return (
    <div className="grid grid-cols-8 gap-6 px-8 py-10 bg-[#020617]">

      {products.map((p) => (
        <div key={p.id} className="col-span-8 sm:col-span-4 md:col-span-2">
          <ProductCard
            product={p}
            addToCart={addToCart}
            cart={cart || []}
          />
        </div>
      ))}

    </div>
  );
};

export default Products;