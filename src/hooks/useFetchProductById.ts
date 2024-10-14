import axios from "axios";
import { Product } from "../types/Product";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/baseUrl";

const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/product/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching the product"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const useFetchProductById = (id: string) => {
  return useQuery({
    queryKey: ["productById", id],
    queryFn: () => fetchProductById(id),
    staleTime: 0,
  });
};

export { useFetchProductById, fetchProductById };
