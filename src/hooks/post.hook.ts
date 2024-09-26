import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/post";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post Created Successfully");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
