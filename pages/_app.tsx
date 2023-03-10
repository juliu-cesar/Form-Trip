import React, { useContext } from "react";
import ColorProvider, {
  ColorContext,
} from "@/src/Header/components/ColorProvider";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";
import CarouselProvider from "@/src/Carousel/components/CarouselProvider";
import PtBr from "antd/locale/pt_BR";
import { ConfigProvider } from "antd";
import PriceProvider from "@/src/Main/CheckIn/components/PriceProvider";

const theme = {
  light: {
    color1: "#FFB60D",
    color2: "#088000",

    gray: "#999999",
    semi_black: "#808080",
    background_base: "#e1e1e1",
    text_color: "#252525",

    red: "#ed4337",
    green: "#4bb543",
  },
  dark: {
    color1: "#FFB60D",
    color2: "#088000",

    gray: "#7e7e7e",
    semi_black: "#454545",
    background_base: "#252525",
    text_color: "#D8D8D8",

    red: "#ed4337",
    green: "#4bb543",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const context = useContext(ColorContext);

  return (
    <ThemeProvider theme={(theme as any)[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
function ProviderWrapper(props: any) {
  return (
    <ColorProvider initialValue={"dark"}>
      <CarouselProvider initialValue={0}>
        <PriceProvider>{props.children}</PriceProvider>
      </CarouselProvider>
    </ColorProvider>
  );
}
export default function App(props: any) {
  return (
    <ProviderWrapper>
      <ConfigProvider locale={PtBr}>
        <MyApp {...props} />
      </ConfigProvider>
    </ProviderWrapper>
  );
}
