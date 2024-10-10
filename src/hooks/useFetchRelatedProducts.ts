import axios from "axios";
import { SelectedProduct } from "../types/SelectedProduct";
import { useQuery } from "@tanstack/react-query";

const fetchRelatedProductById = async (
  id: string
): Promise<SelectedProduct[]> => {
  try {
    const response = await axios.get(
      `http://localhost:5219/api/Products/${id}/related`
    );
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

const useFetchRelatedProductById = (id: string) => {
  return useQuery({
    queryKey: ["relatedProductById", id],
    queryFn: () => fetchRelatedProductById(id),
    staleTime: 0,
  });
};

export { useFetchRelatedProductById, fetchRelatedProductById };
