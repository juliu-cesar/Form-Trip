import { useState, useEffect } from "react";
import { StyledContainer } from "../components/StyledContainer";
import { StyledFrame } from "../components/StyledFrame";
import { StyledCheckin } from "./components/StyledCheckin";
import { DatePicker } from "antd";
import { StyledRangePicker } from "./components/StyledRangePicker";
import config from "@/config.json";
import dayjs from "dayjs";
import AmountOfPeople from "./components/AmountOfPeople";

export default function CheckIn() {
  const [dateR, setDateR] = useState<any>();
  const [totalDays, setTotalDays] = useState(1);
  const [priceDay, setPriceDay] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);
  const { RangePicker } = DatePicker;
  const [aAdult, setAAdult] = useState(1);
  const [aChild, setAChild] = useState(0);
  const [aBaby, setABaby] = useState(0);
  const amount = {
    adult: {state: aAdult, set: setAAdult},
    child: {state: aChild, set: setAChild},
    baby: {state: aBaby, set: setABaby},
  }

  useEffect(() => {
    let price = config.houses[0].price;

    setPriceDay(price.priceDay);
    setServiceCharge(price.serviceCharge);

    if (dateR) {
      let date1 = new Date(dateR[0].$d);
      let date2 = new Date(dateR[1].$d);
      const diffInMs = date2.getTime() - date1.getTime();
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      setTotalDays(diffInDays);
    }
  }, [dateR]);

  return (
    <StyledCheckin>
      <StyledContainer Border="color2">
        <div id="Price">R$ {priceDay},00 dia</div>
        <StyledFrame Border="color2">
          <div className="check-in">
            <StyledRangePicker>
              <RangePicker
                format={"DD/MM/YYYY"}
                value={dateR}
                onChange={(e: any) => {
                  setDateR(e);
                }}
                disabledDate={(current) => {
                  return (
                    dayjs().add(-1, "days") >= current ||
                    dayjs().add(1, "month").add(7, "days") <= current
                  );
                }}
              />
            </StyledRangePicker>
            <div className="card_amount">
              <button className="btn_amount">Adultos 0 - Crianças 0</button>
              <AmountOfPeople amount={amount}/>
            </div>
          </div>
        </StyledFrame>
        <div id="price_per_day" className="Inline">
          <p>
            R$ {priceDay},00 x {totalDays} dias
          </p>
          <p>R$ {priceDay * totalDays},00</p>
        </div>
        <div id="service_charge" className="Inline">
          <p>Taxa de serviço</p>
          <p>R$ {serviceCharge},00</p>
        </div>
        <div id="Total_price" className="Inline">
          <div>Total</div>
          <div>R$ {priceDay * totalDays + serviceCharge},00</div>
        </div>
      </StyledContainer>
    </StyledCheckin>
  );
}
