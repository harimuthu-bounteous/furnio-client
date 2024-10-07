import BreadcrumbArrow from "@/public/assets/icons/BreadcrumbArrow";
import Link from "next/link";
import { FC } from "react";

const BreadCrumbHeader: FC = () => {
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
      <div className="bg-black/60 w-0.5 h-6 md:h-8 mx-4 md:mx-6" />
      <Link
        href="/product/123"
        className="text-lg text-gray-400 hover:underline"
      >
        Asgaard sofa
      </Link>
    </div>
  );
};

export default BreadCrumbHeader;
