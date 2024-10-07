"use client";
import { FC, useState } from "react";
import FilterProductSection from "./FilterProductSection";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { products } from "@/src/data/Products"; // Make sure you import products data
import Typography from "../common/Typography"; // Assume you have a Typography component for displaying messages

const ProductListSection: FC = () => {
  const [filterValue, setFilterValue] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [showCount, setShowCount] = useState(16); // Options: 8, 16, 24, 48
  const [sortBy, setSortBy] = useState("Default"); // Default sort option
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  // Filter and sort the products based on the state
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") {
        return a.price - b.price;
      } else if (sortBy === "Price: High to Low") {
        return b.price - a.price;
      } else if (sortBy === "Alphabetical") {
        return a.name.localeCompare(b.name); // Alphabetical sort
      } else {
        return a.id - b.id; // Sort by ID (Default)
      }
    });

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / showCount);

  // Get the products for the current page
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
          onPageChange={setCurrentPage} // Pass the function to change the page
        />
      )}
    </div>
  );
};

export default ProductListSection;
