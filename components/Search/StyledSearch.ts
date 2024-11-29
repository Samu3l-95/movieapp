import styled from "styled-components";
import { Input, List, Row, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";


const { Text } = Typography;

interface TextValue {
  fontWeight?: string ;
  fontSize?: string;
  margin?: string;
}

export const StyledSearch = styled(Input)`
  font-family: Poppins, sans-serif;
  border-radius: 100px !important;
  height: 50px !important;
  z-index: 10 !important;
   
  &:hover {
    border-color: #3dac9c !important;
  }

   &:focus {
    border-color: #3dac9c !important;
  }

   .ant-input-suffix {
    color: #9ca3af !important;
  }
`;

export const StyledRowContainer = styled(Row)`
  margin-top: 120px !important;
  height: 250px !important;
`;

export const StyledText = styled(Text)<TextValue>`
  font-family: Poppins, sans-serif !important;
  font-weight: ${({ fontWeight }) => fontWeight || '0px'} !important;
  font-size: ${({ fontSize }) => fontSize || '0px'} !important;
  margin-bottom: ${({ margin }) => margin || '0px'} !important;;


   @media (max-width: 1210px) {
    font-size: 39px !important;
  }
`;

export const StyledTextList = styled(Text)`
  font-family: Poppins, sans-serif !important;
  font-weight: 100 !important;
  font-size: 14px;
`;

export const StyledIcon = styled(SearchOutlined)`
  font-size: 24px !important;
  font-weight: 700 !important;
`;

export const StyledListItem = styled(List.Item)`
  cursor: pointer !important;
  padding: 8px !important;
  
  &:hover {
    background-color: #9ca3af;
    color: white;
  
  }
`;

export const StyledContentDiv = styled.div`
  top: 40px;
  width: 100%;
  background-color: white;
  border: 1px solid #9CA3AF;
  border-radius: 17px 17px 30px 30px;
  position: sticky;
  z-index: 1;
  margin-top: -30px;
  padding: 10px;
  box-sizing: border-box;
`;

export const StyledDivList = styled.div`
  max-height: 126px;
  overflow-y: auto;
  padding: 5px;
  border-radius: 17px;
  scrollbar-width: thin;
  scrollbar-color: #9CA3AF transparent;
`;