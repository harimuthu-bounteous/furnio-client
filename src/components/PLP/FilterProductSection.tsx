import { FC } from "react";
import Button from "../common/Button";
import FilterIcon from "@/public/assets/icons/FilterIcon";
import GridRoundIcon from "@/public/assets/icons/GridRoundIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import Typography from "../common/Typography";

const FilterProductSection: FC = () => {
  return (
    <div className="bg-beige p-4 md:py-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
          <div className="flex flex-row items-center justify-center gap-2">
            <FilterIcon />
            Filter
          </div>
          <GridRoundIcon />
          <ViewListIcon />
        </div>
        <div className="w-[2px] h-6 md:h-8 bg-black/70 mx-1 md:mx-2"></div>
        <Typography
          value="Showing 1-16 of 32 results"
          variant="p"
          className="font-medium text-sm"
        />
      </div>
      <div className="flex flex-row items-center justify-between md:justify-center gap-16">
        <div className="text-base md:text-lg flex flex-row items-center justify-center gap-2 md:gap-6">
          <Typography value="Show" variant="span" />
          <Button variant="v1" value="16" />
        </div>
        <div className="text-base md:text-lg flex flex-row items-center justify-center gap-2 md:gap-6">
          <Typography value="Sort By" variant="span" />
          <Button variant="v1" className="pl-10 pr-20" value="Default" />
        </div>
      </div>
    </div>
  );
};

export default FilterProductSection;
