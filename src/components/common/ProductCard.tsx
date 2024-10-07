import { Product } from "@/src/types/Product";
import Image from "next/image";
import { FC } from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col relative group overflow-hidden shadow rounded border border-gray-300">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={380}
          height={100}
          className="w-full"
        />
        {product.label === "Sale" && (
          <div className="absolute top-5 right-5 h-12 w-12 rounded-full bg-red-500/40 text-white font-bold flex items-center justify-center">
            -{product.discount}
          </div>
        )}
        {product.label === "New" && (
          <div className="absolute top-5 right-5 h-12 w-12 rounded-full bg-green-500/70 text-white font-bold flex items-center justify-center">
            New
          </div>
        )}
      </div>
      <div className="bg-gray-100 p-3 space-y-1.5 min-h-full">
        <Typography
          variant="h2"
          className="font-semibold text-2xl"
          value={product.name}
        />
        <Typography
          variant="h3"
          className="text-lg text-gray-400"
          value={product.description}
        />
        <div className="flex flex-row justify-between">
          <Typography
            variant="p"
            className="text-lg font-medium"
            value={"Rs. " + product.price.toFixed(2)}
          />
          {product.old_price && (
            <Typography
              variant="p"
              className="line-through text-gray-300"
              value={"Rs. " + product.old_price.toFixed(2)}
            />
          )}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
