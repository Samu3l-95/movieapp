import { Col, Row } from "antd";
import { ContainerProps } from "./interface";

const Container = ({ children }: ContainerProps) => {
  return (
    <Row justify={'center'}>
      <Col span={22}>{children}</Col>
    </Row>
  );
};

export default Container;
