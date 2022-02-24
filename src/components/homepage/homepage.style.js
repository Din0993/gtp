import styled, { css } from "styled-components";

const headerStyles = css`
  padding: 0;
  margin: 12px 0;
  text-align: center;
  font-weight: 700;
  line-height: 1;
`;

export const HomePageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  border-top: 1px solid red;
`;

export const HomePageInfoHeader = styled.h2`
  font-size: 35px;
  ${headerStyles}
`;

export const HomePageInfoSubHeader = styled.h3`
  font-size: 25px;
  ${headerStyles}
`;

export const HomePageInfoText = styled.p`
  position: relative;
  text-align: center;
  width: 60vw;
  margin: 20px auto;
  font-weight: 500;
`;
