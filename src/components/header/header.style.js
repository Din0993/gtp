import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0 80px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ba181b;
  padding-top: 3px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  display: inline-block;
  height: 80px;
  width: 240px;
  margin-right: auto;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 40px;
  font-size: 17px;
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
