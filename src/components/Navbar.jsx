const Navbar = ({ cart }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0F172A] border-b border-gray-700">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">
        Digi<span className="text-blue-500">Tools</span>
      </h1>

      {/* Menu (optional simple) */}
      <div className="hidden md:flex gap-6 text-gray-300">
        <p className="hover:text-white cursor-pointer">Home</p>
        <p className="hover:text-white cursor-pointer">Products</p>
        <p className="hover:text-white cursor-pointer">Pricing</p>
      </div>

      {/* Cart */}
      <div className="relative text-2xl text-white">
        🛒
        <span className="absolute -top-2 -right-3 bg-blue-600 text-xs px-2 py-1 rounded-full">
          {cart.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;