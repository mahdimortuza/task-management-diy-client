import { Flex, Row } from "antd";
import SingleColumn from "./SingleColumn";

const Columns = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Flex justify="between">
        <SingleColumn />
        <SingleColumn />
        <SingleColumn />
      </Flex>
    </Row>
  );
};

export default Columns;
