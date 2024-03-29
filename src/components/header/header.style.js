import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  height: 80px;
  margin: 0;
  padding: 0 80px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ba181b;
  padding-top: 3px;
  align-items: center;
  justify-content: space-between;
  z-index: 15001;
  @media only screen and (max-width: 770px) {
    padding: 0 10px;
  }
`;

export const HeaderLogo = styled.img`
  display: inline-block;
  height: 80px;
  width: 240px;
  margin-right: auto;
  @media only screen and (max-width: 770px) {
    padding: 0;
  }
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 40px;
  font-size: 17px;
  @media only screen and (max-width: 1110px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 1011px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 985px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 955px) {
    font-size: 13px;
    gap: 30px;
  }
  @media only screen and (max-width: 885px) {
    font-size: 13px;
    gap: 20px;
  }

  @media only screen and (max-width: 855px) {
    font-size: 13px;
    gap: 10px;
  }

  @media only screen and (max-width: 810px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 785px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

export const HeaderLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: #212529;
  padding: 8px 6px;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #ba181b 50%
  );
  background-size: 235%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: #f8f8f8;
    transform: translateX(6px);
  }
`;

export const HeaderMenu = styled.div`
  display: none;
  align-self: center;
  justify-self: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
  height: 37px;
  @media only screen and (max-width: 770px) {
    display: block;
    visibility: visible;
    opacity: 1;
    z-index: 15001;
  }
`;
