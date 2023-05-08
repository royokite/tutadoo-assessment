import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductList } from "../ProductList";

const Products = () => {

  const renderProducts = ProductList.map((item) => <ProductCard item={item} />)

  return (
    <section>
      <h2 className="text-4xl font-normal my-5 py-4">Category name</h2>
      <artcle className="grid lg:grid-cols-3 gap-5">
        {renderProducts}
      </artcle>
    </section>
  );
}

export default Products;