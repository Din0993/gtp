import styled from "styled-components";

export const RadniciContainer = styled.div`
  display: flex;
  margin: 50px;
  padding: 30px;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Radnik = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 350px;
`;

export const RadnikImg = styled.img`
  height: 255px;
  width: 180px;
`;

export const RadnikIme = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  margin-top: 20px;
`;

export const RadnikPosition = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

export const RadniciHeading = styled.h2`
  position: relative;
  margin: 20px auto;
  text-align: center;
  text-transform: uppercase;
  width: 300px;
  font-size: 45px;
  font-weight: 700;
  transition: all 0.4s ease;
  &:hover {
    color: #ba181b;
  }
`;
