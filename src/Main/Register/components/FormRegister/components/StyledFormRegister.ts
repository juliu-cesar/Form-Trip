import styled from "styled-components";

export const StyledFormRegister = styled.div<{
  display: string
}>`
display: ${({display})=> display};
`