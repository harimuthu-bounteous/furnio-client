import { products } from "@/src/data/Products";
import { FC } from "react";
import ProductCard from "../common/ProductCard";

const ProductList: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-8 md:px-36 md:py-12 gap-16">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
