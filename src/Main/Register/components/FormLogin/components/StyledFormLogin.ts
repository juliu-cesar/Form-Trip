import styled from "styled-components";

export const StyledFormLogin = styled.div<{
  display: string;
}>`
  display: ${({ display }) => display};
`;
