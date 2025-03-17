import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import habitLogo from "../../Assets/7cwJD9wRKPu1xnSomH7UI0ICAXT_lJt7 (1).jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";

interface HeaderProps {
  title: string;
  onLogoClick?: () => void;
}
export default function Header({ title, onLogoClick }: HeaderProps) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <AppBar
      position="sticky"
      style={darkMode ? { backgroundColor: "#222", color: "red" } : {}}
    >
      <Toolbar>
        <IconButton onClick={onLogoClick}>
          <img src={habitLogo} />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
