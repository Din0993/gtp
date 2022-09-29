import React from "react";
import {
  FooterContainer,
  FooterLine,
  FooterText,
  FooterDiv,
  FooterDivHeader,
  FooterDivPara,
  FooterDivLink,
  FooterDivHeader2,
} from "./footer.style";

import {
  MdLocationPin,
  MdEmail,
  MdOutlineInsertLink,
  MdPhone,
} from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterDiv>
          <FooterDivHeader>Kontaktirajte nas</FooterDivHeader>
          <FooterDivPara>
            <MdLocationPin style={{ color: "#ac0000" }} /> Darvinova 25, Beograd
          </FooterDivPara>
          <FooterDivPara>
            <MdPhone style={{ color: "#ac0000" }} /> Broj telefona
          </FooterDivPara>
          <FooterDivPara>
            <MdEmail style={{ color: "#ac0000" }} /> Email
          </FooterDivPara>
        </FooterDiv>
        <FooterDiv>
          <FooterDivHeader>Linkovi</FooterDivHeader>
          <FooterDivLink to="/">
            <MdOutlineInsertLink style={{ color: "#ac0000" }} /> Početna
          </FooterDivLink>
          <FooterDivLink to="/o-nama">
            <MdOutlineInsertLink style={{ color: "#ac0000" }} /> O Nama
          </FooterDivLink>
          <FooterDivLink to="/reference">
            <MdOutlineInsertLink style={{ color: "#ac0000" }} /> Reference
          </FooterDivLink>
          <FooterDivLink to="/nas-tim">
            <MdOutlineInsertLink style={{ color: "#ac0000" }} /> Naš Tim
          </FooterDivLink>
          <FooterDivLink to="/kontakt">
            <MdOutlineInsertLink style={{ color: "#ac0000" }} /> Kontakt
          </FooterDivLink>
        </FooterDiv>
        <FooterDiv
          style={{
            width: "30%",
            marginLeft: "auto",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <FooterDivHeader2>
            &copy; 2022{" "}
            <span style={{ color: "#ac0000", fontSize: "20px" }}>
              GTP Inženjering
            </span>{" "}
            , All Rights Reserved.
          </FooterDivHeader2>
          <FooterDivHeader style={{ fontSize: "16px" }}>
            Developed by Dino Sijarić
          </FooterDivHeader>
        </FooterDiv>
      </FooterContainer>
    </div>
  );
};

export default Footer;
