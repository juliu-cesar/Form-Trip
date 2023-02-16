import styled from "styled-components";

export const StyledFrame = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.color2};
`;
