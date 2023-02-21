import { Dispatch, SetStateAction, useState } from "react";
import { StyledForm } from "../../../components/StyledForm";
import config from "@/config.json";
import { StyledSubmitButton } from "@/src/Main/components/StyledSubmitButton";
import { StyledFormLogin } from "./components/StyledFormLogin";
import { RegisterValidate } from "../FormRegister/components/RegisterValidate";
import { StyledErrorForm } from "@/src/Main/components/StyledErrorForm";

interface Props {
  display: string;
  setEmailRL: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

export default function FormLogin({ display, setEmailRL, setMessage }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorForm, setShowErrorForm] = useState(false);
  let cEmail = config.form_register[0];
  let cPassword = config.form_register[1];

  function validateAndRegister() {
    let vR = RegisterValidate;
    let validate: boolean =
      vR["email"](email).length == 2 && vR["password"](password).length == 4;

    if (validate) {
      setEmailRL(email);
      setMessage("Usuário logado.");
    } else {
      setShowErrorForm(true);
      setTimeout(() => {
        setShowErrorForm(false);
      }, 5000);
    }
  }
  return (
    <StyledFormLogin display={display}>
      <StyledForm
        id="Login"
        onSubmit={(e) => {
          e.preventDefault();
          validateAndRegister();
        }}
      >
        <div>
          <label htmlFor={cEmail.id + "_login"}>{cEmail.label}</label>
          <input
            id={cEmail.id + "_login"}
            type={cEmail.type}
            value={email}
            onChange={(eChange) => {
              setEmail(eChange.target.value.trim());
            }}
          />
        </div>
        <div>
          <label htmlFor={cPassword.id + "_login"}>{cPassword.label}</label>
          <input
            id={cPassword.id + "_login"}
            type={cPassword.type}
            value={password}
            onChange={(eChange) => {
              setPassword(eChange.target.value.trim());
            }}
          />
        </div>
        {showErrorForm && (
          <StyledErrorForm id="Err_PaymentForm">
            Por favor, preencha os campos.
          </StyledErrorForm>
        )}
        <StyledSubmitButton type="submit">Login</StyledSubmitButton>
      </StyledForm>
    </StyledFormLogin>
  );
}
