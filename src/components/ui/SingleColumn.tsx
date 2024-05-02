import { Divider, Flex } from "antd";
import Task, { TTaskProps } from "./Task";

export type TData = {
  title: string;
  task: TTaskProps[];
};

const SingleColumn = ({ title, task }: TData) => {
  // console.log(task);
  return (
    <Flex
      vertical
      style={{
        width: "280px",
        backgroundColor: "#F1F2F4",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2 className="ml-1 text-2xl font-semibold ">{title}</h2>
      <Divider />

      {task?.map((item: TTaskProps) => (
        <Task key={item.title} data={item} />
      ))}
    </Flex>
  );
};

export default SingleColumn;
