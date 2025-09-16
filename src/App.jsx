import { useState } from "react";
import "./App.css";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
