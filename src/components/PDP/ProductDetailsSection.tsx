import { FC } from "react";
import ThumbNailGallery from "./ThumbNailGallery";
import ProductInfo from "./ProductInfo";
import TabNavigation from "./TabNavigationSection";
import RelatedProducts from "./RelatedProductsSection";
import { SelectedProduct } from "@/src/types/SelectedProduct";

interface ProductDetailsSectionProp {
  product: SelectedProduct;
}

const ProductDetailsSection: FC<ProductDetailsSectionProp> = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div className="container flex flex-col md:flex-row mx-auto md:p-8">
        <ThumbNailGallery images={product.ThumbNailImages} />
        <ProductInfo selectProduct={product} />
      </div>
      <TabNavigation descriptionImages={product.DescriptionImages} />
      <RelatedProducts productId={product.ProductId} />
    </div>
  );
};

export default ProductDetailsSection;
