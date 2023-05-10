import React from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ ProductList }) => {

  const renderProducts = ProductList.map((item) => <ProductCard key={item.id} item={item} />)

  return (
    <section className="mb-5">
      <h2 className="text-3xl font-normal mt-3 mb-5 py-2">Category name</h2>
      <article className="grid lg:grid-cols-3 gap-5">
        {renderProducts}
      </article>
    </section>
  );
}

export default Products;