import React from "react";
import {
  GalleryContainer,
  GalleryItem1,
  GalleryItem2,
  GalleryItem3,
  GalleryItem4,
  GalleryItem5,
  GalleryItem6,
  GalleryItem7,
  GalleryItem8,
  GalleryItem9,
  GalleryItem10,
  GalleryItem11,
  GalleryItem12,
  GalleryItem13,
  GalleryItem14,
  GalleryImg,
} from "./gallery.style";

import { GALLERY_DATA as galdata } from "./gallery.data";

const Gallery = () => {
  return (
    <div>
      <GalleryContainer>
        <GalleryItem1>
          <GalleryImg src={galdata[0]} />
        </GalleryItem1>
        <GalleryItem2>
          <GalleryImg src={galdata[1]} />
        </GalleryItem2>
        <GalleryItem3>
          <GalleryImg src={galdata[2]} />
        </GalleryItem3>
        <GalleryItem4>
          <GalleryImg src={galdata[3]} />
        </GalleryItem4>
        <GalleryItem5>
          <GalleryImg src={galdata[4]} />
        </GalleryItem5>
        <GalleryItem6>
          <GalleryImg src={galdata[5]} />
        </GalleryItem6>
        <GalleryItem7>
          <GalleryImg src={galdata[6]} />
        </GalleryItem7>
        <GalleryItem8>
          <GalleryImg src={galdata[7]} />
        </GalleryItem8>
        <GalleryItem9>
          <GalleryImg src={galdata[8]} />
        </GalleryItem9>
        <GalleryItem10>
          <GalleryImg src={galdata[9]} />
        </GalleryItem10>
        <GalleryItem11>
          <GalleryImg src={galdata[10]} />
        </GalleryItem11>
        <GalleryItem12>
          <GalleryImg src={galdata[11]} />
        </GalleryItem12>
        <GalleryItem13>
          <GalleryImg src={galdata[12]} />
        </GalleryItem13>
        <GalleryItem14>
          <GalleryImg src={galdata[13]} />
        </GalleryItem14>
      </GalleryContainer>
    </div>
  );
};

export default Gallery;
