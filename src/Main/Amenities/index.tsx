import { ColorContext } from "@/src/Header/components/ColorProvider";
import { useContext, useEffect, useState } from "react";
import { StyledContainer } from "../components/StyledContainer";
import { StyledFrame } from "../components/StyledFrame";
import { StyledAmenities } from "./components/StyledAmenities";
import { StyledRooms } from "./components/StyledRooms";

export default function Amenities() {
  const context = useContext(ColorContext);

  return (
    <StyledAmenities>
      <StyledContainer Border="color1">
        <StyledRooms Width={110} Height={60} className="rooms">
          <div className="bedrooms">
            <h4>Quartos</h4>
            <p>0 quartos</p>
          </div>
          <div className="beds">
            <h4>Camas</h4>
            <p>0 camas</p>
          </div>
          <div className="bathroom">
            <h4>Banheiros</h4>
            <p>0 banheiros</p>
          </div>
        </StyledRooms>
        <StyledFrame Border="color1">
          <StyledRooms Width={110} Height={85} className="detail_Bedrooms">
            <div className="bedroom1">
              <h4>Quarto 1</h4>
              <span>
                <img
                  className="icon"
                  src={`img/icon/svg/bed-queen-${context.mode}.svg`}
                  alt="Ícone cama"
                />
              </span>
            </div>
            <div className="bedroom1">
              <h4>Quarto 2</h4>
              <span>
                <img
                  className="icon"
                  src={`img/icon/svg/bed-single-${context.mode}.svg`}
                  alt="Ícone cama"
                />
                <img
                  className="icon"
                  src={`img/icon/svg/bed-single-${context.mode}.svg`}
                  alt="Ícone cama"
                />
              </span>
            </div>
            <div className="bedroom1">
              <h4>Quarto n</h4>
              <span>
                <img
                  className="icon"
                  src={`img/icon/svg/bed-queen-${context.mode}.svg`}
                  alt="Ícone cama"
                />
              </span>
            </div>
          </StyledRooms>
        </StyledFrame>
        <div className="Amenities">
          <div>Cozinha Exclusiva</div>
          <div>WiFi</div>
          <div>Garagem coberta</div>
          <div className="center">
            Piscina privativa externa
          </div>
          <div className="center">
            Jacuzzi privativa
          </div>
          <div>Permitido PET</div>
          <div>Maquina de lavar</div>
          <div>Netflix, tv a cabo</div>
        </div>
      </StyledContainer>
    </StyledAmenities>
  );
}
