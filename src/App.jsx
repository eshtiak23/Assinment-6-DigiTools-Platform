import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";


function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />
      <ToggleSection view={view} setView={setView} />
    </>
  );
}

export default App;