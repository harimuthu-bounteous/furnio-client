"use client";

import BreadCrumbHeader from "@/src/components/PDP/BreadCrumbHeader";
import ProductDetailsSection from "@/src/components/PDP/ProductDetailsSection";
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

  useEffect(() => {
    if (isSuccess) console.log(product);
  }, [isSuccess]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <BreadCrumbHeader product={product as SelectedProduct} />
      <ProductDetailsSection product={product as SelectedProduct} />
    </div>
  );
}
