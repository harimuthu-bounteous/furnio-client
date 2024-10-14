import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/SessionSlice";
import { BASE_URL } from "../constants/baseUrl";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: async (credentials: { Email: string; Password: string }) => {
      const response = await axios.post(
        BASE_URL + "/api/auth/login",
        credentials
      );
      return response.data;
    },
    onSuccess: (response) => {
      // console.log(response);
      dispatch(login({ user: response.user, token: response.token }));
      // console.log("Login Success :", response);

      router.push("/shop");
    },
    onError: (error) => {
      console.log("Login failed :", error);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (credentials: {
      Email: string;
      Password: string;
      Username: string;
    }) => {
      const response = await axios.post(
        BASE_URL + "/api/auth/register",
        credentials
      );
      return response.data;
    },
    onSuccess: () => {
      alert("Registration successful");
    },
    onError: (error) => {
      console.error("Registration failed", error);
    },
  });
};
