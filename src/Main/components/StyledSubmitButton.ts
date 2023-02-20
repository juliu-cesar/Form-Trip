import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  background-color: ${({ theme }) => theme.color1};
  color: #333;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  font-size: 19px;
  font-weight: 600;
  border: unset;
  border-radius: 2px;
  transition: all 0.2s;
  :hover {
    outline: 2px solid ${({ theme }) => theme.background_base};
    outline-offset: -5px;
  }
`;
