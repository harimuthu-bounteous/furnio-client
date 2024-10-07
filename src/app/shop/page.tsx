import BenefitsSection from "@/src/components/PLP/BenefitsSection";
import HeroSection from "@/src/components/PLP/HeroSection";
import ProductListSection from "@/src/components/PLP/ProductListSection";
import { FC } from "react";

const page: FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProductListSection />
      <BenefitsSection />
    </div>
  );
};

export default page;
