import React from "react";
import { useParams } from "react-router-dom";
import { PROJEKTI_DATA } from "../projekti/projekti.data";
import {
  ProjekatDetailContainer,
  ItemsContainer,
} from "./projekat-detail.style";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
const ProjekatDetail = () => {
  let { param } = useParams();

  const projekat = PROJEKTI_DATA.filter((projekat) => {
    return projekat.param === param;
  });
  const images = projekat[0].images;

  return (
    <div>
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
