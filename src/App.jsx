import { useState } from "react";
import "./App.css";
import ProductPage from "./components/ProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <ProductPage />
    </>
  );
}

export default App;
