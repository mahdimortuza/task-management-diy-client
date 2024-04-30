import { Button, Flex } from "antd";

const Loader = () => {
  return (
    <Flex gap="small" align="center" wrap="wrap">
      <Button type="primary" loading>
        Loading
      </Button>
    </Flex>
  );
};

export default Loader;
