import { useState } from "react";
import { StyledButtons } from "../components/StyledButtons";
import { StyledContainer } from "../components/StyledContainer";
import { StyledRegister } from "./components/StyledRegister";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

export default function Register() {
  const [register, setRegister] = useState(true);

  function toggleRegister(num: number){
    num == 0 ? setRegister(true) : setRegister(false)
  }
  return (
    <StyledRegister>
      <StyledContainer Border="color1">
        <StyledButtons>
          <button onClick={()=>toggleRegister(1)} className="">Login</button>
          <button onClick={()=>toggleRegister(0)} className="select">Cadastrar</button>
        </StyledButtons>
        {register ? <FormRegister/> : <FormLogin/>}        
      </StyledContainer>
    </StyledRegister>
  );
}
