import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  padding-top: 25px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 80px;
  background-color: #131313;
  gap: 30px;
  border-top: 1px solid #ac0000;
  @media only screen and (max-width: 820px) {
    gap: 70px;
  }
  @media only screen and (max-width: 770px) {
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 17%;
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;

export const FooterDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: auto;
  justify-content: space-between;
  padding-top: 10px;
  @media only screen and (max-width: 770px) {
    width: 100%;
    margin: 0;
  }
`;

export const FooterDivHeader = styled.h5`
  font-size: 18px;
  border-bottom: 1px solid #666;
  margin: 0 0 15px;
  padding: 0 0 10px;
  color: white;
  @media only screen and (max-width: 770px) {
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterDivHeader2 = styled.h5`
  font-size: 18px;
  border-bottom: 1px solid #666;
  margin: 0 0 15px;
  padding: 0 0 10px;
  color: white;
  @media only screen and (max-width: 770px) {
    gap: 30px;
    flex-direction: column;
  }
`;

export const FooterDivPara = styled.p`
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  margin: 0;
  gap: 5px;
`;

export const FooterDivLink = styled(Link)`
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100px;
  margin: 0;
  gap: 5px;
  transition: all 0.4s ease-in;
  &:hover {
    color: #ac0000;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 16px;
  padding-bottom: 25px;
`;

export const FooterLine = styled.div`
  margin: 35px 0;
  height: 1px;
  background-color: #ba181b;
  width: 100%;
`;
