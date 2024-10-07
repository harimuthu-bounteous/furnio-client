import { FC } from "react";
import ThumbNailGallery from "./ThumbNailGallery";
import ProductInfo from "./ProductInfo";
import { selectedProduct } from "@/src/data/SelectedProduct";
import TabNavigation from "./TabNavigationSection";
import RelatedProducts from "./RelatedProductsSection";

const ProductDetails: FC = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row mx-auto md:p-8">
        <ThumbNailGallery images={selectedProduct.thumbNailImages} />
        <ProductInfo selectProduct={selectedProduct} />
      </div>
      <TabNavigation descriptionImages={selectedProduct.descriptionImages} />
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
