import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledForm } from "../components/StyledForm";
import { StyledPayment } from "./components/StyledPayment";

export default function Payment() {
  return (
    <StyledPayment>
      <StyledContainer Border="color1">
        <StyledButtons>
          <button className="">Pix</button>
          <button className="select">Cartão</button>
          <button className="">Boleto</button>
        </StyledButtons>
        <StyledForm id="Payment">
          <input id="Name" type="text" placeholder="Nome do Titular" />
          <input id="CPF" type="number" placeholder="CPF do Titular" />
          <input
            id="Card_number"
            type="number"
            placeholder="Numero do cartão"
          />
          <div className="Inline">
              <input id="card_date" type="number" placeholder="MM/AA" />
              <input id="CVV" type="number" placeholder="CVV" />
          </div>
        </StyledForm>
      </StyledContainer>
    </StyledPayment>
  );
}
