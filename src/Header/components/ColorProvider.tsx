import React, { createContext } from "react";

type ThemeContextType = {
  mode:string,
  toggleMode: () => void,
};
export const ColorContext = createContext<ThemeContextType>({
	mode: "",
	toggleMode: () => {
		alert("toggleMode ainda não configurado.");
	},
});

interface Props{
  children: React.ReactNode,
  initialValue: string,
}

export default function ColorProvider({children, initialValue}: Props) {
	const [modeState, setModeState] = React.useState<string>(initialValue);
	function functionToggleMode(): void {
		modeState == "dark" ? setModeState("light") : setModeState("dark");
	}
	return (
		<ColorContext.Provider
			value={{
				mode: modeState,
				toggleMode: functionToggleMode,
			}}
		>
			{children}
		</ColorContext.Provider>
	);
}
