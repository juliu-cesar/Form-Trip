import { Dispatch, SetStateAction, useState } from "react";
import { StyledForm } from "../../../components/StyledForm";
import config from "@/config.json";
import InputForm from "./components/InputForm";
import { StyledSubmitButton } from "@/src/Main/components/StyledSubmitButton";
import { StyledFormRegister } from "./components/StyledFormRegister";
import { RegisterValidate } from "./components/RegisterValidate";
import DisplayError from "./components/DisplayError";
import axios from "axios";
import { StyledErrorForm } from "@/src/Main/components/StyledErrorForm";

interface Props {
  display: string;
  setEmailRL: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}
export default function FormRegister({
  display,
  setEmailRL,
  setMessage,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [CEP, setCEP] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [adjunct, setAdjunct] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [State, setState] = useState("");
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
  const [showErrorForm, setShowErrorForm] = useState(false);
  let cfForm = config.form_register[3];

  function validateAndRegister() {
    let vR = RegisterValidate;
    let validate: boolean =
      vR["email"](email).length == 2 &&
      vR["password"](password).length == 4 &&
      vR["password_2"](password_2, password).length == 1 &&
      vR["CEP"](CEP).length == 1 &&
      street.trim().length > 0 &&
      number.trim().length > 0 &&
      adjunct.trim().length > 0 &&
      district.trim().length > 0 &&
      city.trim().length > 0 &&
      State.trim().length > 0;

    if (validate) {
      setEmailRL(email);
      setMessage("Usuário cadastrado com sucesso.");
    } else {
      setShowErrorForm(true);
      setTimeout(() => {
        setShowErrorForm(false);
      }, 5000);
    }
  }
  function searchViaCep(tx: string) {
    tx = tx.replace(/[^\d]+/g, "");
    let endpoint = `https://viacep.com.br/ws/${tx}/json/`;
    axios.get(endpoint).then((res) => {
      let dt = res.data;
      setStreet(dt.logradouro);
      setAdjunct(dt.complemento);
      setDistrict(dt.bairro);
      setCity(dt.localidade);
      setState(dt.uf);
    });
  }
  return (
    <StyledFormRegister display={display}>
      <StyledForm
        id="Account"
        onSubmit={(e) => {
          e.preventDefault();
          validateAndRegister();
        }}
      >
        <span className="displayFlex">
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
            <div>
              <label htmlFor={cfForm.id}>{cfForm.label}</label>
              <input
                id={cfForm.id}
                type="text"
                value={CEP}
                onChange={(e) => {
                  let tx = e.target.value.replace(/[^\d]+/g, "");
                  if (tx.length == 8) {
                    tx = tx.replace(/^(\d{5})(\d{3})/, "$1-$2");
                    setCEP(tx);
                    searchViaCep(tx);
                  } else {
                    if (tx.length > 8) return;
                    setCEP(tx);
                  }
                }}
                onFocus={() => {
                  allMsg[cfForm.id as keyof typeof allMsg]?.set(true);
                }}
                onBlur={() => {
                  allMsg[cfForm.id as keyof typeof allMsg]?.set(false);
                }}
              />
              {allMsg[cfForm.id as keyof typeof allMsg]?.state && (
                <DisplayError
                  state={allStates}
                  id={cfForm.id}
                  msg={cfForm.err_msg}
                />
              )}
            </div>
            {config.form_register.map((e, index) => {
              if (index >= 3 && e.id != "CEP") {
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
              <select
              className="select"
                name="state"
                id="state"
                value={State}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              >
                <option value="" defaultChecked>
                  Selecione uma opção
                </option>
                {config.states.map((e, i) => {
                  return (
                    <option key={i} value={e.uf}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </span>
        {showErrorForm && (
          <StyledErrorForm id="Err_PaymentForm">
            Por favor, preencha os campos.
          </StyledErrorForm>
        )}
        <StyledSubmitButton type="submit">Cadastrar</StyledSubmitButton>
      </StyledForm>
    </StyledFormRegister>
  );
}
