import styled from "styled-components";

export const StyledErrorIcon = styled.span<{
  opacity: number
}>`
position: absolute;
background-color: ${({ theme }) => theme.text_color};
top: 7px;
right: 20px;
width: 25px;
height: 25px;
opacity: ${({ opacity }) => opacity};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
transition: all .5s;
img{
  width: 90%;
}
`