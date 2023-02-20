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
  const [emailMsg, setEmailMsg] = useState(false);
  const [passMsg, setPassMsg] = useState(false);
  const [passMsg_2, setPassMsg_2] = useState(false);
  const [CEPMsg, setCEPMsg] = useState(false);
  const allStates = {
    email: { state: email, set: setEmail },
    password: { state: password, set: setPassword },
    password_2: { state: password_2, set: setPassword_2 },
    CEP: { state: CEP, set: setCEP },
    street: { state: street, set: setStreet },
    number: { state: number, set: setNumber },
    adjunct: { state: adjunct, set: setAdjunct },
    district: { state: district, set: setDistrict },
    city: { state: city, set: setCity },
  };
  const allMsg = {
    email: { state: emailMsg, set: setEmailMsg },
    password: { state: passMsg, set: setPassMsg },
    password_2: { state: passMsg_2, set: setPassMsg_2 },
    CEP: { state: CEPMsg, set: setCEPMsg },
  };

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
                  value={allStates[e.id as keyof typeof allStates].state}
                  onChange={(eChange) => {
                    allStates[e.id as keyof typeof allStates].set(
                      eChange.target.value.trim()
                    );
                  }}
                  onFocus={() => {
                    allMsg[e.id as keyof typeof allMsg].set(true);
                  }}
                  onBlur={() => {
                    allMsg[e.id as keyof typeof allMsg].set(false);
                  }}
                />
                {allMsg[e.id as keyof typeof allMsg]?.state && (
                  <DisplayError state={allStates} id={e.id} msg={e.err_msg} />
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
