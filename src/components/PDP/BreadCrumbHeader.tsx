import BreadcrumbArrow from "@/public/assets/icons/BreadcrumbArrow";
import { SelectedProduct } from "@/src/types/SelectedProduct";
import Link from "next/link";
import { FC } from "react";

interface BreadCrumbHeaderProp {
  product: SelectedProduct;
}

const BreadCrumbHeader: FC<BreadCrumbHeaderProp> = ({ product }) => {
  return (
    <div className="bg-beige flex flex-row items-center p-4 md:px-16 md:py-6 gap-1 md:gap-3">
      <Link href="/shop" className="text-lg text-gray-400 hover:underline">
        Home
      </Link>
      <BreadcrumbArrow />
      <Link href="/shop" className="text-lg text-gray-400 hover:underline">
        Shop
      </Link>
      <BreadcrumbArrow />
      {/* <div className="bg-black/60 w-0.5 h-6 md:h-8 mx-4 md:mx-6" /> */}
      <Link
        href={"/product/" + product.ProductId}
        className="text-lg text-gray-400 hover:underline truncate text-ellipsis"
      >
        {product.Name}
      </Link>
    </div>
  );
};

export default BreadCrumbHeader;
