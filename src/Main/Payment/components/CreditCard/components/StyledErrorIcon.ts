import styled from "styled-components";

export const StyledErrorIcon = styled.span`
position: absolute;
background-color: ${({ theme }) => theme.text_color};
top: 10px;
right: 20px;
width: 25px;
height: 25px;
border-radius: 50%;
opacity: 0;
display: flex;
justify-content: center;
align-items: center;
transition: all .5s;
img{
  width: 90%;
}
`