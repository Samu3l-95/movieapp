import { Row } from "antd";
import { StyledFooter, StyledFooterColumn } from "./StyledFooter";

const Footer = () => {
  return (
    <Row justify={'center'} style={{ marginTop: 220 }}>
      <StyledFooterColumn xs={24} sm={20} lg={4}> <StyledFooter>Termos e Condições</StyledFooter></StyledFooterColumn>
      <StyledFooterColumn xs={24} sm={20} lg={4}> <StyledFooter>Política de Cookies</StyledFooter></StyledFooterColumn>
    </Row>
  );
};

export default Footer;
