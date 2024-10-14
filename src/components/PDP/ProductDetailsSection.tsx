import { FC } from "react";
import ThumbNailGallery from "./ThumbNailGallery";
import ProductInfo from "./ProductInfo";
import TabNavigation from "./TabNavigationSection";
import RelatedProducts from "./RelatedProductsSection";
import { Product } from "@/src/types/Product";

interface ProductDetailsSectionProp {
  product: Product;
}

const ProductDetailsSection: FC<ProductDetailsSectionProp> = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div className="container flex flex-col md:flex-row mx-auto md:p-8">
        <ThumbNailGallery images={product.ThumbNailImages} />
        <ProductInfo product={product} />
      </div>
      <TabNavigation descriptionImages={product.DescriptionImages} />
      <RelatedProducts productId={product.ProductId as string} />
    </div>
  );
};

export default ProductDetailsSection;
