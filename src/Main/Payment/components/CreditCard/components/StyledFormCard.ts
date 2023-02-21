import styled from "styled-components";

export const StyledFormCard = styled.div<{
  display?: string;
}>`
  display: ${({ display }) => display};
`;
