import { StyledContainer } from "../components/StyledContainer";
import { StyledTotal } from "./components/StyledTotal";

export default function TotalPrice() {
  return (
    <StyledTotal>
      <StyledContainer Border="color2">
        <div className="form_payment">
          <h4>Forma de Pagamento:</h4>
          <h4>Cartão</h4>
        </div>
        <div className="total_price">
          <h4>Total</h4>
          <h4>0 X R$ 000,00</h4>
        </div>
      </StyledContainer>
    </StyledTotal>
  );
}
