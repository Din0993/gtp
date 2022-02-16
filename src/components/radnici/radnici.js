import React from "react";
import {
  RadniciContainer,
  Radnik,
  RadnikImg,
  RadnikIme,
  RadnikPosition,
  RadniciHeading,
} from "./radnici.style";
import { RADNICI_DATA as radnici } from "./radnici.data";

const Radnici = () => {
  return (
    <div>
      <RadniciHeading>Zaposleni</RadniciHeading>
      <RadniciContainer>
        {radnici.map((radnik) => {
          return (
            <Radnik key={radnik.id}>
              <RadnikImg src={radnik.img} />
              <RadnikIme>{radnik.fullName}</RadnikIme>
              <RadnikPosition>{radnik.position}</RadnikPosition>
            </Radnik>
          );
        })}
      </RadniciContainer>
    </div>
  );
};

export default Radnici;
