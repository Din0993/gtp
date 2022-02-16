import styled, { css } from "styled-components";

export const GalleryContainer = styled.div`
  background-color: #e9ecef;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 7vw);
  grid-gap: -155px;
  padding: 5px;
`;

const galleryItemStyle = css`
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const GalleryItem1 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  ${galleryItemStyle}
`;
export const GalleryItem2 = styled.figure`
  grid-row: 1 / span 3;
  grid-column: 3 / span 3;
  ${galleryItemStyle}
`;
export const GalleryItem3 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 6 / 7;
  ${galleryItemStyle}
`;
export const GalleryItem4 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 7 / span 2;
  ${galleryItemStyle}
`;
export const GalleryItem5 = styled.figure`
  ${galleryItemStyle}
  grid-row: 3 / span 3;
  grid-column: 1 / span 2;
`;
export const GalleryItem6 = styled.figure`
  grid-row: 4 / span 2;
  grid-column: 3 / span 2;
  ${galleryItemStyle}
`;
export const GalleryItem7 = styled.figure`
  grid-row: 4 / 5;
  grid-column: 5 / 6;
  ${galleryItemStyle}
`;
export const GalleryItem8 = styled.figure`
  grid-row: 3 / span 2;
  grid-column: 6 / span 2;
  ${galleryItemStyle}
`;
export const GalleryItem9 = styled.figure`
  grid-row: 3 / span 3;
  grid-column: 8 / 9;
  ${galleryItemStyle}
`;
export const GalleryItem10 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 1 / 2;
  ${galleryItemStyle}
`;
export const GalleryItem11 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 2 / span 2;
  ${galleryItemStyle}
`;
export const GalleryItem12 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 4 / 5;
  ${galleryItemStyle}
`;
export const GalleryItem13 = styled.figure`
  grid-row: 5 / span 3;
  grid-column: 5 / span 3;
  ${galleryItemStyle}
`;
export const GalleryItem14 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 8 / 9;
  ${galleryItemStyle}
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
