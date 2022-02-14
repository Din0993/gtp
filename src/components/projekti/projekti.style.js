import styled from "styled-components";
import { Link } from "react-router-dom";
export const ProjektiContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ProjektiItem = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  width: 580px;
  @media only screen and (max-width: 1250px) {
    margin-left: 0;
    width: 600px;
  }
`;

export const ProjektiLink = styled(Link)`
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: #212529;
`;

export const ProjektiHeading = styled.h3`
  height: 10px;
  text-align: center;
  transition: all 0.4s;
  &:hover {
    color: #ba181b;
  }
`;

export const ProjektiImg = styled.img`
  width: 100%;
  height: 43vh;
  background-size: cover;
  &:hover + ${ProjektiHeading} {
    color: #ba181b;
  }
`;

export const ProjektiParagraph = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
`;
