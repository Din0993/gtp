import styled, { css } from "styled-components";

const SaradniciLogoStyles = css`
  opacity: 0.3;
  transition: all 0.3s;
  margin-left: 35px;
  &:hover {
    opacity: 1;
  }
`;

export const SaradniciContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 0;
  padding-bottom: 120px;
`;

export const SaradniciLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaradniciSliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SaradniciHeader = styled.h2`
  text-align: center;
  font-size: 45px;
  transition: all 0.4s;
  margin-bottom: 65px;
  padding-top: 65px;
  &:hover {
    color: #ba181b;
  }
`;

export const SaradniciLogo = styled.img`
  ${SaradniciLogoStyles}
`;

export const SaradniciLogoMaxima = styled.img`
  ${SaradniciLogoStyles}
  width: 190px;
  height: 38px;
`;

export const SaradniciLogoKopra = styled.img`
  ${SaradniciLogoStyles}
  width: 145px;
`;

export const SaradniciLogoStrabag = styled.img`
  ${SaradniciLogoStyles}
  transform: translateY(-5px);
`;
