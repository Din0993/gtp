import React from "react";
import Slider from "../slider/slider";
import {
  HomePageInfoContainer,
  HomePageInfoHeader,
  HomePageInfoSubHeader,
  HomePageInfoText,
} from "./homepage.style";
import { DELATNOSTI_DATA } from "./homepage.data";
import Delatnosti from "../delatnosti/delatnosti";
import Saradnici from "../saradnici/saradnici";
import Radnici from "../radnici/radnici";
import sud from "../../assets/sudkg.jpg";
import zeleznicka from "../../assets/zeleznicka-glavna.jpg";
import skcrkva from "../../assets/crkvask.jpg";
import bw from "../../assets/bw-main.jpg";
import gtplogo from "../../assets/gtplogoslider.png";
import gtplogo2 from "../../assets/logo2.png";
import gtplogo3 from "../../assets/logo3.png";
import gtplogo4 from "../../assets/logo4.png";
import gtplogo5 from "../../assets/logo5.jpg";

const HomePage = () => {
  const slides = [
    {
      city: "Belgrade Waterfront",
      country: "Beograd",
      img: gtplogo5,
    },
    {
      city: "Belgrade Waterfront",
      country: "Beograd",
      img: bw,
    },
    {
      city: "Železnička stanica",
      country: "Beograd",
      img: zeleznicka,
    },
    {
      city: "Saborna crkva",
      country: "Sremski Karlovci",
      img: skcrkva,
    },
    {
      city: "Palata Pravde",
      country: "Kragujevac",
      img: sud,
    },
  ];

  return (
    <div>
      <Slider slides={slides} />
      <HomePageInfoContainer>
        <HomePageInfoHeader>
          Građevinska firma - GTP Inženjering Beograd
        </HomePageInfoHeader>
        <HomePageInfoSubHeader>
          GRADNJA. RENOVIRANJE. ADAPTACIJA
        </HomePageInfoSubHeader>
        <HomePageInfoText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officiis, recusandae tenetur, voluptates illo impedit distinctio ullam
          facere odit, iure fugiat molestiae vero. Dolores hic consequuntur
          laudantium voluptates quam cum.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eveniet officiis, recusandae tenetur, voluptates
          illo impedit distinctio ullam facere odit, iure fugiat molestiae vero.
          Dolores hic consequuntur laudantium voluptates quam cum.Lorem ipsum,
          dolor sit amet consectetur adipisicing elit.{" "}
        </HomePageInfoText>
      </HomePageInfoContainer>
      <Delatnosti delatnosti={DELATNOSTI_DATA} />
      <Saradnici />
      <Radnici />
    </div>
  );
};

export default HomePage;
