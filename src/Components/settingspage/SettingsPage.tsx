import {
  Box,
  FormControlLabel,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";

export default function SettingsPage() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <Paper
      style={{
        backgroundColor: darkMode ? "#444" : undefined,
        color: darkMode ? "#ccc" : undefined,
      }}
    >
      <Box padding={2}>
        <Typography variant="subtitle1">Here are our settings page.</Typography>
        <FormControlLabel
          label="DarkMode"
          control={
            <Switch
              checked={darkMode}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            />
          }
          labelPlacement="start"
        />
      </Box>
    </Paper>
  );
}
