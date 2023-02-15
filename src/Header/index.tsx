import { useContext } from "react";
import { ColorContext } from "./components/ColorProvider";
import { StyledHeader } from "./components/StyledHeader";

export default function Header() {
  const context = useContext(ColorContext);

  function toggleBtn(){
    const btn = document.querySelector(".cover_theme") as HTMLElement

    context.toggleMode();
    btn.style.left == "25px" ? btn.style.left = "0px" : btn.style.left = "25px"
  }
  return ( 
    <StyledHeader>
      <div className="frame_header">
        <div className="logo">Form Trip</div>
        <div className="btn_theme" onClick={toggleBtn}>
          <img className="icon-sun" src="img/icon/sun-icon.svg" alt="Ícone do sol" />
          <img className="icon-moon" src="img/icon/moon-icon.svg" alt="Ícone da lua" />
          <span className="cover_theme"></span>
        </div>
      </div>
    </StyledHeader>
   );
}