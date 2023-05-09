import React from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ ProductList }) => {

  const renderProducts = ProductList.map((item) => <ProductCard key={item.id} item={item} />)

  return (
    <section>
      <h2 className="text-4xl font-normal my-5 py-4">Category name</h2>
      <article className="grid lg:grid-cols-3 gap-5">
        {renderProducts}
      </article>
    </section>
  );
}

export default Products;