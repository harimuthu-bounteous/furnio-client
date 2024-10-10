import { Product } from "@/src/types/Product";
import Image from "next/image";
import { FC, useEffect } from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";
import { SelectedProduct } from "@/src/types/SelectedProduct";
import { useRouter } from "next/navigation";
import { calculateDiscountedPrice } from "@/src/utils/calculateDiscount";

interface ProductCardProps {
  product: SelectedProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col relative group overflow-hidden shadow rounded border border-gray-300">
      <div className="relative">
        <Image
          src={product.ThumbNailImages[0].ImageUrl}
          alt={product.ThumbNailImages[0].Alt}
          width={380}
          height={100}
          className="w-full"
          priority
        />
        {product.Label === "Discount" && (
          <div className="absolute top-5 right-5 h-12 w-12 rounded-full bg-red-500/40 text-white font-bold flex items-center justify-center">
            -{product.Discount}%
          </div>
        )}
        {product.Label === "New" && (
          <div className="absolute top-5 right-5 h-12 w-12 rounded-full bg-green-500/70 text-white font-bold flex items-center justify-center">
            New
          </div>
        )}
      </div>
      <div className="bg-gray-100 p-3 space-y-1.5 min-h-full">
        <Typography
          variant="h2"
          className="font-semibold text-2xl"
          value={product.Name}
        />
        <Typography
          variant="h3"
          className="text-lg text-gray-400"
          value={product.Category}
        />
        <div className="flex flex-row justify-between">
          {product.Label == "Discount" ? (
            <Typography
              variant="p"
              className="text-lg font-medium"
              value={
                "Rs. " +
                calculateDiscountedPrice(
                  product.Price,
                  product.Discount as number
                ).toFixed(2)
              }
            />
          ) : (
            <Typography
              variant="p"
              className="text-lg font-medium"
              value={"Rs. " + product.Price.toFixed(2)}
            />
          )}
          {product.Label == "Discount" && (
            <Typography
              variant="p"
              className="line-through text-gray-300"
              value={"Rs. " + product.Price.toFixed(2)}
            />
          )}
        </div>
      </div>

      <div
        onClick={() => {
          router.push("/product/" + product.ProductId);
        }}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      >
        <Button variant="v2" className="" value="Add to Cart" />
        <div className="flex flex-row gap-4">
          <Link
            href="/shop"
            className="text-white flex flex-row items-center gap-1"
          >
            <ShareIcon />
            Share
          </Link>
          <Link
            href="/shop"
            className="text-white flex flex-row items-center gap-1"
          >
            <CompareIcon />
            Compare
          </Link>
          <Link
            href="/shop"
            className="text-white flex flex-row items-center gap-1"
          >
            <LikeIcon />
            Like
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
