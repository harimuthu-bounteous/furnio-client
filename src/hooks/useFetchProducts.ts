import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { Product } from "../types/Product";
import { SelectedProduct } from "../types/SelectedProduct";

const fetchProducts = async (): Promise<SelectedProduct[]> => {
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

const useFetchProducts = () => {
  return useQuery<SelectedProduct[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export { useFetchProducts, fetchProducts };
