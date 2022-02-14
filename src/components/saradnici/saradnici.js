import React from "react";
import {
  SaradniciContainer,
  SaradniciLogosContainer,
  SaradniciSliderContainer,
  SaradniciHeader,
  SaradniciLogo,
  SaradniciLogoMaxima,
  SaradniciLogoKopra,
  SaradniciLogoStrabag,
} from "./saradnici.style";

import fibran from "../../assets/fibran.png";
import knaufins from "../../assets/knaufins.png";
import knauf from "../../assets/knauf.png";
import maxima from "../../assets/maxima.png";
import strabag from "../../assets/strabag.png";
import kopra from "../../assets/kopra.png";
import rofix from "../../assets/rofix.png";
import { Link } from "react-router-dom";

const Saradnici = () => {
  return (
    <div>
      <SaradniciContainer>
        <div>
          <SaradniciHeader>NAŠI SARADNICI</SaradniciHeader>
        </div>
        <SaradniciLogosContainer>
          <SaradniciSliderContainer>
            <a href="https://www.strabag.com/">
              <SaradniciLogoStrabag src={strabag} />
            </a>
            <a href="https://www.kopra.rs">
              <SaradniciLogoKopra src={kopra} />
            </a>
            <a href="https://www.maximapaints.com/sr/pocetna">
              <SaradniciLogoMaxima src={maxima} />
            </a>
            <a href="http://www.knauf.rs/">
              <SaradniciLogo src={knauf} />
            </a>
            <a href="https://www.knaufinsulation.rs/">
              <SaradniciLogo src={knaufins} />
            </a>
            <a href="https://www.roefix.rs/">
              <SaradniciLogo src={rofix} />
            </a>
            <a href="http://archive.fibran.si/frontend/index.php?chlang=SR">
              <SaradniciLogo src={fibran} />
            </a>
          </SaradniciSliderContainer>
        </SaradniciLogosContainer>
      </SaradniciContainer>
    </div>
  );
};

export default Saradnici;
