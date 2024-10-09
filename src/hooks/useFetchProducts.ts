import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SelectedProduct } from "../types/SelectedProduct";

const fetchAllProducts = async (): Promise<SelectedProduct[]> => {
  try {
    const { data } = await axios.get("http://localhost:5219/api/Products");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching products"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const useFetchAllProducts = () => {
  return useQuery<SelectedProduct[], Error>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

export { useFetchAllProducts, fetchAllProducts };
