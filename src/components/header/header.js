import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLinksContainer,
  HeaderLink,
} from "./header.style";
import logo from "../../assets/gtplogo.png";
const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderLogo src={logo} />
        <HeaderLinksContainer>
          <HeaderLink to="/">Početna</HeaderLink>
          <HeaderLink to="/projekti">Projekti</HeaderLink>
          <HeaderLink to="/kontakt">Kontakt</HeaderLink>
        </HeaderLinksContainer>
      </HeaderContainer>
    </div>
  );
};
export default Header;
