import { StyledCarousel } from "./components/StyledCarousel";
import config from "../../config.json";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { CarouselContext } from "./components/CarouselProvider";
import { SvgNext, SvgPrev } from "../Main/components/SvgPrevNext";

export default function Carousel() {
  const indexCr = useContext(CarouselContext);

  function selectCard(el: HTMLElement): void {
    let ix = indexCr.index;
    
    if (el.classList[0] == "prev") {
      if (ix == 0) {
        ix = 3;
        indexCr.setIndex(3);
      } else {
        indexCr.setIndex(ix - 1);
        ix --;
      }
    } else {
      if (ix == 3) {
        ix = 0;
        indexCr.setIndex(0);
      } else {
        indexCr.setIndex(ix + 1);
        ix ++;
      }
    }
    const carousel = document.querySelector(".Carousel") as HTMLElement;
    
    carousel.style.left = `${ix * - carousel.clientWidth / 4}px`;
  }

  return (
    <StyledCarousel>
      <div className="frame">
        <button
          className="prev"
          onClick={(e) => selectCard(e.currentTarget as HTMLElement)}
          style={{backgroundColor: "unset", border: "unset"}}
        >
          <SvgPrev />
        </button>
        <div className="frame_img">
          <div className="Carousel">
            {config.houses.map((e, index) => {
              return (
                <div className="card_img" key={index}>
                  <img src={`img/Houses/${e.url}.jpg`} alt="e.url" />
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="next"
          onClick={(e) => selectCard(e.currentTarget as HTMLElement)}
          style={{backgroundColor: "unset", border: "unset"}}
        >
          <SvgNext />
        </button>
      </div>
    </StyledCarousel>
  );
}
