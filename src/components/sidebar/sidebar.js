import React from "react";
import {
  SidebarContainer,
  SidebarLinksContainer,
  SidebarLink,
} from "./sidebar.style";
import "./sidebar.scss";
const Sidebar = ({ showSidebar, toggleSidebar }) => {
  let styles = { width: 0, opacity: 0, pointerEvents: "none" };
  if (showSidebar) {
    styles = { width: "100%", opacity: 1, pointerEvents: "all" };
  } else {
    styles = { width: 0, opacity: 0, pointerEvents: "none" };
  }

  return (
    <div>
      <SidebarContainer style={styles}>
        <SidebarLinksContainer>
          <SidebarLink to="/" onClick={toggleSidebar}>
            Početna
          </SidebarLink>
          <SidebarLink to="/projekti" onClick={toggleSidebar}>
            Projekti
          </SidebarLink>
          <SidebarLink to="/kontakt" onClick={toggleSidebar}>
            Kontakt
          </SidebarLink>
        </SidebarLinksContainer>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
