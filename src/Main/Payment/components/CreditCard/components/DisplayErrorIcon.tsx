import { useEffect, useState } from "react";
import { PaymentValidade } from "./PaymentValidade";
import { StyledErrorIcon } from "./StyledErrorIcon";

interface Props {
  state: string;
  id: string;
}

export default function DisplayErrorIcon({ state, id }: Props) {
  const [showIconOk, setShowIconOk] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let Validate = PaymentValidade[id as keyof typeof PaymentValidade](state);
    setOpacity(1)

    if (Validate) {
      setShowIconOk(true);
    } else {
      setShowIconOk(false);
    }
  }, [state]);

  return (
    <>
      {showIconOk ? (
        <StyledErrorIcon opacity={opacity}>
          <img src="img/icon/done.svg" />
        </StyledErrorIcon>
      ) : (
        <StyledErrorIcon opacity={opacity}>
          <img src="img/icon/close.svg" />
        </StyledErrorIcon>
      )}
    </>
  );
}
