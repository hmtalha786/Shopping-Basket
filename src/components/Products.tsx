import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../../global";
import { store, add } from "../store";

const Product = () => {
  const products = useSelector((state: ProductItem[]) => state);
  console.log(products);
  return (
    <div>
      <div className=" mt-4">
        {" "}
        You have {products.filter((product) => product.added).length} items in
        your basket
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product: ProductItem) => (
          <div
            key={product.id}
            className="product_main"
            style={{
              background: "#f5f5f5",
              margin: "10px",
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              border: " 5px solid grey",
              width: "300px",
              color: "black",
            }}
          >
            <br />
            <br />

            <img
              src={product.imageUrl}
              alt="product"
              width="200px"
              style={{ margin: "0 auto" }}
            />
            <br />
            {product.title}
            <br />
            <br />
            <button
              disabled={product.added}
              onClick={() => store.dispatch(add(product))}
              style={{
                backgroundColor: "white",
                color: "white",
                border: "none",
                cursor: "pointer",
                height: "30px",
                background: "grey",
              }}
            >
              {" "}
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
