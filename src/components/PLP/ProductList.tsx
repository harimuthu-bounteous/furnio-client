import { FC } from "react";
import FilterIcon from "@/public/assets/icons/FilterIcon";
import GridRoundIcon from "@/public/assets/icons/GridRoundIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import Button from "@/src/components/common/Button";
import { products } from "@/src/data/Products";
import ProductCard from "../common/ProductCard";

const ProductList: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-beige p-6 px-20 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <FilterIcon />
              Filter
            </div>
            <GridRoundIcon />
            <ViewListIcon />
          </div>
          <div className="w-[2px] h-8 bg-black/70 mx-2"></div>
          <div>Showing 1-16 of 32 results</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-16">
          <div className="text-lg flex flex-row items-center justify-center gap-6">
            Show <Button variant="v1">16</Button>
          </div>
          <div className="text-lg flex flex-row items-center justify-center gap-6">
            Sort By{" "}
            <Button variant="v1" className="pl-10 pr-20">
              Default
            </Button>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-4 px-36 py-12 gap-16">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductList;
