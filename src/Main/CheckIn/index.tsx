import { useState } from "react";
import { StyledContainer } from "../components/StyledContainer";
import { StyledFrame } from "../components/StyledFrame";
import { StyledCheckin } from "./components/StyledCheckin";
import { DatePicker } from "antd";
import { StyledRangePicker } from "./components/StyledRangePicker";

export default function CheckIn() {
  const [dateV, setDateV] = useState("");
  const { RangePicker } = DatePicker;
  return (
    <StyledCheckin>
      <StyledContainer Border="color2">
        <div id="Price">R$ 000,00 dia</div>
        <StyledFrame Border="color2">
          <div className="check-in">
            <StyledRangePicker>
              <RangePicker format={"DD/MM/YYYY"} />
            </StyledRangePicker>
            <div className="card_amount">Adultos 0 - Crianças 0</div>
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
  );
}
