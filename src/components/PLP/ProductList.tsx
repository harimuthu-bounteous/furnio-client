import FilterIcon from "@/public/assets/icons/FilterIcon";
import GridRoundIcon from "@/public/assets/icons/GridRoundIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import { FC } from "react";

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
          {/* <Separator orientation="vertical" className="" /> */}
          <div className="w-[2px] h-8 bg-black/70 mx-2"></div>
          <div>Showing 1-16 of 32 results</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-16">
          <div className="text-lg flex flex-row items-center justify-center gap-6">
            Show{" "}
            <div className="bg-white text-black/30 flex items-center justify-center rounded-sm h-10 w-10">
              16
            </div>
          </div>
          <div className="text-lg flex flex-row items-center justify-center gap-6">
            Sort By{" "}
            <div className="bg-white text-black/30 flex justify-start items-center rounded-sm h-10 pl-5 pr-16">
              Default
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProductList;
