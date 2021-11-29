import React from "react";
import { Product } from "./components/Products";
import { Basket } from "./components/Basket";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Product />
      <Basket />
    </div>
  );
}

export default App;
