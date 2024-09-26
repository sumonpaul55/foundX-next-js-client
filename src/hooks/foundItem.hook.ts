import { useQuery } from "@tanstack/react-query";
import { getFoundItem } from "../services/foundItem";

const useFoundItem = () => {
  return useQuery({
    queryKey: ["FOUND_ITEM"],
    queryFn: async () => await getFoundItem(),
  });
};
export default useFoundItem;
