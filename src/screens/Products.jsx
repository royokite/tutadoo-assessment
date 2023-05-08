import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductList } from "../ProductList";

const Products = () => {

  const renderProducts = ProductList.map((item) => <ProductCard item={item} />)

  return (
    <section className="grid lg:grid-cols-3 gap-5">
      {renderProducts}
    </section>
  );
}

export default Products;