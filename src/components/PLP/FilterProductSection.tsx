"use client";
import { FC, useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import FilterIcon from "@/public/assets/icons/FilterIcon";
import GridRoundIcon from "@/public/assets/icons/GridRoundIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import Typography from "../common/Typography";
import Dropdown from "../common/Dropdown"; // Assume you have a Dropdown component
import { cn } from "@/src/utils/cn";
import Input from "../common/Input";
import CloseIcon from "@/public/assets/icons/CloseIcon";

interface FilterProductSectionProps {
  filterValue: string;
  setFilterValue: (value: string) => void;
  viewMode: string;
  setViewMode: (mode: string) => void;
  showCount: number;
  setShowCount: (count: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const FilterProductSection: FC<FilterProductSectionProps> = ({
  filterValue,
  setFilterValue,
  viewMode,
  setViewMode,
  showCount,
  setShowCount,
  sortBy,
  setSortBy,
}) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false); // State for popover visibility
  const popoverRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const sortOptions = [
    "Default",
    "Alphabetical",
    "Price: Low to High",
    "Price: High to Low",
  ];
  const showOptions = [8, 16, 24, 48];

  const handleFilterSubmit = () => {
    // console.log("Filter applied:", filterValue);
    setPopoverVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setPopoverVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-beige p-4 md:py-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
          <div className="relative">
            <Button
              ref={filterButtonRef}
              variant="plain"
              className="flex flex-row items-center justify-center md:gap-1 cursor-pointer hover:bg-yellow-600 py-2 px-3 sm:py-3 sm:px-4 bg-yellow-500 "
              onClick={() => setPopoverVisible((prev) => !prev)}
              value="Filter"
              icon={<FilterIcon />}
            />
            {isPopoverVisible && (
              <div
                ref={popoverRef}
                className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md flex flex-col gap-3 p-3 z-10 w-60"
              >
                <div className="flex justify-end">
                  <Button
                    variant="plain"
                    value=""
                    icon={<CloseIcon />}
                    className="fill-slate-400 hover:fill-slate-600 transition"
                    onClick={() => {
                      setPopoverVisible(false);
                    }}
                  />
                </div>
                <Input
                  type="text"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder="Filter by Name"
                  className="w-full"
                />
                <div className="flex justify-center">
                  <Button
                    variant="v1"
                    value="Apply"
                    onClick={handleFilterSubmit}
                  />
                </div>
              </div>
            )}
          </div>

          {/* <div className="w-[2px] h-8 md:h-8 bg-black/70 mx-1 md:mx-2" /> */}
          <div className="flex flex-row gap-2 md:gap-2 ">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-1 sm:py-2 sm:px-2.5 flex items-center border border-transparent hover:border-black/60 rounded",
                viewMode === "grid" ? "active bg-yellow-500 shadow-inner" : ""
              )}
            >
              <GridRoundIcon />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "py-1 px-1.5 sm:p-3 flex items-center  border border-transparent hover:border-black/60 rounded",
                viewMode === "list" ? "active bg-yellow-500 shadow-inner" : ""
              )}
            >
              <ViewListIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="w-[2px] h-8 md:h-8 bg-black/70 mx-1 md:mx-2" />
        <Typography
          value={`Showing ${showCount} results`}
          variant="p"
          className="font-medium text-sm"
        />
      </div>
      <div className="flex flex-row items-center justify-between md:justify-center gap-8 sm:gap-16">
        <div className="text-base md:text-lg flex flex-row items-center justify-center gap-2 md:gap-6">
          <Typography value="Show" variant="span" />
          <Dropdown
            options={showOptions}
            selectedValue={showCount}
            onChange={(value) => setShowCount(value as number)}
          />
        </div>
        <div className="text-base md:text-lg flex flex-row items-center justify-center gap-1 md:gap-6">
          <Typography
            value="Sort By"
            variant="span"
            className="whitespace-nowrap"
          />
          <Dropdown
            options={sortOptions}
            selectedValue={sortBy}
            onChange={(value) => setSortBy(value as string)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterProductSection;
