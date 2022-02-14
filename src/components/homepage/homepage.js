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
const HomePage = () => {
  return (
    <div>
      <Slider />
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
    </div>
  );
};

export default HomePage;
