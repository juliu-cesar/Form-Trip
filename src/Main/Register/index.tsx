import { ChangeEvent, useState } from "react";
import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledForm } from "../components/StyledForm";
import { StyledRegister } from "./components/StyledRegister";
import { vCheckPassword, vEmail, vPassword } from "./components/Validate";

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

  return (
    <StyledRegister>
      <StyledContainer Border="color1">
        <StyledButtons>
          <button className="">Login</button>
          <button className="select">Cadastrar</button>
        </StyledButtons>
        <StyledForm id="Account">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              vEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              vPassword(e.target.value);
            }}
          />
          <label htmlFor="password_2">Confirmar Senha</label>
          <input
            id="password_2"
            type="password"
            value={password_2}
            onChange={(e) => {
              setPassword_2(e.target.value);
              console.log(vCheckPassword(e.target.value, password));              
            }}
          />

          <div className="address">
            <h4>Endereço</h4>
            <label htmlFor="CEP">CEP</label>
            <input
              id="CEP"
              type="number"
              value={CEP}
              onChange={(e) => {
                setCEP(e.target.value);
                vEmail(e.target.value);
              }}
            />
            <div className="Inline">
              <div>
                <label htmlFor="street">Rua</label>
                <input
                  id="street"
                  type="text"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                    vEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="number">Numero</label>
                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                    vEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <label htmlFor="adjunct">Complemento</label>
            <input
              id="adjunct"
              type="text"
              value={adjunct}
              onChange={(e) => {
                setAdjunct(e.target.value);
                vEmail(e.target.value);
              }}
            />
            <label htmlFor="district">Bairro</label>
            <input
              id="district"
              type="text"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                vEmail(e.target.value);
              }}
            />
            <div className="Inline">
              <div>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    vEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="state">Estado</label>
                <select name="" id="state">
                  <option value="">Teste</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit">Cadastrar</button>
        </StyledForm>
      </StyledContainer>
    </StyledRegister>
  );
}
