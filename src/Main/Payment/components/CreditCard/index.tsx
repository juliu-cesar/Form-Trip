import { useContext, useState } from "react";
import { StyledForm } from "@/src/Main/components/StyledForm";
import { StyledSubmitButton } from "@/src/Main/components/StyledSubmitButton";
import DisplayErrorIcon from "./components/DisplayErrorIcon";
import { PaymentValidade } from "./components/PaymentValidade";
import { StyledCreditCard } from "./components/StyledCreditCard";
import { StyledFormCard } from "./components/StyledFormCard";
import { StyledErrorForm } from "@/src/Main/components/StyledErrorForm";
import { PriceContext } from "@/src/Main/CheckIn/components/PriceProvider";
import { Select } from "antd";

interface Props {
  display: string;
}
type Options = {
  label: string;
  options: [
    {
      label: string;
      value: string;
    }
  ];
}[];

export default function CreditCard({ display }: Props) {
  const CardI = useContext(PriceContext);
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
  const [SaveCard, setSaveCard] = useState(false);
  const [showErrorForm, setShowErrorForm] = useState(false);
  let map = [""];

  function ValidateAndSave() {
    let py = PaymentValidade;
    let Validate: boolean =
      py["name"](name) &&
      py["CPF"](CPF) &&
      py["cardNumber"](cardNumber) &&
      py["monthYear"](monthYear) &&
      py["CVV"](CVV);

    if (Validate) {
      setSaveCard(true);
    } else {
      setShowErrorForm(true);
      setTimeout(() => {
        setShowErrorForm(false);
      }, 5000);
    }
  }

  let oN = [];
  let oI = [];
  for (let x = 1; x <= 10; x++) {
    if (x <= 5) {
      oN.push({
        label: `${x} X R$ ${(CardI.TotalPrice / x).toFixed(2)} = R$ ${CardI.TotalPrice.toFixed(2)}`.replace(/\./g, ","),
        value: x,
      });
    } else {
      oI.push({
        label: `${x} X R$ ${((CardI.TotalPrice * (x / 100 + 1)) / x).toFixed(
          2
        )} = R$ ${(CardI.TotalPrice * (x / 100 + 1)).toFixed(2)}`.replace(/\./g, ","),
        value: x,
      });
    }
  }
  let options = [
    { label: "Sem juros", options: oN },
    { label: "Com juros", options: oI },
  ];

  return (
    <StyledFormCard display={display}>
      {SaveCard ? (
        <StyledCreditCard>
          <div>
            <img
              src="img/icon/payment/creditCard.png"
              alt="imagem cartão de credito"
            />
            <p id="number">{cardNumber}</p>
            <p id="monthYear">{monthYear}</p>
            <p id="cardName">{name}</p>
          </div>
        </StyledCreditCard>
      ) : (
        <StyledForm
          id="Payment"
          onSubmit={(e) => {
            e.preventDefault();
            ValidateAndSave();
          }}
        >
          <span className="displayFlex">
            {showErrorForm && (
              <StyledErrorForm id="Err_PaymentForm">
                Por favor, preencha os campos.
              </StyledErrorForm>
            )}
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
          </span>
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

          <div className="card_installments">
            <Select
              value={CardI.CardInstallments}
              style={{
                width: "100%",
              }}
              onChange={(e) => {
                CardI.setCardInstallments(Number(e));
              }}
              options={options}
            />
          </div>
          <StyledSubmitButton type="submit">Salvar Cartão</StyledSubmitButton>
        </StyledForm>
      )}
    </StyledFormCard>
  );
}
