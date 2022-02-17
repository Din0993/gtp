import React, { useState, useCallback } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLinksContainer,
  HeaderLink,
  HeaderMenu,
} from "./header.style";

import { BiMenu } from "react-icons/bi";
import Sidebar from "../sidebar/sidebar";
import logo from "../../assets/gtplogo.png";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar((value) => !value));

  return (
    <div>
      <HeaderContainer>
        <HeaderLogo src={logo} />
        <HeaderLinksContainer>
          <HeaderLink to="/">Početna</HeaderLink>
          <HeaderLink to="/projekti">Projekti</HeaderLink>
          <HeaderLink to="/kontakt">Kontakt</HeaderLink>
        </HeaderLinksContainer>
        <HeaderMenu onClick={toggleSidebar}>
          <BiMenu size="2em" />
        </HeaderMenu>
      </HeaderContainer>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  );
};
export default Header;
