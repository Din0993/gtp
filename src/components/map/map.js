import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  MapContainerStyle,
  KontaktContainer,
  KontaktHeading,
  KontaktInfoContainer,
  KontaktInfoItem,
  KontaktRightSideContainer,
} from "./map.style";

import { BiPhone, BiMailSend, BiPin } from "react-icons/bi";

import "./map.css";
const MapAndInfo = () => {
  const position = [44.770109665901835, 20.48356472610921];
  return (
    <KontaktContainer>
      <MapContainerStyle>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>We are here.</Popup>
          </Marker>
        </MapContainer>
      </MapContainerStyle>
      <KontaktRightSideContainer>
        <KontaktHeading>Kontakt</KontaktHeading>
        <KontaktInfoContainer>
          <KontaktInfoItem>
            <BiPhone size="3em" />
            <h3>Telefon</h3>
            <p>+381 63 000 000 0</p>
          </KontaktInfoItem>
          <KontaktInfoItem>
            <BiMailSend size="3em" />
            <h3>E-mail</h3>
            <p>email@gmail.com</p>
          </KontaktInfoItem>
          <KontaktInfoItem>
            <BiPin size="3em" />
            <h3>Adresa</h3>
            <p>Darvinova 25, Beograd</p>
          </KontaktInfoItem>
        </KontaktInfoContainer>
      </KontaktRightSideContainer>
    </KontaktContainer>
  );
};

export default MapAndInfo;
