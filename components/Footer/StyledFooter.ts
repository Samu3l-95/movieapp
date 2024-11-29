import { Col, Typography } from 'antd';
import styled from "styled-components";

const {  Link } = Typography;

export const StyledFooter = styled(Link)`
  font-family: Poppins, sans-serif !important;
  color: #212121 !important;
`;

export const StyledFooterColumn = styled(Col)`
  display: flex !important;
  justify-content: center !important;
`;
