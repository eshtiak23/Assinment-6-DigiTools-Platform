import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.warning("Already added ⚠️");
      return;
    }
    setCart([...cart, product]);
    toast.success("Added to cart ✅");
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart ❌");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Checkout successful 🎉");
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <Navbar cart={cart} />
      <Banner />
      <Stats />

      {/* --- Toggle Section --- */}
      
      <div className="max-w-2xl pt-20 mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Premium Digital Tools
        </h2>
        <p className="mt-3 text-sm text-gray-400 md:text-base">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>


        <div className="inline-flex items-center p-1 mt-8 border border-gray-800 rounded-full bg-gray-900/40">
          <button 
            onClick={() => setView("products")}
            className={`px-8 py-2 text-sm font-medium transition-all rounded-full ${
              view === "products" 
              ? "bg-[#7C3AED] text-white shadow-lg" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setView("cart")}
            className={`px-8 py-2 text-sm font-medium transition-all rounded-full ${
              view === "cart" 
              ? "bg-[#7C3AED] text-white shadow-lg" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

     
      <div className="pb-20">
        {view === "products" ? (
          <Products addToCart={addToCart} cart={cart} />
        ) : (
          <Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />
        )}
      </div>

      <Steps />
      <Pricing />
      <CTA />     
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;