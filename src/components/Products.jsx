import products from "../data/products.json";
import ProductCard from "./ProductCard";

const Products = ({ addToCart, cart }) => {
  return (
    <div className="bg-[#020617] px-6 md:px-12 py-20 text-white">

      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12 text-center">

        <h2 className="text-3xl font-bold md:text-4xl">
          Premium Digital Tools
        </h2>

        <p className="mt-3 text-sm text-gray-400 md:text-base">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-6">

          <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700">
            Products
          </button>

          <button className="px-6 py-2 text-gray-300 border border-gray-700 rounded-full hover:bg-gray-800">
            Cart ({cart.length})
          </button>

        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

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