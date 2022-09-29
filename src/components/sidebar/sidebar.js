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
          <SidebarLink to="/o-nama" onClick={toggleSidebar}>
            O Nama
          </SidebarLink>
          <SidebarLink to="/reference" onClick={toggleSidebar}>
            Reference
          </SidebarLink>
          <SidebarLink to="/nas-tim" onClick={toggleSidebar}>
            Naš Tim
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
