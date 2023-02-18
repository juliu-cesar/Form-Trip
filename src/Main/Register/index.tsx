import { ChangeEvent, FormEvent, useState } from "react";
import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledForm } from "../components/StyledForm";
import { StyledRegister } from "./components/StyledRegister";
import config from "../../../config.json";
import DisplayError from "./components/DisplayError";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [CEP, setCEP] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [adjunct, setAdjunct] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const allStates = [
    email,
    password,
    password_2,
    CEP,
    street,
    number,
    adjunct,
    district,
    city,
  ];
  const allSetStates = [
    setEmail,
    setPassword,
    setPassword_2,
    setCEP,
    setStreet,
    setNumber,
    setAdjunct,
    setDistrict,
    setCity,
  ];

  return (
    <StyledRegister>
      <StyledContainer Border="color1">
        <StyledButtons>
          <button className="">Login</button>
          <button className="select">Cadastrar</button>
        </StyledButtons>
        <StyledForm id="Account">
          {config.form_register.map((e, index) => {
            return (
              <div key={index}>
                <label htmlFor={e.id}>{e.label}</label>
                <input
                  id={e.id}
                  type={e.type}
                  value={allStates[index]}
                  onChange={(e) => {
                    allSetStates[index](e.target.value);
                  }}
                />
                {allStates[index].trim() != "" && e.show_msg && (
                  <DisplayError
                    state={allStates}
                    id={e.id}
                    index={index}
                  />
                )}
              </div>
            );
          })}

          <div>
            <label htmlFor="state">Estado</label>
            <select name="state" id="state">
              <option value="">Teste</option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </StyledForm>
      </StyledContainer>
    </StyledRegister>
  );
}
