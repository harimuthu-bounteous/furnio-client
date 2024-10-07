import BreadCrumbHeader from "@/src/components/PDP/BreadCrumbHeader";
import ProductDetailsSection from "@/src/components/PDP/ProductDetailsSection";

interface PageProp {
  params: {
    productId: string;
  };
}

export default function Page({}: PageProp) {
  return (
    <div>
      <BreadCrumbHeader />
      <ProductDetailsSection />
    </div>
  );
}
