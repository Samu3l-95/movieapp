import styled from "styled-components";
import { Button, Col, Typography } from "antd";

const { Text } = Typography;

interface TextValue {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

export const BackButton = styled(Button)`
  font-family: Poppins, sans-serif !important;
  margin-bottom: 20px;
  width: 100px;
  border-radius: 30px;
  background-color: #3dac9d;
  color: #ffff;
`;

export const ColImage = styled(Col)`
  display: flex;
  justify-content: end;
`;

export const MovieImage = styled.img`
  width: 278px;
  height: 358px;
  max-width: 300px;
  border-radius: 30px;
  object-fit: cover;
`;

export const StyledText = styled(Text)<TextValue>`
  font-family: Poppins, sans-serif !important;
  font-weight: ${({ fontWeight }) => fontWeight || "0px"} !important;
  font-size: ${({ fontSize }) => fontSize || "0px"} !important;
  color: ${({ color }) => color || "black"} !important;
`;

export const DetailsContainer = styled.div`
  margin-left: 20px;
  flex: 1;
`;

export const DetailsRatings = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
 
    @media (min-width: 620px) {
    justify-content: space-between;
    margin-bottom: 0px;
    display: flex;
    }
`;

export const DetailsRatingsContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const RatingsContainer = styled.div`
  margin-top: 50px;
`;

export const RatingItem = styled.div`
  margin-bottom: 10px;

  strong {
    color: #333;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins, sans-serif !important;
    color: #0a8d89;
  }
`;
