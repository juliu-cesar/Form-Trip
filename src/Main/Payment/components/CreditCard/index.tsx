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

  const [nameIcon, setNameIcon] = useState(false);
  const [cpfIcon, setCpfIcon] = useState(false);
  const [cardNumberIcon, setCardNumberIcon] = useState(false);
  const [monthYearIcon, setMonthYearIcon] = useState(false);
  const [CVVIcon, setCVVIcon] = useState(false);

  return (
    <StyledForm
      id="Payment"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <input
          id="name"
          type="text"
          placeholder="Nome do Titular"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => {
            setNameIcon(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setNameIcon(false);
            }, 50);
          }}
        />
        {nameIcon && <DisplayErrorIcon state={name} id={"name"} />}
      </div>
      <div>
        <input
          id="CPF"
          type="text"
          placeholder="CPF do Titular"
          value={CPF}
          onChange={(e) => {
            let tx = e.target.value.replace(/[^\d]+/g, "");
            if (tx.length == 11) {
              let regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
              tx = tx.replace(regex, "$1.$2.$3-$4");
              setCPF(tx);
            } else {
              if (tx.length > 11) return;
              setCPF(tx);
            }
          }}
          onFocus={() => {
            setCpfIcon(true);
          }}
          onBlur={() => {
            setCpfIcon(false);
          }}
        />
        {cpfIcon && <DisplayErrorIcon state={CPF} id={"CPF"} />}
      </div>
      <div>
        <input
          id="card_number"
          type="text"
          placeholder="Numero do cartão"
          value={cardNumber}
          onChange={(e) => {
            let tx = e.target.value.replace(/[^\d]+/g, "");
            if (tx.length == 16) {
              let regex = /(\d{4})(\d{4})(\d{4})(\d{4})/;
              tx = tx.replace(regex, "$1 $2 $3 $4");
              setCardNumber(tx);
            } else {
              if (tx.length > 16) return;
              setCardNumber(tx);
            }
          }}
          onFocus={() => {
            setCardNumberIcon(true);
          }}
          onBlur={() => {
            setCardNumberIcon(false);
          }}
        />
        {cardNumberIcon && (
          <DisplayErrorIcon state={cardNumber} id={"cardNumber"} />
        )}
      </div>
      <div className="Inline">
        <div>
          <input
            id="card_date"
            type="text"
            placeholder="MM/AA"
            value={monthYear}
            onChange={(e) => {
              let tx = e.target.value.replace(/[^\d]+/g, "");
              if (tx.length == 4) {
                tx = tx.replace(/^(\d{2})(\d{2})/, "$1/$2");
                setMonthYear(tx);
              } else {
                if (tx.length > 4) return;
                setMonthYear(tx);
              }
            }}
            onFocus={() => {
              setMonthYearIcon(true);
            }}
            onBlur={() => {
              setMonthYearIcon(false);
            }}
          />
          {monthYearIcon && (
            <DisplayErrorIcon state={monthYear} id={"monthYear"} />
          )}
        </div>
        <div>
          <input
            id="CVV"
            type="number"
            placeholder="CVV"
            value={CVV}
            onChange={(e) => {
              let tx = e.target.value;
              if (tx.length > 3) return;
              setCVV(tx);
            }}
            onFocus={() => {
              setCVVIcon(true);
            }}
            onBlur={() => {
              setCVVIcon(false);
            }}
          />
          {CVVIcon && <DisplayErrorIcon state={CVV} id={"CVV"} />}
        </div>
      </div>
      <StyledSubmitButton type="submit">Salvar Cartão</StyledSubmitButton>
    </StyledForm>
  );
}
