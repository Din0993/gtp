import styled from "styled-components";

export const DelatnostiContainer = styled.div`
  width: 100%;
  height: 800px;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  @media only screen and (max-width: 950px) {
    height: 1600px;
  }
  @media only screen and (max-width: 500px) {
    height: 2802px;
  }
`;

export const DelatnostiItemsContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 950px) {
    flex-wrap: wrap;
  }
`;

export const DelatnostiItem = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 950px) {
    width: 50%;
    height: 50%;
    border-bottom: 1px solid #a4161a;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 25%;
    border-bottom: 1px solid #a4161a;
  }
`;

export const DelatnostiItemImg = styled.img`
  position: absolute;
  filter: brightness(40%);
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  transition: filter 1s, transform 10s;
  &:hover {
    filter: brightness(75%);
    transform: scale(1.3);
  }
`;

export const DelatnostiItemTitleAndDesc = styled.div`
  position: absolute;
  bottom: 70px;
  left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DelatnostiItemHeading = styled.h2`
  color: #f8f8f8;
  font-weight: 800;
  font-size: 31.6px;
  line-height: 1.1;
  width: 70%;
  margin: 5px 0;
`;

export const DelatnostiItemDesc = styled.p`
  color: #f8f8f8;
  font-size: 17px;
  width: 70%;
  font-weight: 500;
  margin: 0;
`;
