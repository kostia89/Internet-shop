import React from "react";
import { useOutletContext } from "react-router-dom";
import "./goods.scss";
import { ProductList } from "../ProductList";

export function Goods() {
  const { products } = useOutletContext();

  return <ProductList products={products} />;
}
