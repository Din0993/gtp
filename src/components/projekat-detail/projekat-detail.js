import React from "react";
import { useParams } from "react-router-dom";
import { PROJEKTI_DATA } from "../projekti/projekti.data";
import { ProjekatDetailContainer } from "./projekat-detail.style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const ProjekatDetail = () => {
  let { param } = useParams();

  const projekat = PROJEKTI_DATA.filter((projekat) => {
    return projekat.param === param;
  });
  const images = projekat[0].images.map((img) => {
    return img.original;
  });

  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        {images.map((img) => {
          return (
            <ProjekatDetailContainer key={img}>
              <img style={imgStyle} src={img} />
            </ProjekatDetailContainer>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjekatDetail;
