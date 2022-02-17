import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  opacity: 0;
  width: 0;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 15000;
  transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  background-color: #212529;
  pointer-events: none;
  @media only screen and (min-width: 770px) {
    display: none;
  }
`;

export const SidebarLinksContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const SidebarLink = styled(Link)`
  position: relative;
  margin: 20px auto;
  display: block;
  width: 200px;
  font-size: 30px;
  font-weight: 300;
  padding: 10px 20px;
  color: #f8f8f8;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #ba181b 50%
  );
  background-size: 225%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: #f8f8f8;
    transform: translateX(1rem);
  }
`;
