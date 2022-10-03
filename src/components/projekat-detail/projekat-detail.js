import React from "react";
import { useParams } from "react-router-dom";
import { PROJEKTI_DATA } from "../projekti/projekti.data";
import {
  ProjekatDetailContainer,
  ItemsContainer,
  ProjekatDetailInfoContainer,
  ProjekatDetailInfoHeading,
  ProjekatDetailInfoParagraphsContainer,
} from "./projekat-detail.style";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { MdLocationPin, MdAccessTime, MdOpenWith } from "react-icons/md";
import { FaBuilding, FaUserAlt, FaBriefcase } from "react-icons/fa";
import { Gallery, Item } from "react-photoswipe-gallery";
const ProjekatDetail = () => {
  let { param } = useParams();

  const projekat = PROJEKTI_DATA.filter((projekat) => {
    return projekat.param === param;
  });

  console.log(projekat);
  const images = projekat[0].images;
  const info = projekat[0].info;

  return (
    <div>
      <ProjekatDetailInfoContainer>
        <ProjekatDetailInfoHeading>{info.naziv}</ProjekatDetailInfoHeading>
        <ProjekatDetailInfoParagraphsContainer>
          <p style={{ height: "20px", display: "inline-block", margin: "0" }}>
            <MdLocationPin style={{ fontSize: "12px" }} />{" "}
            <span style={{ fontWeight: "600" }}>Lokacija:</span> {info.location}
          </p>
          <p style={{ height: "20px", display: "inline-block", margin: "0" }}>
            <MdAccessTime style={{ fontSize: "12px" }} />{" "}
            <span style={{ fontWeight: "600" }}>Godina:</span> {info.godina}
          </p>
          <p style={{ height: "20px", display: "inline-block", margin: "0" }}>
            <FaBuilding style={{ fontSize: "12px" }} />{" "}
            <span style={{ fontWeight: "600" }}>Tip Projekta:</span>{" "}
            {info.tipProjekta}
          </p>
          <p style={{ height: "20px", display: "inline-block", margin: "0" }}>
            <FaUserAlt style={{ fontSize: "12px" }} />{" "}
            <span style={{ fontWeight: "600" }}>Autor/Dizajner:</span>{" "}
            {info.dizajnerAutor}
          </p>
          <p style={{ height: "20px", display: "inline-block", margin: "0" }}>
            <FaBriefcase style={{ fontSize: "12px" }} />{" "}
            <span style={{ fontWeight: "600" }}>Organizator:</span>{" "}
            {info.organizator}
          </p>
          <p style={{ height: "20px", display: "inline-block", margin: "0" }}>
            <MdOpenWith style={{ fontSize: "12px" }} />{" "}
            <span style={{ fontWeight: "600" }}>Površina:</span> {info.povrsina}
          </p>
        </ProjekatDetailInfoParagraphsContainer>
        <ProjekatDetailInfoHeading>
          <span style={{ fontSize: "24px" }}>Detalji projekta</span>
        </ProjekatDetailInfoHeading>
        <p>{info.detalji}</p>
        <ProjekatDetailInfoHeading style={{}}>
          <span style={{ fontSize: "24px" }}>Galerija projekta</span>
        </ProjekatDetailInfoHeading>
      </ProjekatDetailInfoContainer>
      <Gallery>
        <ItemsContainer>
          {images.map((img) => {
            return (
              <Item
                key={img.original}
                original={img.original}
                thumbnail={img.thumbnail}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={img.thumbnail} />
                )}
              </Item>
            );
          })}
        </ItemsContainer>
      </Gallery>
    </div>
  );
};

export default ProjekatDetail;
