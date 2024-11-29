import React from "react";
import { HeaderProps } from "./header";
import Image from "next/image";
import { Col, Row } from "antd";
import Container from "@/components/Container/Container";
import Footer from "../Footer/Footer";

const HeaderNav = ({ children }: HeaderProps) => {
  return (
    <Container>
    <Row justify={"space-between"} style={{ marginTop: 20 }}>
      <Col xs={24} sm={20} lg={8}>
        <Image width={240} height={51} src="/images/Logo.png" alt="Logo" />
      </Col>
    </Row>
      {children}
      <Footer />
    </Container>
  );
};

export default HeaderNav;
