"use client";
import { FC, useState } from "react";
import FilterProductSection from "./FilterProductSection";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import Typography from "../common/Typography";
import { useFetchAllProducts } from "@/src/hooks/useFetchProducts";
import { SelectedProduct } from "@/src/types/SelectedProduct";

const ProductListSection: FC = () => {
  const [filterValue, setFilterValue] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [showCount, setShowCount] = useState(16); // Options: 8, 16, 24, 48
  const [sortBy, setSortBy] = useState("Default"); // Default sort option
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  const { data: products, isLoading, isError } = useFetchAllProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  const filteredProducts = (products as SelectedProduct[])
    .filter((product) =>
      product.Name.toLowerCase().includes(filterValue.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") {
        return a.Price - b.Price;
      } else if (sortBy === "Price: High to Low") {
        return b.Price - a.Price;
      } else if (sortBy === "Alphabetical") {
        return a.Name.localeCompare(b.Name);
      } else {
        return 0;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / showCount);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * showCount,
    currentPage * showCount
  );

  return (
    <div className="flex flex-col">
      <FilterProductSection
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showCount={showCount}
        setShowCount={setShowCount}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {paginatedProducts.length > 0 ? (
        <ProductList products={paginatedProducts} viewMode={viewMode} />
      ) : (
        <div className="flex justify-center items-center p-8">
          <Typography
            value="No products found"
            variant="p"
            className="text-gray-500"
          />
        </div>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProductListSection;
