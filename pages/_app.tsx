import React, { useContext } from "react";
import ColorProvider, { ColorContext } from "@/src/Header/components/ColorProvider";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../styles/CSSReset";
import CarouselProvider from "@/src/Carousel/components/CarouselProvider";

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