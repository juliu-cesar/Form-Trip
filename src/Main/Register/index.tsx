import { useState } from "react";
import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledRegister } from "./components/StyledRegister";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import { StyledFrame } from "../components/StyledFrame";

export default function Register() {
  const [register, setRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        {email == "" ? (
          <>
            <FormRegister
              display={register ? "block" : "none"}
              setEmailRL={setEmail}
              setMessage={setMessage}
            />
            <FormLogin
              display={register ? "none" : "block"}
              setEmailRL={setEmail}
              setMessage={setMessage}
            />
          </>
        ) : (
          <div id="logged">
            <StyledFrame Border="color1">
              <h3>{message}</h3>
              <p>{email}</p>
            </StyledFrame>
          </div>
        )}
      </StyledContainer>
    </StyledRegister>
  );
}
