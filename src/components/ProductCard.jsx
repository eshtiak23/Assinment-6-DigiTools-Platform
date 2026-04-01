const ProductCard = ({ product, addToCart, cart = [] }) => {


  const isAdded = cart.some(item => item.id === product.id);

  return (
    <div className="bg-[#0F172A] p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">

  
      <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">
        {product.tagType}
      </span>


      <h2 className="mt-2 text-xl font-bold text-white">
        {product.icon} {product.name}
      </h2>

  
      <p className="mt-2 text-gray-400">
        {product.description}
      </p>

    
      <p className="mt-2 font-semibold text-blue-400">
        ${product.price} / {product.period}
      </p>

   
      <ul className="mt-3 space-y-1 text-sm text-gray-300">
        {product.features?.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* Button Section  */}
      
      <button
        onClick={() => addToCart(product)}
        disabled={isAdded}
        className={`mt-4 w-full py-2 rounded transition-all duration-300 ${
          isAdded
            ? "bg-green-600 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isAdded ? "Added To Cart✅" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;