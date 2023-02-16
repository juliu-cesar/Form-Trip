import React, { useContext } from "react";
import ColorProvider, { ColorContext } from "@/src/Header/components/ColorProvider";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";
import CarouselProvider from "@/src/Carousel/components/CarouselProvider";

const theme = {
  light: {
    color1: "#FFB60D",
    color2: "#088000",
    
    gray: "#999999",
    semi_black: "#808080",
    background_base: "#D8D8D8",
    text_color: "#252525",
  },
  dark: {
    color1: "#FFB60D",
    color2: "#088000",
    
    gray: "#7e7e7e",
    semi_black: "#505050",
    background_base: "#252525",
    text_color: "#D8D8D8",
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
				{props.children}
      </CarouselProvider>
		</ColorProvider>
	);
}
export default function App(props: any) {
	return (
		<ProviderWrapper>
			<MyApp {...props} />
		</ProviderWrapper>
	);
}