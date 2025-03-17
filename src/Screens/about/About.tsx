import { useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";

export default function About() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div style={{ color: darkMode ? "#ccc" : undefined }}>
      This is about our page!
    </div>
  );
}
