import Navbar from "@/src/components/layout/Navbar";
import HeroSection from "@/src/components/PLP/HeroSection";
import ProductList from "@/src/components/PLP/ProductList";
import { FC } from "react";

const page: FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductList />
    </>
  );
};

export default page;
