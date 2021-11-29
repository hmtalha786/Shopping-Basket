import React from "react";
import { Product } from "./components/Products";
import { Basket } from "./components/Basket";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Product />
      <Basket />
    </div>
    </>
  );
}

export default App;
