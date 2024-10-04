"use client";
import { FC, useState } from "react";
import { selectedProduct } from "@/src/data/SelectedProduct";
import { SelectedProduct } from "@/src/types/SelectedProduct";
import Link from "next/link";
import FacebookIcon from "@/public/assets/icons/FacebookIcon";
import LinkedinIcon from "@/public/assets/icons/LinkedinIcon";
import TwitterIcon from "@/public/assets/icons/TwitterIcon";
import Typography from "../common/Typography";
import { cn } from "@/src/utils/cn";
import PlusIcon from "@/public/assets/icons/PlusIcon";

interface ProductInfoProps {
  selectProduct: SelectedProduct;
}

const ProductInfo: FC<ProductInfoProps> = ({ selectProduct }) => {
  const [selectedSize, setSelectedSize] = useState(selectProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    selectProduct.colors[0].value
  );
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <div className="w-1/2 mx-auto px-4 py-2 bg-white rounded-md">
      {/* Product Title and Price */}
      <Typography
        variant="h1"
        value={selectProduct.name}
        className="text-3xl font-medium"
      />
      <Typography
        value={"Rs. " + selectProduct.price.toFixed(2)}
        variant="p"
        className="text-2xl text-gray-400"
      />

      {/* Rating and Reviews */}
      <div className="flex flex-row gap-4 items-center my-3">
        <div className="flex text-yellow-500">
          {[...Array(Math.floor(selectProduct.rating))].map((_, index) => (
            <span key={index} className="text-2xl">
              ★
            </span>
          ))}
          {selectProduct.rating % 1 !== 0 && (
            <span className="text-2xl">★½</span>
          )}
        </div>
        <div className="w-0.5 h-8 bg-black/60 mx-2" />
        <span className="text-gray-500">
          {selectProduct.reviews} Customer Reviews
        </span>
      </div>

      {/* Description */}
      <Typography
        variant="p"
        value={selectProduct.description}
        className="text-gray-700 my-4"
      />

      {/* Size Selection */}
      <div className="my-6">
        <Typography
          value="Size"
          variant="h2"
          className="font-semibold mb-2 text-gray-400"
        />
        <div className="flex space-x-2">
          {selectProduct.sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={cn(
                "h-10 w-10 rounded-md",
                size === selectedSize ? "bg-yellow-600 text-white" : "bg-beige "
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="my-6">
        <Typography
          value="Color"
          variant="h2"
          className="font-semibold mb-2 text-gray-400"
        />
        <div className="flex space-x-2">
          {selectProduct.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(color.value)}
              className={cn(
                "w-8 h-8 rounded-full border-2",
                color.value === selectedColor
                  ? "border-gray-100"
                  : "border-transparent"
              )}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        {/* Quantity Selector */}
        <div className="my-4 flex items-center border border-black rounded-md">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-4 py-4 hover:bg-gray-200 rounded-l-md"
          >
            -
          </button>
          <span className="w-3 px-10 py-4">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-4 py-4 hover:bg-gray-200 rounded-r-md"
          >
            +
          </button>
        </div>
        {/* Add to Cart and Compare Buttons */}
        <button className="flex-1 my-4 text-black text-lg font-medium rounded-md border border-black hover:bg-black hover:text-white transition-all">
          Add To Cart
        </button>
        <button className="flex-1 inline-flex gap-2 flex-row items-center justify-center my-4 text-black text-lg font-medium rounded-md border border-black hover:bg-black hover:text-white hover:stroke-white transition-all">
          <PlusIcon className="hover:stroke-inherit" />
          <span className="">Compare</span>
        </button>
      </div>

      {/* SKU, Category, Tags, Share */}
      <div className="mt-8 border-t pt-4 text-gray-600 flex flex-col gap-4">
        <div className="flex flex-row gap-1">
          <Typography
            value="SKU"
            variant="span"
            className="font-semibold min-w-[100px]"
          />
          : {selectProduct.sku}
        </div>
        <div className="flex flex-row gap-1">
          <Typography
            value=" Category"
            variant="span"
            className="font-semibold min-w-[100px]"
          />
          : {selectProduct.category}
        </div>
        <div className="flex flex-row gap-1">
          <Typography
            variant="span"
            value="Tags"
            className="font-semibold min-w-[100px]"
          />
          : {selectProduct.tags.join(", ")}
        </div>
        <div className="flex flex-row items-center gap-1">
          <Typography
            variant="span"
            value="Share"
            className="font-semibold min-w-[100px]"
          />
          :{" "}
          <div className="flex space-x-4">
            <Link href={selectProduct.shareLinks.facebook} className="text-xl">
              <FacebookIcon />
            </Link>
            <Link href={selectProduct.shareLinks.linkedin} className="text-xl">
              <LinkedinIcon />
            </Link>
            <Link href={selectProduct.shareLinks.twitter} className="text-xl">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
