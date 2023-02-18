import { useEffect, useState } from "react";
import { vEmail, vPassword, vCEP, vCheckPassword } from "./Validate";
import config from "../../../../config.json";

interface Props {
  state: string[];
  index: number;
}

export default function DisplayError({ state, index }: Props) {
  const allValidate = [vEmail, vPassword, vCheckPassword, vCEP];
  let cForm = config.form_register;

  useEffect(() => {
    if (allValidate[index](state[index], state[index - 1])) {
      toggle(0, 1)
      setTimeout(() => {
        toggle(0, 0)
      }, 5000);
    } else {
      toggle(1, 0)
    }
  }, [state[index]]);

  function toggle(i1: number, i2: number) {
    let elErr = document.querySelector(
      `[data-msg='err-${cForm[index].id}']`
    ) as HTMLElement;
    let elScc = document.querySelector(
      `[data-msg='scc-${cForm[index].id}']`
    ) as HTMLElement;
    elErr.style.opacity = String(i1);
    elScc.style.opacity = String(i2);
  }
  return (
    <>
      <span className="err_msg" data-msg={`err-${cForm[index].id}`}>
        <img src="img/icon/close.svg" alt="ícone erro" />
      </span>
      <span className="scc_msg" data-msg={`scc-${cForm[index].id}`}>
        <img src="img/icon/done.svg" alt="ícone sucesso" />
      </span>
    </>
  );
}
