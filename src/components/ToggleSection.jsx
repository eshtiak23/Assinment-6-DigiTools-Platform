const ToggleSection = ({ setView, view }) => {
  return (
    <div className="flex justify-center gap-4 py-10 bg-[#020617]">
      
      <button
        onClick={() => setView("products")}
        className={`px-6 py-2 rounded ${
          view === "products"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-300"
        }`}
      >
        Products
      </button>

      <button
        onClick={() => setView("cart")}
        className={`px-6 py-2 rounded ${
          view === "cart"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-300"
        }`}
      >
        Cart
      </button>

    </div>
  );
};

export default ToggleSection;