import { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Products from "./components/Products";
import Cart from "./components/Cart";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // 🛒 Cart State
  const [cart, setCart] = useState([]);

  // 🔄 Toggle View
  const [view, setView] = useState("products");

  // ➕ Add to Cart (with duplicate check)
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Already added ⚠️");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart ✅");
  };

  // ❌ Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart ❌");
  };

  // 🧹 Clear Cart (Checkout)
  const clearCart = () => {
    setCart([]);
    toast.success("Checkout successful 🎉");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar cart={cart} />

      {/* Banner */}
      <Banner />

      {/* Stats */}
      <Stats />

      {/* Toggle Buttons */}
      <ToggleSection view={view} setView={setView} cart={cart} />
      {/* Main Section */}
      {view === "products" && (
        <Products addToCart={addToCart} cart={cart} />
      )}

      {view === "cart" && (
        <Cart
          cart={cart}
          removeItem={removeItem}
          clearCart={clearCart}
        />
      )}

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;