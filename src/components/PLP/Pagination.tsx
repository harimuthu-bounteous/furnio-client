import { FC } from "react";
import Button from "../common/Button";
import { cn } from "@/src/utils/cn";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Scroll smoothly to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex items-center justify-center gap-2 px-2 sm:px-4 md:gap-8 pb-8">
      {/* Disable Previous button if on first page */}
      <Button
        value="Previous"
        variant="v3"
        size="medium" // Make buttons more compact on smaller screens
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-xs sm:text-sm md:text-base"
      />

      {/* Display page numbers with flexible sizing */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            value={(index + 1).toString()}
            variant="v3"
            size="small"
            className={cn(
              "text-xs sm:text-sm md:text-base",
              currentPage === index + 1 ? "bg-yellow-600" : ""
            )}
            onClick={() => handlePageChange(index + 1)}
          />
        ))}
      </div>

      {/* Disable Next button if on last page */}
      <Button
        value="Next"
        variant="v3"
        size="medium"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-xs sm:text-sm md:text-base"
      />
    </div>
  );
};

export default Pagination;
