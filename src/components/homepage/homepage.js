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
const HomePage = () => {
  const slides = [
    {
      city: "Paris",
      country: "France",
      img: sud,
    },
    {
      city: "Singapore",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg",
    },
    {
      city: "Prague",
      country: "Czech Republic",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
    },
    {
      city: "Moscow",
      country: "Russia",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg",
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
