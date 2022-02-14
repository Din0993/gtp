import React from "react";
import { FooterContainer, FooterLine, FooterText } from "./footer.style";
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterLine />
        <FooterText>
          &copy; 2021 by Dino Sijarić. All rights reserved.
        </FooterText>
      </FooterContainer>
    </div>
  );
};

export default Footer;
