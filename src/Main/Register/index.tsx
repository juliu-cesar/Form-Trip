import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledForm } from "../components/StyledForm";
import { StyledRegister } from "./components/StyledRegister";

export default function Register() {
  return (
    <StyledRegister>
      <StyledContainer>
        <StyledButtons>
          <button className="">Login</button>
          <button className="select">Cadastrar</button>
        </StyledButtons>
        <StyledForm id="Account">
          <label htmlFor="email">Email</label>
          <input id="email" type="email"  />
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" />
          <label htmlFor="password_2">Confirmar Senha</label>
          <input id="password_2" type="password" />

          <div className="address">
            <h4>Endereço</h4>
            <label htmlFor="CEP">CEP</label>
            <input id="CEP" type="number"  />
            <div className="Inline">
              <div>
                <label htmlFor="street">Rua</label>
                <input id="street" type="text" />
              </div>
              <div>
                <label htmlFor="number">Numero</label>
                <input id="number" type="text" />
              </div>
            </div>
              <label htmlFor="adjunct">Complemento</label>
              <input id="adjunct" type="text" />
              <label htmlFor="district">Bairro</label>
              <input id="district" type="text" />
            <div className="Inline">
              <div>
                <label htmlFor="city">Cidade</label>
                <input id="city" type="text" />
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
