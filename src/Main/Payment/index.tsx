import { useContext, useEffect, useState } from "react";
import { PriceContext } from "../CheckIn/components/PriceProvider";
import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledForm } from "../components/StyledForm";
import BankSlip from "./components/BankSlip";
import CreditCard from "./components/CreditCard";
import Pix from "./components/Pix";
import { StyledPayment } from "./components/StyledPayment";

export default function Payment() {
  const PriceMethod = useContext(PriceContext);
  const [PaymentForm, setPaymentForm] = useState(1);
  const [display, setDisplay] = useState("flex");

  useEffect(() => {}, []);

  function selectPayment(num: number) {
    let buttons = document.querySelectorAll(
      "#buttons_payment button"
    ) as NodeListOf<HTMLElement>;
    buttons.forEach((el, i) => {
      i == num ? el.classList.add("select") : el.classList.remove("select");
    });
    num == 1 ? setDisplay("block") : setDisplay("none");
    setPaymentForm(num);
    PriceMethod.setPaymentMethod(num);
  }
  return (
    <StyledPayment>
      <StyledContainer Border="color1">
        <StyledButtons id="buttons_payment">
          <button onClick={() => selectPayment(0)} className="">
            Pix
          </button>
          <button onClick={() => selectPayment(1)} className="select">
            Cartão
          </button>
          <button onClick={() => selectPayment(2)} className="">
            Boleto
          </button>
        </StyledButtons>
        <CreditCard display={display} />
        {PaymentForm == 0 && <Pix />}
        {PaymentForm == 2 && <BankSlip />}
      </StyledContainer>
    </StyledPayment>
  );
}
