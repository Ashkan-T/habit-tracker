import {
  Box,
  Button,
  Card,
  CardActions,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { CSSProperties, useContext, useState } from "react";
import { HabitContext } from "../../Data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import HabitCard from "../../Components/habit-card/HabitCard";
import HabitAddForm from "./HabitAddForm";

export default function HabitPage() {
  const { darkMode } = useContext(DarkModeContext);
  const { habits, removeHabitAt } = useContext(HabitContext);
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#555", color: "lightBlue", marginTop: 8 }
    : { marginTop: 8 };

  function handleRemoveHabitItem(indx: number) {
    removeHabitAt(indx);
  }

  return (
    <Paper
      style={
        darkMode
          ? { backgroundColor: "#444", color: "lightgray" }
          : { color: "blue" }
      }
    >
      <Box p={1}>
        <Typography>Habits</Typography>
        {habits.map((habitItem, habitIndex) => (
          <HabitCard
            habit={habitItem}
            style={cardstyle}
            onDeleteClick={() => {
              handleRemoveHabitItem(habitIndex);
            }}
          />
        ))}
        <HabitAddForm style={cardstyle} />
      </Box>
    </Paper>
  );
}
