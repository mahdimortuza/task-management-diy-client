"use client";
import { useGetAllTasks } from "@/apis/common/tasks/tasks.hooks.ts";
import { Flex, Row } from "antd";
import SingleColumn from "./SingleColumn";
import { TTaskProps } from "./Task";

const Columns = () => {
  const { data: taskData, isLoading, isError } = useGetAllTasks();
  // console.log(taskData);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong.</p>;
  }
  const todo = taskData.filter((task: TTaskProps) => task.status === "Todo");
  const inProgress = taskData.filter(
    (task: TTaskProps) => task.status === "In Progress"
  );
  const done = taskData.filter((task: TTaskProps) => task.status === "Done");

  return (
    <Row justify="center">
      <Flex className="flex justify-center">
        <Flex className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2">
          <SingleColumn title="Todo" task={todo} />
        </Flex>
        <Flex className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2">
          <SingleColumn title="In Progress" task={inProgress} />
        </Flex>
        <Flex className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2">
          <SingleColumn title="Done" task={done} />
        </Flex>
      </Flex>
    </Row>
  );
};

export default Columns;
