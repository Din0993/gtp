import React from "react";
import {
  RadniciContainer,
  Radnik,
  RadnikImg,
  RadnikIme,
  RadnikPosition,
  RadniciHeading,
  NasTimText,
  NasTimHeading,
} from "./radnici.style";
import { RADNICI_DATA as radnici } from "./radnici.data";

const Radnici = () => {
  return (
    <div>
      <NasTimHeading>NAŠ TIM</NasTimHeading>
      <NasTimText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in felis
        ornare nisl eleifend rutrum quis a odio. Vestibulum rutrum vestibulum
        ex. Duis feugiat nisi at nisi faucibus mollis. Integer placerat ante
        nunc, id lacinia metus ultricies et. Pellentesque sollicitudin purus sed
        lorem faucibus suscipit. Ut consequat porta diam sed fermentum.
        Suspendisse ultrices euismod feugiat. Sed a pharetra justo. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Praesent faucibus malesuada rutrum. Morbi vitae faucibus arcu, ac
        dignissim nisi. Quisque feugiat metus at ullamcorper fringilla. Maecenas
        vitae efficitur augue, et mattis velit. Cras mi velit, bibendum eget
        ornare ac, pharetra id nunc. Nam in lectus varius, porta nisi quis,
        finibus turpis. Sed faucibus urna metus, blandit facilisis augue
        venenatis in. Nam semper, tellus ac sagittis gravida, libero metus
        venenatis lectus, et accumsan metus magna ac eros. Vestibulum varius
        purus turpis, fermentum semper leo dignissim vel. Donec nulla risus,
        iaculis quis vestibulum et, porttitor eu eros. Duis vitae commodo nibh.
        Duis quis auctor enim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin porttitor rutrum libero nec luctus. Cras ultrices
        ipsum at velit porta aliquet. Pellentesque aliquam dui eget dolor mattis
        pulvinar vel vel est. Quisque diam nunc, dictum sit amet ultrices
        sollicitudin, ultricies at libero. Aenean lacinia sed magna in
        tristique. Donec tincidunt tincidunt ullamcorper. Etiam vitae turpis
        odio.
      </NasTimText>
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
