import styled from "styled-components";


export const StyledButtons = styled.div`
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
`