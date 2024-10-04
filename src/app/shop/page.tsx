import BenefitsSection from "@/src/components/PLP/BenefitsSection";
import HeroSection from "@/src/components/PLP/HeroSection";
import ProductListSection from "@/src/components/PLP/ProductListSection";
import { FC } from "react";

const page: FC = () => {
  return (
    <>
      <HeroSection />
      <ProductListSection />
      <BenefitsSection />
    </>
  );
};

export default page;
