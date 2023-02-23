import { useContext } from "react";
import { PriceContext } from "../CheckIn/components/PriceProvider";
import { StyledContainer } from "../components/StyledContainer";
import { StyledTotal } from "./components/StyledTotal";

export default function TotalPrice() {
  const PriceTotal = useContext(PriceContext);

  return (
    <StyledTotal>
      <StyledContainer Border="color2">
        <div className="payment_method">
          <h4>Forma de Pagamento:</h4>
          {PriceTotal.PaymentMethod == 0 && <PaymentMethod tx="Pix" num={0} />}
          {PriceTotal.PaymentMethod == 1 && (
            <PaymentMethod tx="Cartão de credito" num={1} />
          )}
          {PriceTotal.PaymentMethod == 2 && (
            <PaymentMethod tx="Boleto bancário" num={2} />
          )}
        </div>
        <div className="total_price">
          <h4>Total</h4>
          {PriceTotal.PaymentMethod == 1 ? (
            <CardMethod
              ins={PriceTotal.CardInstallments}
              tt={PriceTotal.TotalPrice}
            />
          ) : (
            <h4>
              R$ {`${PriceTotal.TotalPrice.toFixed(2)}`.replace(/\./g, ",")}
            </h4>
          )}
        </div>
      </StyledContainer>
    </StyledTotal>
  );
}

function PaymentMethod({ tx, num }: { tx: string; num: number }) {
  let icons = ["pix-icon-only", "credit-card", "boleto"];
  return (
    <h4>
      {tx}{" "}
      <img
        src={`img/icon/payment/${icons[num]}.svg`}
        alt=""
        style={{ width: "30px", height: "30px" }}
      />
    </h4>
  );
}
function CardMethod({ ins, tt }: { ins: number; tt: number }) {
  return (
    <>
      {ins <= 5 ? (
        <h4>
          {ins} X R$ {`${(tt / ins).toFixed(2)}`.replace(/\./g, ",")}
        </h4>
      ) : (
        <h4>
          {ins} X R${" "}
          {`${((tt * (ins / 100 + 1)) / ins).toFixed(2)}`.replace(/\./g, ",")}
        </h4>
      )}
    </>
  );
}
