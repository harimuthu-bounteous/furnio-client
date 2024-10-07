import { FC } from "react";
import { cn } from "@/src/utils/cn";
import { Product } from "@/src/types/Product";
import ProductCard from "../common/ProductCard";
import ListProductCard from "../common/ListProductCard";

interface ProductListProps {
  products: Array<Product>;
  viewMode: string;
}

const ProductList: FC<ProductListProps> = ({ products, viewMode }) => {
  return (
    <div
      className={cn(
        "p-8 md:px-16 md:py-12",
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16"
          : "flex flex-col items-center space-y-4"
      )}
    >
      {products.map((product) =>
        viewMode === "grid" ? (
          <ProductCard product={product} key={product.id} />
        ) : (
          <ListProductCard product={product} key={product.id} />
        )
      )}
    </div>
  );
};

export default ProductList;
