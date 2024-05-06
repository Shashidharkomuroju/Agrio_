import React from "react";
import { PRODUCTS } from "../../../../../Products";
import { Product } from "./Product";

export const Shop = () => {
  return (
    <section className="shop">
      <div className="shop-content">
        <h4>Recently Added</h4>
        <h2>Latest Product</h2>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </section>
  );
};
