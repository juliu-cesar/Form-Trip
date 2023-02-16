import styled from "styled-components";

export const StyledFrame = styled.div<{
  Border: string
}>`
  padding: 20px 0;
  margin-bottom: 15px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: ${({ theme, Border }) => theme[Border]};
`;
