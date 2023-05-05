import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductList } from "../ProductList";

const Products = () => {

    const renderProducts = ProductList.map((item) => <ProductCard item={item} />)

    return (
        <section>
            {renderProducts}
        </section>
    );
}

export default Products;