import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";

const theme = {
  light: {
    primary_color: "#FFB60D",
    primary_color_2: "#088000",

    background_base: "#D8D8D8",
    text_color: "#252525",
  },
  dark: {
    primary_color: "#FFB60D",
    primary_color_2: "#088000",

    background_base: "#252525",
    text_color: "#D8D8D8",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
