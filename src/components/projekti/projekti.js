import React from "react";
import { PROJEKTI_DATA } from "./projekti.data";
import {
  ProjektiContainer,
  ProjektiItem,
  ProjektiLink,
  ProjektiHeading,
  ProjektiImg,
  ProjektiParagraph,
} from "./projekti.style";
const Projekti = () => {
  return (
    <div>
      <ProjektiContainer>
        {PROJEKTI_DATA.map((projekat) => {
          return (
            <ProjektiItem key={projekat.heading}>
              <ProjektiLink to={projekat.url}>
                <ProjektiImg src={projekat.imgSrc} />
                <ProjektiHeading>{projekat.heading}</ProjektiHeading>
              </ProjektiLink>
              <ProjektiParagraph>{projekat.project}</ProjektiParagraph>
            </ProjektiItem>
          );
        })}
      </ProjektiContainer>
    </div>
  );
};

export default Projekti;
