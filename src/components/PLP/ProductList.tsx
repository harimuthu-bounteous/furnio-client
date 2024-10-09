import { FC } from "react";
import { cn } from "@/src/utils/cn";
import ProductCard from "../common/ProductCard";
import ListProductCard from "../common/ListProductCard";
import { SelectedProduct } from "@/src/types/SelectedProduct";

interface ProductListProps {
  products: SelectedProduct[];
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
          <ProductCard product={product} key={product.ProductId} />
        ) : (
          <ListProductCard product={product} key={product.ProductId} />
        )
      )}
    </div>
  );
};

export default ProductList;
