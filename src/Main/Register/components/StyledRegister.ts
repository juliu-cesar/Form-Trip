import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;
  .Container {
    width: calc(100% - 10px);
    border-left: 2px solid;
    border-right: 2px solid;
    border-color: ${({ theme }) => theme.primary_color};
    padding: 15px;
  }
  .Buttons_account {
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 15px;
    button {
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      width: 30%;
      height: 40px;
      font-size: 17px;
      font-weight: 600;
      border: unset;
    }
    .select {
      border-bottom: 3px solid ${({ theme }) => theme.primary_color};
    }
  }
  .account {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      font-size: 15px;
      font-weight: 600;
    }
    input,
    select {
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      height: 40px;
      padding-left: 5px;
      margin-top: 2px;
      margin-bottom: 15px;
      border: unset;
      border-bottom: 3px solid ${({ theme }) => theme.primary_color};
    }
  }
  .address {
    position: relative;
    padding: 15px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.primary_color};
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
    .Inline {
      width: 100%;
      display: grid;
      grid-template-columns: 65% calc(35% - 10px);
      gap: 10px;
      div {
        display: flex;
        flex-direction: column;
      }
      #state {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  button[type='submit']{
    background-color: ${({ theme }) => theme.primary_color};
    color: #333;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    font-size: 19px;
    font-weight: 600;
    border: unset;
    border-radius: 2px;
    transition: all .2s;
    :hover{
      outline: 2px solid ${({ theme }) => theme.background_base};
      outline-offset: -5px;
    }
  }
`;
