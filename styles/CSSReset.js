import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
		background-color: ${({theme})=> theme.background_base};
		color: ${({theme})=> theme.text_color};
    font-family: 'Montserrat', sans-serif;
    width: 99vw;
    overflow-x: hidden;
  }
  .icon{
    width: 20px;
    height: 20px;
  }
  /* NextJS */
  #__next {
    width: 100%;
    min-width: 280px;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .4s;
  }
`;