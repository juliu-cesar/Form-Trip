import { StyledForm } from "@/src/Main/components/StyledForm";
import { StyledFrame } from "@/src/Main/components/StyledFrame";
import { StyledBank } from "./components/StyledBank";

export default function BankSlip() {
  return (
    <StyledFrame Border="color1">
      <StyledBank>
        <div className="bankSlip_icon"><img src="img/icon/payment/boleto.svg" alt="Ícone pix" /></div>
        <div className="text_pix">
          <h4>Boleto</h4>
          <p>Aprovação em 1 a 2 dias uteis.</p>
        </div>
      </StyledBank>
    </StyledFrame>
  );
}
