import { Flex, Row } from "antd";
import SingleColumn from "./SingleColumn";

const Columns = () => {
  return (
    <Row justify="center">
      <Flex className="flex justify-center">
        <Flex className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2">
          <SingleColumn title="Todo" status="TODO" />
        </Flex>
        <Flex className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2">
          <SingleColumn title="In Progress" status="IN_PROGRESS" />
        </Flex>
        <Flex className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/4 p-2">
          <SingleColumn title="Done" status="DONE" />
        </Flex>
      </Flex>
    </Row>
  );
};

export default Columns;
