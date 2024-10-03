import Navbar from "@/src/components/layout/Navbar";
import HeroSection from "@/src/components/PLP/HeroSection";
import ProductList from "@/src/components/PLP/ProductList";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductList />
    </>
  );
};

export default page;
