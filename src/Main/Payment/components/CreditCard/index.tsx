import { StyledForm } from "@/src/Main/components/StyledForm";

export default function CreditCard() {
  return (
    <StyledForm id="Payment">
      <input id="Name" type="text" placeholder="Nome do Titular" />
      <input id="CPF" type="number" placeholder="CPF do Titular" />
      <input id="Card_number" type="number" placeholder="Numero do cartão" />
      <div className="Inline">
        <input id="card_date" type="number" placeholder="MM/AA" />
        <input id="CVV" type="number" placeholder="CVV" />
      </div>
    </StyledForm>
  );
}
