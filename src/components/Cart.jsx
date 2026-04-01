import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, clearCart }) => {
  

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-8 py-10 bg-[#020617] min-h-screen">

      <h2 className="mb-6 text-2xl font-bold text-white">
        🛒 Your Cart ({cart.length})
      </h2>

  
      {cart.length === 0 && (
        <p className="text-gray-400">Your cart is empty</p>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#0F172A] p-4 rounded"
          >
            <div>
              <h3 className="text-white">
                {item.icon} {item.name}
              </h3>
              <p className="text-gray-400">${item.price}</p>
            </div>

            {/* Remove Button Section In Cart */}
            <button
              onClick={() => {
                removeItem(item.id);
                toast.error("Removed from cart ❌");
              }}
              className="px-3 py-1 bg-red-600 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total + Checkout Section (⭐) */}

      {cart.length > 0 && (
        <div className="mt-8 bg-[#0F172A] p-5 rounded">
          
          <h3 className="text-xl text-white">
            Total: ${total}
          </h3>

          <button
            onClick={() => {
              clearCart();
              toast.success("Checkout successful 🎉");
            }}
            className="w-full py-2 mt-4 bg-blue-600 rounded"
          >
            Proceed to Checkout
          </button>

        </div>
      )}

    </div>
  );
};

export default Cart;