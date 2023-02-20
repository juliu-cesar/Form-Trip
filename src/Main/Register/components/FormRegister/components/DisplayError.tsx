import { useEffect, useState } from "react";
import { RegisterValidate } from "./RegisterValidate";
import { StyledMsg } from "./StyledMsg";
import { IState } from "./IState";

interface Props {
  state: IState;
  id: string;
  msg?: {
    msg: string;
    class: string;
  }[];
}

export default function DisplayError({ state, id, msg }: Props) {
  const [borderColor, setBorderColor] = useState("red");

  useEffect(() => {
    let aValidate = RegisterValidate[id as keyof typeof RegisterValidate](
      state[id as keyof typeof state].state,
      state["password"].state
    );
    if (aValidate.length == msg!.length) {
      setBorderColor("green");
    } else {
      setBorderColor("red");
    }
    setTimeout(() => {
      opacity(1);      
    }, 50);
    clearAndSelect(aValidate);
  }, [state[id as keyof typeof state].state]);

  function opacity(num: number) {
    let elErr = document.querySelector(`[data-msg='err-${id}']`) as HTMLElement;
    if (!elErr) return;
    elErr.style.opacity = String(num);
  }
  function clearAndSelect(allValidation: string[]) {
    let allP = document.querySelectorAll(
      ".err_msg p"
    ) as NodeListOf<HTMLElement>;
    allP.forEach((e) => {
      e.classList.remove("green");
    });
    allValidation.forEach((eV) => {
      let element = document.querySelector(`.${eV}`) as HTMLElement;
      if (!element) return;
      element.classList.add("green");
    });
  }
  return (
    <>
      <StyledMsg
        className="err_msg"
        data-msg={`err-${id}`}
        Border_color={borderColor}
      >
        {msg!.map((e, i) => {
          return (
            <p key={i} className={e.class}>
              {e.msg}
            </p>
          );
        })}
      </StyledMsg>
    </>
  );
}
