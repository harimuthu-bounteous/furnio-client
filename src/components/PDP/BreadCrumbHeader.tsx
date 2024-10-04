import BreadcrumbArrow from "@/public/assets/icons/BreadcrumbArrow";
import Link from "next/link";
import { FC } from "react";

const BreadCrumbHeader: FC = () => {
  return (
    <div className="bg-beige flex flex-row items-center px-16 py-6 gap-3">
      <Link href="/shop" className="text-lg text-gray-400 hover:underline">
        Home
      </Link>
      <BreadcrumbArrow />
      <Link href="/shop" className="text-lg text-gray-400 hover:underline">
        Shop
      </Link>
      <BreadcrumbArrow />
      <div className="bg-black/60 w-0.5 h-8 mx-6" />
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
