import styled from "styled-components";

export const KontaktContainer = styled.div`
  display: flex;
  height: 740px;
  width: 100%;
  padding-top: 100px;

  @media only screen and (max-width: 1500px) {
    height: 1200px;
  }
  @media only screen and (max-width: 980px) {
    height: 1180px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: 2000px;
  }
`;

export const KontaktRightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media only screen and (max-width: 800px) {
    width: 100%;
    order: -1;
  }
  @media only screen and (max-width: 770px) {
    width: 100%;
    order: -1;
    margin-top: 80px;
  }
`;

export const KontaktHeading = styled.h3`
  padding-top: 50px;
  font-size: 30px;
  text-transform: uppercase;
`;

export const KontaktInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 70%;
  flex: 1;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: baseline;
    margin-bottom: 20px;
  }
`;

export const KontaktInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e5383b;
  width: 280px;
  height: 360px;
  margin-left: 20px;
  transition: all 0.4s ease;
  @media only screen and (max-width: 980px) {
    height: 260px;
    margin-left: 0;
    margin-top: 20px;
  }
  &:hover {
    border: 2px solid #660708;
  }
`;

export const MapContainerStyle = styled.div`
  width: 40%;
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 900px;
  }
`;
