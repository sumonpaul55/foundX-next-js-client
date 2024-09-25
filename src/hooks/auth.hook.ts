import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("Registered successfully");
    },
    onError: (error: any) => {
      toast.error(error);
    },
  });
};

export const userLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("Loggedin successfully");
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
};
