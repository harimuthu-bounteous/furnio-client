"use client";
import { FC, useState } from "react";
import Typography from "../common/Typography";
// import { products } from "@/src/data/Products";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";
import { Product } from "@/src/types/Product";
import { useFetchRelatedProductById } from "@/src/hooks/useFetchRelatedProducts";

interface RelatedProductsProp {
  productId: string;
}

const RelatedProducts: FC<RelatedProductsProp> = ({ productId }) => {
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const {
    data: relatedProducts,
    isLoading,
    isError,
  } = useFetchRelatedProductById(productId);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const showLessProducts = () => {
    setVisibleCount(4); // Minimum 4 visible
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading related products.</div>;

  const hasProducts =
    relatedProducts && (relatedProducts as Product[]).length > 0;

  return (
    <div className="w-full flex flex-col justify-center items-center bg-zinc-50 py-8 border-y border-black/30">
      {/* Title */}
      <Typography
        value="Related Products"
        variant="h1"
        className="text-2xl font-semibold my-6"
      />

      {/* Products Grid */}
      {hasProducts ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10">
          {(relatedProducts as Product[])
            .slice(0, visibleCount)
            .map((product) => (
              <ProductCard product={product} key={product.ProductId} />
            ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No related products available.
        </div>
      )}

      {/* Show More / Show Less Button */}
      {hasProducts && (
        <Button
          value={
            visibleCount < (relatedProducts as Product[]).length
              ? "Show More"
              : "Show Less"
          }
          onClick={
            visibleCount < (relatedProducts as Product[]).length
              ? showMoreProducts
              : showLessProducts
          }
          variant="v5"
          className="px-20 py-2 mt-8 text-xl font-semibold"
        />
      )}
    </div>
  );
};

export default RelatedProducts;
