const Navbar = ({ cart }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">DigiTools</h1>

      {/* Cart */}
      <div className="relative text-2xl">
        🛒
        
        {/* Cart Count */}
        <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
          {cart.length}
        </span>
      </div>

    </div>
  );
};

export default Navbar;