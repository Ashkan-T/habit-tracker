import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

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

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkModeSwitch, setDarkMode: setDarkModeSwitch }}
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
