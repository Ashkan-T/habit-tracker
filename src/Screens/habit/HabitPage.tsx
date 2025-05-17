import {
  Box,
  Button,
  Card,
  CardActions,
  Grid2,
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
          ? { backgroundColor: "#444", color: "lightBlue" }
          : { color: "blue" }
      }
    >
      <Box p={1}>
        <Typography pb={2} variant="h3">
          Habits
        </Typography>
        <Grid2 container spacing={1}>
          {habits.map((habitItem, habitIndex) => (
            <Grid2 size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
              <HabitCard
                habit={habitItem}
                style={cardstyle}
                onDeleteClick={() => {
                  handleRemoveHabitItem(habitIndex);
                }}
              />
            </Grid2>
          ))}
        </Grid2>
        <HabitAddForm style={cardstyle} />
      </Box>
    </Paper>
  );
}
