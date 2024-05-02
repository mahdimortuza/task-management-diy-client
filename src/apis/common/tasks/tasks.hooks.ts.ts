import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "./task.api";

export const useGetAllTasks = () => {
  const taskData = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks,
    select: (data) => {
      const taskItems = data?.data?.map(
        (
          item: {
            _id: string;
            title: string;
            status: string;
            description: string;
          },
          index: any
        ) => ({
          id: item._id,
          title: item.title,
          status: item.status,
          description: item.description,
          index: index,
        })
      );
      return taskItems;
    },
  });
  return taskData;
};
