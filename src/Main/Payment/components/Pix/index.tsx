import { StyledFrame } from "@/src/Main/components/StyledFrame";
import { StyledPix } from "./components/StyledPix";

export default function Pix() {
  return (
    <StyledFrame Border="color1">
      <StyledPix>
        <div className="pix_icon">
          <img src="img/icon/payment/pix-icon.svg" alt="Ícone pix" />
        </div>
        <div className="text_pix">
          <h4>Pix</h4>
          <p>Aprovação imediata.</p>
        </div>
      </StyledPix>
    </StyledFrame>
  );
}
