import { products } from "@/src/data/Products";
import { FC } from "react";
import ProductCard from "../common/ProductCard";

interface ProductListProps {}

const ProductList: FC<ProductListProps> = ({}) => {
  return (
    <div className="grid grid-cols-4 px-36 py-12 gap-16">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
