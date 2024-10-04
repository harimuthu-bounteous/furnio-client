import { FC } from "react";
import ThumbNailGallery from "./ThumbNailGallery";
import ProductInfo from "./ProductInfo";
import { selectedProduct } from "@/src/data/SelectedProduct";

const ProductDetails: FC = () => {
  return (
    <div className="container flex flex-row mx-auto p-8">
      <ThumbNailGallery images={selectedProduct.thumbNailImages} />
      <ProductInfo selectProduct={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
