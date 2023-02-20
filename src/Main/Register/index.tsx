import { useState } from "react";
import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledRegister } from "./components/StyledRegister";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";

export default function Register() {
  const [register, setRegister] = useState(true);

  function toggleRegister(num: number) {
    let register = document.querySelector("#btn_register") as HTMLElement;
    let login = document.querySelector("#btn_login") as HTMLElement;
    if (num == 0) {
      login.classList.remove("select");
      register.classList.add("select");
      setRegister(true);
    } else {
      register.classList.remove("select");
      login.classList.add("select");
      setRegister(false);
    }
  }
  return (
    <StyledRegister>
      <StyledContainer Border="color1">
        <StyledButtons>
          <button id="btn_login" onClick={() => toggleRegister(1)} className="">
            Login
          </button>
          <button
            id="btn_register"
            onClick={() => toggleRegister(0)}
            className="select"
          >
            Cadastrar
          </button>
        </StyledButtons>
        {register ? <FormRegister /> : <FormLogin />}
      </StyledContainer>
    </StyledRegister>
  );
}
