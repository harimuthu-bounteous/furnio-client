// ListProductCard.tsx
import { Product } from "@/src/types/Product";
import { SelectedProduct } from "@/src/types/SelectedProduct";
import Image from "next/image";
import { FC } from "react";

interface ListProductCardProps {
  product: SelectedProduct;
}

const ListProductCard: FC<ListProductCardProps> = ({ product }) => {
  return (
    <div className="w-full md:w-[80%] flex flex-row items-center gap-4 md:gap-12 p-2 md:p-4 bg-white rounded-md shadow-md">
      <Image
        src={product.ThumbNailImages[0].ImageUrl}
        alt={product.ThumbNailImages[0].Alt}
        height={600}
        width={600}
        className="w-32 h-32 object-cover rounded-md"
        priority
      />
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start justify-center md:gap-3">
          <h2 className="text-lg font-semibold">{product.Name}</h2>
          <p className="text-gray-500">{product.Description}</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 justify-center items-start md:items-center">
          <p className="text-yellow-600 font-bold">${product.Price}</p>
          <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md whitespace-nowrap text-sm md:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProductCard;
