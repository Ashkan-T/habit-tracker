import { Box, Card, Paper, Typography } from "@mui/material";
import { CSSProperties, useContext } from "react";
import { HabitContext } from "../../Data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import { lightBlue } from "@mui/material/colors";

export default function HabitPage() {
  const { darkMode } = useContext(DarkModeContext);
  const { habits } = useContext(HabitContext);
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#444", color: "lightBlue", marginTop: 8 }
    : { marginTop: 8 };

  return (
    <Paper
      style={
        darkMode
          ? { backgroundColor: "#333", color: "blueviolet" }
          : { color: "blue" }
      }
    >
      <Box p={1}>
        <Typography>Habits</Typography>
        {habits.map((neaHabit) => (
          <Card style={cardstyle}>{neaHabit}</Card>
        ))}
      </Box>
    </Paper>
  );
}
