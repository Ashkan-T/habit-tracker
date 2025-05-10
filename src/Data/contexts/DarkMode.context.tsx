import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

export type DarkModeContextType = { darkMode: boolean; setDarkMode: any };
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

interface DarkModeContextProps {
  children: ReactNode;
}

export default function DarkModeProvider({ children }: DarkModeContextProps) {
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);
  const handleStaticDarkMode = (mode: boolean) => {
    const modeStr = mode ? "dark" : "light";
    localStorage.setItem("darkMode", modeStr);
    setDarkModeSwitch(mode);
  };
  useEffect(() => {
    const modeStr = localStorage.getItem("darkMode");
    const mode = modeStr == "dark";
    handleStaticDarkMode(mode);
  }, []);
  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkModeSwitch, setDarkMode: handleStaticDarkMode }}
    >
      <GlobalStyles
        styles={{
          body: { backgroundColor: darkModeSwitch ? "#444" : undefined },
        }}
      />
      {children}
    </DarkModeContext.Provider>
  );
}
