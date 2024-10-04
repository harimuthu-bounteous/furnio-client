import BreadCrumbHeader from "@/src/components/PDP/BreadCrumbHeader";
import ProductDetailsSection from "@/src/components/PDP/ProductDetailsSection";
import RelatedProducts from "@/src/components/PDP/RelatedProductsSection";
import TabNavigationSection from "@/src/components/PDP/TabNavigationSection";

interface PageProp {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProp) {
  return (
    <div>
      {/* Bread Crumb */}
      <BreadCrumbHeader />
      {/* Product Details */}
      {/* 1. ThumbNail Gallery */}
      {/* 2. Product Info */}
      {/* 3. Product Variant, Quantity and Cart Options */}
      {/* 4. Product Meta Information */}
      <ProductDetailsSection />
      {/* Tab Navigation */}
      <TabNavigationSection />
      {/* Related Products */}
      <RelatedProducts />
    </div>
  );
}
