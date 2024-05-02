"use client";
import { useTasks } from "@/apis/common/tasks/tasks";
import { Flex, Row } from "antd";
import SingleColumn from "./SingleColumn";
import { TTaskProps } from "./Task";

const Columns = () => {
  const { data, isLoading, isError } = useTasks();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong.</p>;
  }
  const todo = data?.data.filter((task: TTaskProps) => task.status === "Todo");
  const inProgress = data?.data.filter(
    (task: TTaskProps) => task.status === "In Progress"
  );
  const done = data?.data.filter((task: TTaskProps) => task.status === "Done");

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
