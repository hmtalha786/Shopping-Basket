import React from "react";
import { useSelector } from "react-redux";

import { ProductItem } from "../global";
import { store, remove } from "./store";

const Basket = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <>
      <h1> Shopping Basket</h1>
      <p>
        You have {products.filter((product) => product.added).length} items in
        your basket
      </p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {" "}
        {products
          .filter((product) => product.added)
          .map((product: ProductItem) => {
            return (
              <div
                key={product.id}
                style={{
                  background: "#f5f5f5",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  border: " 3px solid red",
                }}
              >
                <img
                  alt="Product"
                  src={product.imageUrl}
                  style={{
                    width: "200px",
                    objectFit: "contain",
                    color: "white",
                  }}
                />
                <div style={{ color: "black" }}>
                  <p>{product.title}</p>

                  <p>&pound;{(product.price / 100).toFixed(2)}</p>

                  <p>{` ${product.description}`}</p>
                </div>

                <button
                  style={{
                    backgroundColor: "white",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    height: "30px",
                    background: "grey",
                  }}
                  onClick={() => store.dispatch(remove({ id: product.id }))}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
      &pound;
      {(
        products
          .filter((product) => product.added)
          .reduce((acc, current) => (acc += current.price), 0) / 100
      ).toFixed(2)}
    </>
  );
};

export { Basket };
