import { FC } from "react";
import FilterProductSection from "./FilterProductSection";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

const ProductListSection: FC = () => {
  return (
    <div className="flex flex-col">
      <FilterProductSection />
      <ProductList />
      <Pagination />
    </div>
  );
};

export default ProductListSection;
