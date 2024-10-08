"use client";
import { FC, useState } from "react";
import { SelectedProduct } from "@/src/types/SelectedProduct";
import { cn } from "@/src/utils/cn";
import Link from "next/link";
import FacebookIcon from "@/public/assets/icons/FacebookIcon";
import LinkedinIcon from "@/public/assets/icons/LinkedinIcon";
import TwitterIcon from "@/public/assets/icons/TwitterIcon";
import Typography from "../common/Typography";
import PlusIcon from "@/public/assets/icons/PlusIcon";

interface ProductInfoProps {
  selectProduct: SelectedProduct;
}

const ProductInfo: FC<ProductInfoProps> = ({ selectProduct }) => {
  const [selectedSize, setSelectedSize] = useState(selectProduct.Sizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    selectProduct.Colors[0].Value
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
    <div className="w-full md:w-1/2 mx-auto px-8 md:px-4 md:py-2 bg-white rounded-md">
      {/* Product Title and Price */}
      <Typography
        variant="h1"
        value={selectProduct.Name}
        className="text-3xl font-medium"
      />
      <Typography
        value={"Rs. " + selectProduct.Price.toFixed(2)}
        variant="p"
        className="text-2xl text-gray-400"
      />

      {/* Rating and Reviews */}
      <div className="flex flex-row gap-4 items-center my-3">
        <div className="flex text-yellow-500">
          {[...Array(Math.floor(selectProduct.Rating))].map((_, index) => (
            <span key={index} className="text-2xl">
              ★
            </span>
          ))}
          {selectProduct.Rating % 1 !== 0 && (
            <span className="text-2xl">★½</span>
          )}
        </div>
        <div className="w-0.5 h-8 bg-black/60 mx-2" />
        <span className="text-gray-500">
          {selectProduct.Reviews} Customer Reviews
        </span>
      </div>

      {/* Description */}
      <Typography
        variant="p"
        value={selectProduct.Description}
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
          {selectProduct.Sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={cn(
                "rounded-md px-4 py-2",
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
          {selectProduct.Colors.map((color) => (
            <button
              key={color.Name}
              onClick={() => handleColorChange(color.Value)}
              className={cn(
                "w-8 h-8 rounded-full border-2",
                color.Value === selectedColor
                  ? "border-gray-100"
                  : "border-transparent"
              )}
              style={{ backgroundColor: color.Value }}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
        {/* Quantity Selector */}
        <div className=" w-full flex flex-row items-center justify-between border border-black rounded-md">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="p-3 hover:bg-gray-200 font-bold text-3xl rounded-l-md w-1/3"
          >
            -
          </button>
          <Typography
            value={quantity.toString()}
            variant="span"
            className="w-1/3 p-3 text-center font-bold"
          />
          <button
            onClick={() => handleQuantityChange(1)}
            className="w-1/3 p-3 hover:bg-gray-200 text-3xl rounded-r-md"
          >
            +
          </button>
        </div>
        {/* Add to Cart and Compare Buttons */}
        <button className="w-full flex items-center justify-center py-3 text-black text-lg font-medium rounded-md border border-black hover:bg-black hover:text-white transition-all">
          Add To Cart
        </button>
        <button className="w-full flex flex-row gap-2 items-center justify-center py-3 text-black text-lg font-medium rounded-md border border-black hover:bg-black hover:text-white hover:stroke-white transition-all">
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
          : {selectProduct.SKU}
        </div>
        <div className="flex flex-row gap-1">
          <Typography
            value=" Category"
            variant="span"
            className="font-semibold min-w-[100px]"
          />
          : {selectProduct.Category}
        </div>
        <div className="flex flex-row gap-1">
          <Typography
            variant="span"
            value="Tags"
            className="font-semibold min-w-[100px]"
          />
          : {selectProduct.Tags.join(", ")}
        </div>
        <div className="flex flex-row items-center gap-1">
          <Typography
            variant="span"
            value="Share"
            className="font-semibold min-w-[100px]"
          />
          :{" "}
          <div className="flex space-x-4">
            <Link href={selectProduct.ShareLinks.Facebook} className="text-xl">
              <FacebookIcon />
            </Link>
            <Link href={selectProduct.ShareLinks.Linkedin} className="text-xl">
              <LinkedinIcon />
            </Link>
            <Link href={selectProduct.ShareLinks.Twitter} className="text-xl">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
