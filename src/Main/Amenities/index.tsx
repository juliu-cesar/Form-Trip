import { CarouselContext } from "@/src/Carousel/components/CarouselProvider";
import { ColorContext } from "@/src/Header/components/ColorProvider";
import { useContext, useEffect, useState } from "react";
import { StyledContainer } from "../components/StyledContainer";
import { StyledFrame } from "../components/StyledFrame";
import { StyledAmenities } from "./components/StyledAmenities";
import { StyledRooms } from "./components/StyledRooms";
import config from "@/config.json";

export default function Amenities() {
  const context = useContext(ColorContext);
  const houseContext = useContext(CarouselContext);

  const house = config.houses[houseContext.index];

  return (
    <StyledAmenities>
      <StyledContainer Border="color1">
        <StyledRooms Width={110} Height={60} className="rooms">
          <div className="bedrooms">
            <h4>Quartos</h4>
            <p>{house.bedrooms.length} quartos</p>
          </div>
          <div className="beds">
            <h4>Camas</h4>
            <p>{house.totalBeds} camas</p>
          </div>
          <div className="bathroom">
            <h4>Banheiros</h4>
            <p>{house.bathroom} banheiros</p>
          </div>
        </StyledRooms>
        <StyledFrame Border="color1">
          <StyledRooms Width={150} Height={95} className="detail_Bedrooms">
            {house.bedrooms.map((e, i) => {
              return (
                <div className="bedroom" key={i}>
                  <h4>Quarto {i + 1}</h4>
                  <p>{e.msg}</p>
                  <span>
                    {e.beds.map((bed, i) => {
                      return (
                        <img
                          className="icon"
                          src={`img/icon/svg/${bed}-${context.mode}.svg`}
                          alt="Ícone cama"
                          key={i}
                        />
                      );
                    })}
                  </span>
                </div>
              );
            })}
          </StyledRooms>
        </StyledFrame>
        <div className="Amenities">
          {house.amenities.map((e, i)=>{
            return(
              <div key={i}>{e}</div>
            )
          })}
        </div>
      </StyledContainer>
    </StyledAmenities>
  );
}
