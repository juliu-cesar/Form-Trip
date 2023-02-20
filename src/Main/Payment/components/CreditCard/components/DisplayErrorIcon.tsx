import { useEffect, useState } from "react";
import { PaymentValidade } from "./PaymentValidade";
import { StyledErrorIcon } from "./StyledErrorIcon";

interface Props {
  state: string;
  id: string;
}

export default function DisplayErrorIcon({ state, id }: Props) {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    let Validate = PaymentValidade[id as keyof typeof PaymentValidade](state);

    if (Validate) {
      clearAndSelect(0,1)
    }else{
      clearAndSelect(1,0)
    }
  }, [state]);
  function clearAndSelect(n1: number, n2: number) {
    let elErr = document.querySelector(`.errIcon_${id}`) as HTMLElement;
    let elOk = document.querySelector(`.okIcon_${id}`) as HTMLElement;

    elErr.style.opacity = String(n1);
    elOk.style.opacity = String(n2);
  }
  return (
    <>
      <StyledErrorIcon className={`errIcon_${id}`}>
        <img src="img/icon/close.svg" />
      </StyledErrorIcon>
      <StyledErrorIcon className={`okIcon_${id}`}>
        <img src="img/icon/done.svg" />
      </StyledErrorIcon>
    </>
  );
}
