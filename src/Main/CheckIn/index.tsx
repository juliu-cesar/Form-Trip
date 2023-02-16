import { StyledContainer } from "../components/StyledContainer";
import { StyledFrame } from "../components/StyledFrame";
import { StyledCheckin } from "./components/StyledCheckin";


export default function CheckIn(){

  return(
    <StyledCheckin>
      <StyledContainer Border="color2">
        <div id="Price">R$ 000,00 dia</div>
        <StyledFrame className="frame_checkin">
          <div className="check-in">
            <div className="card_checkin">
              <div>Check-in</div>
              <p>00/00/000</p>
            </div>
            <div className="card_checkout">
              <div>Checkout</div>
              <p>00/00/000</p>
            </div>
            <div className="card_amount">
              Adultos 0 - Crianças 0
            </div>
          </div>
        </StyledFrame>
        <div id="price_per_day" className="Inline">
          <p>R$ 000,00 x 0 dias</p>
          <p>R$ 0000,00</p>
        </div>
        <div id="service_charge" className="Inline">
          <p>Taxa de serviço</p>
          <p>R$ 000,00</p>
        </div>
        <div id="Total_price" className="Inline">
          <div>Total</div>
          <div>R$ 0000,00</div>
        </div>
      </StyledContainer>
    </StyledCheckin>
  )
}