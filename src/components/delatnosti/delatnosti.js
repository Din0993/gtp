import React from "react";
import {
  DelatnostiContainer,
  DelatnostiItemsContainer,
  DelatnostiItem,
  DelatnostiItemImg,
  DelatnostiItemTitleAndDesc,
  DelatnostiItemHeading,
  DelatnostiItemDesc,
} from "./delatnosti.style";

const Delatnosti = ({ delatnosti }) => {
  return (
    <div>
      <DelatnostiContainer>
        <DelatnostiItemsContainer>
          {delatnosti.map((delatnost) => {
            return (
              <DelatnostiItem key={delatnost.id}>
                <DelatnostiItemImg src={delatnost.imgSrc} />
                <DelatnostiItemTitleAndDesc>
                  <DelatnostiItemHeading>
                    {delatnost.heading}
                  </DelatnostiItemHeading>
                  <DelatnostiItemDesc>{delatnost.desc}</DelatnostiItemDesc>
                </DelatnostiItemTitleAndDesc>
              </DelatnostiItem>
            );
          })}
        </DelatnostiItemsContainer>
      </DelatnostiContainer>
    </div>
  );
};

export default Delatnosti;
