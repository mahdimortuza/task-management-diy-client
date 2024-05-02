import { Status } from "@/types/TaskType";
import { Divider, Flex } from "antd";
import Task from "./Task";

const SingleColumn = ({ title, status }: { title: string; status: Status }) => {
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
      <h2 className="ml-1 text-2xl font-semibold">{title}</h2>
      <Divider />

      <Task status={status} />
      <Task status={status} />
      <Task status={status} />
      <Task status={status} />
    </Flex>
  );
};

export default SingleColumn;
