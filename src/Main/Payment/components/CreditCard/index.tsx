import { StyledForm } from "@/src/Main/components/StyledForm";
import { StyledSubmitButton } from "@/src/Main/components/StyledSubmitButton";
import { useState } from "react";
import DisplayErrorIcon from "./components/DisplayErrorIcon";

export default function CreditCard() {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [CVV, setCVV] = useState("");

  return (
    <StyledForm id="Payment">
      <div>
        <input
          id="name"
          type="text"
          placeholder="Nome do Titular"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <DisplayErrorIcon state={name} id={"name"} />
      </div>
      <div>
        <input
          id="CPF"
          type="number"
          placeholder="CPF do Titular"
          value={CPF}
          onChange={(e) => {
            setCPF(e.target.value);
          }}
        />
        <DisplayErrorIcon state={CPF} id={"CPF"} />
      </div>
      <div>
        <input
          id="card_number"
          type="number"
          placeholder="Numero do cartão"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
        />
        <DisplayErrorIcon state={cardNumber} id={"cardNumber"} />
      </div>
      <div className="Inline">
        <div>
          <input
            id="card_date"
            type="number"
            placeholder="MM/AA"
            value={monthYear}
            onChange={(e) => {
              setMonthYear(e.target.value);
            }}
          />
          <DisplayErrorIcon state={monthYear} id={"monthYear"} />
        </div>
        <div>
          <input
            id="CVV"
            type="number"
            placeholder="CVV"
            value={CVV}
            onChange={(e) => {
              setCVV(e.target.value);
            }}
          />
          <DisplayErrorIcon state={CVV} id={"CVV"} />
        </div>
      </div>
      <StyledSubmitButton type="submit">Salvar Cartão</StyledSubmitButton>
    </StyledForm>
  );
}
