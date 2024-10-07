// Pagination.tsx
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
  return (
    <div className="w-full flex items-center justify-center gap-4 md:gap-8 pb-8">
      {/* Disable Previous button if on first page */}
      <Button
        value="Previous"
        variant="v3"
        size="large"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {/* Display page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          value={(index + 1).toString()}
          variant="v3"
          size="large"
          className={cn(currentPage === index + 1 ? "bg-yellow-600" : "")}
          onClick={() => onPageChange(index + 1)}
          // active={} // Style the active button
        />
      ))}
      {/* Disable Next button if on last page */}
      <Button
        value="Next"
        variant="v3"
        size="large"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
