import styled from "styled-components";

export const StyledContainer = styled.div<{
  Border: string
}>`
  width: calc(100% - 10px);
  border-left: 2px solid;
  border-right: 2px solid;
  border-color: ${({ theme, Border }) => theme[Border]};
  padding: 15px 30px;
`;
