import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  div{
    position: relative;
    display: flex;
    flex-direction: column; 
    margin-bottom: 10px;
  }
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
    border: unset;
    border-bottom: 3px solid ${({ theme }) => theme.color1};
    option{
      color: #333;
    }
    ::-webkit-input-placeholder{
      color: ${({ theme }) => theme.text_color};
    }
    ::-moz-placeholder{
      color: ${({ theme }) => theme.text_color};
    }
  }  
  .Inline{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;
