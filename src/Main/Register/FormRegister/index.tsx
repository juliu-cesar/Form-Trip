import { useState } from "react";
import { StyledForm } from "../../components/StyledForm";
import config from "../../../../config.json";
import InputForm from "./components/InputForm";

export default function FormRegister() {
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
    <StyledForm
      id="Account"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {config.form_register.map((e, index) => {
        if (index <= 2) {
          return (
            <InputForm
              e={e}
              key={index}
              allStates={allStates}
              allMsg={allMsg}
            />
          );
        }
      })}
      <div className="address">
        <h4>Endereço</h4>
        {config.form_register.map((e, index) => {
          if (index >= 3) {
            return (
              <InputForm
                e={e}
                key={index}
                allStates={allStates}
                allMsg={allMsg}
              />
            );
          }
        })}
        <div>
          <label htmlFor="state">Estado</label>
          <select name="state" id="state">
            {config.states.map((e) => {
              return <option value={e.uf}>{e.name}</option>;
            })}
          </select>
        </div>
      </div>
      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
}
