"use client";
import { FC, useState } from "react";
import Typography from "../common/Typography";
import { products } from "@/src/data/Products";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";

const RelatedProducts: FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-zinc-50 py-8 border-y border-black/30">
      {/* Title */}
      <Typography
        value="Related Products"
        variant="h1"
        className="text-2xl font-semibold my-6"
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < products.length && (
        <Button
          value="Show More"
          onClick={showMoreProducts}
          variant="v5"
          className="px-20 py-2 mt-8 text-xl font-semibold"
        />
      )}
    </div>
  );
};

export default RelatedProducts;
