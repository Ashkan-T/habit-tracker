import {
  Box,
  Button,
  Card,
  CardActions,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, CSSProperties, useContext, useState } from "react";
import { HabitContext } from "../../Data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import { lightBlue } from "@mui/material/colors";

export default function HabitPage() {
  const { darkMode } = useContext(DarkModeContext);
  const { habits, addHabit } = useContext(HabitContext);
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#555", color: "lightBlue", marginTop: 8 }
    : { marginTop: 8 };
  const [newHabitName, setNewHabitName] = useState("");

  function handlNewHabitNameChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setNewHabitName(event.target.value);
  }
  function handleAddNewHabitName() {
    addHabit(newHabitName);
  }

  return (
    <Paper
      style={
        darkMode
          ? { backgroundColor: "#444", color: "blueviolet" }
          : { color: "blue" }
      }
    >
      <Box p={1}>
        <Typography>Habits</Typography>
        {habits.map((neaHabit) => (
          <Card style={cardstyle}>{neaHabit}</Card>
        ))}
        <Card style={cardstyle}>
          <Typography
            style={darkMode ? { color: "blueviolet" } : { color: "blue" }}
          >
            New Habit
          </Typography>
          <TextField
            value={newHabitName}
            onChange={handlNewHabitNameChange}
            variant="standard"
            fullWidth
            placeholder="Your habit is..."
          />
          <CardActions>
            <Button
              style={darkMode ? { color: "blueviolet" } : { color: "blue" }}
              onClick={handleAddNewHabitName}
            >
              add
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  );
}
