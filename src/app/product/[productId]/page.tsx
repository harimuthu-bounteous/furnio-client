"use client";

import BreadCrumbHeader from "@/src/components/PDP/BreadCrumbHeader";
import ProductDetailsSection from "@/src/components/PDP/ProductDetailsSection";
import { BreadCrumbHeaderSkeleton } from "@/src/components/skeleton/BreadCrumbHeaderSkeleton";
import { ProductInfoSkeleton } from "@/src/components/skeleton/ProductInfoSkeleton";
import { ThumbNailGallerySkeleton } from "@/src/components/skeleton/ThumbNailGallerySkeleton";
import { useFetchProductById } from "@/src/hooks/useFetchProductById";
import { SelectedProduct } from "@/src/types/SelectedProduct";
import { useEffect } from "react";

interface PageProp {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProp) {
  const {
    data: product,
    error,
    isLoading,
    isSuccess,
  } = useFetchProductById(params.productId);

  // useEffect(() => {
  //   if (isSuccess) console.log(product);
  // }, [isSuccess]);

  if (isLoading)
    return (
      <div>
        <BreadCrumbHeaderSkeleton />
        <div className="container flex flex-col md:flex-row mx-auto md:p-8">
          <ThumbNailGallerySkeleton />
          <ProductInfoSkeleton />
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <BreadCrumbHeader product={product as SelectedProduct} />
      <ProductDetailsSection product={product as SelectedProduct} />
    </div>
  );
}
