import { useState } from "react";
import { StyledForm } from "../../components/StyledForm";
import config from "../../../../config.json";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let cEmail = config.form_register[0];
  let cPassword = config.form_register[1];
  return (
    <StyledForm
      id="Login"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor={cEmail.id}>{cEmail.label}</label>
        <input
          id={cEmail.id}
          type={cEmail.type}
          value={email}
          onChange={(eChange) => {
            setEmail(eChange.target.value.trim());
          }}
        />
      </div>
      <div>
        <label htmlFor={cPassword.id}>{cPassword.label}</label>
        <input
          id={cPassword.id}
          type={cPassword.type}
          value={password}
          onChange={(eChange) => {
            setPassword(eChange.target.value.trim());
          }}
        />
      </div>
      <button type="submit">Login</button>
    </StyledForm>
  );
}
