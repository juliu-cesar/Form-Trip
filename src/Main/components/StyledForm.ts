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
    ::-webkit-input-placeholder{
      color: ${({ theme }) => theme.text_color};
    }
    ::-moz-placeholder{
      color: ${({ theme }) => theme.text_color};
    }
  }
  .err_msg, .scc_msg{
    position: absolute;
    background-color: ${({ theme }) => theme.text_color};
    width: 25px;
    height: 25px;
    top: 26px;
    right: 16px;
    border-radius: 50%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    img{
      width: 20px;
    }
  }
  .Inline{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;
