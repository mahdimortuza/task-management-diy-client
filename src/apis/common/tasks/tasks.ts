import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchTasks() {
  try {
    return await axios.get(`http://localhost:5000/api/v1/tasks`);
  } catch (error) {
    return error;
  }
}
export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(),
  });
};
