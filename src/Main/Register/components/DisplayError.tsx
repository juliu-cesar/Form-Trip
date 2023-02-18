import { useEffect, useState } from "react";
import { Validate } from "./Validate";
import config from "../../../../config.json";
import { StyledMsg } from "./StyledMsg";

interface Props {
  state: string[];
  id: string;
  msg: {
    msg: string;
    class: string;
  }[];
  index: number;
}

export default function DisplayError({ state, id, msg, index }: Props) {
  const [borderColor, setBorderColor] = useState("red");
  const [show, setShow] = useState(true);
  let cForm = config.form_register;

  useEffect(() => {
    let aValidate = Validate[id as keyof typeof Validate](
      state[index],
      state[index - 1]
    );
    let timeout; 
    if (aValidate.length == msg.length) {
      if(timeout) return
      clearAndSelect(aValidate);
      setBorderColor("green");
      timeout = setTimeout(() => {
        toggle(0);
        setTimeout(() => {
          setShow(false);
        }, 500);
      }, 5000);
    } else {
      setShow(true);
      clearAndSelect(aValidate);
      toggle(1);
    }
  }, [state[index]]);

  function toggle(i1: number) {
    let elErr = document.querySelector(
      `[data-msg='err-${cForm[index].id}']`
    ) as HTMLElement;
    if (!elErr) return;
    elErr.style.opacity = String(i1);
  }
  function clearAndSelect(allV: string[]) {
    let allP = document.querySelectorAll(
      ".err_msg p"
    ) as NodeListOf<HTMLElement>;
    allP.forEach((e) => {
      e.classList.remove("green");
    });
    allV.forEach((e) => {
      let el = document.querySelector(`.${e}`) as HTMLElement;
      if (!el) return;
      el.classList.add("green");
    });
  }
  return (
    <>
      {show && (
        <StyledMsg
          className="err_msg"
          data-msg={`err-${cForm[index].id}`}
          Border_color={borderColor}
        >
          {/* <img src="img/icon/close.svg" alt="ícone erro" /> */}
          {msg.map((e, i) => {
            return (
              <p key={i} className={e.class}>
                {e.msg}
              </p>
            );
          })}
        </StyledMsg>
      )}
    </>
  );
}
