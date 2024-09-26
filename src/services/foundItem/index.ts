import axiosInstance from "@/src/lib/AxiosInstance";

export const getFoundItem = async () => {
  try {
    const { data } = await axiosInstance.get("/items");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
