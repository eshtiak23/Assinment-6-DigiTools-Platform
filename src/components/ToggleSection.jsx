const ToggleSection = ({ view, setView, cart = [] }) => {
  return (
    <div className="flex justify-center gap-4 py-10 bg-[#020617]">

    
      <button
        onClick={() => setView("products")}
        className={`px-6 py-2 rounded transition-all ${
          view === "products"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-300"
        }`}
      >
        Products
      </button>

      {/* Cart Button with CounT Section */}
      <button
        onClick={() => setView("cart")}
        className={`relative px-6 py-2 rounded transition-all ${
          view === "cart"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-300"
        }`}
      >
        Cart

        {/* 🔥 Badge */}
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        )}
      </button>

    </div>
  );
};

export default ToggleSection;