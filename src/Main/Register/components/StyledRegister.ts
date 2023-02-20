import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;
  margin-bottom: 25px; 
  .address {
    position: relative;
    padding: 20px 15px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.color1};
    border-radius: 10px;
    h4{
      position: absolute;
      background-color: ${({ theme }) => theme.background_base};
      top: -15px;
      left: 20px;
      padding: 2px 7px;
      font-size: 17px;
      font-weight: 500;
    }
  }
`;
