import { Box, Paper, Typography, Grid, Grid2 } from "@mui/material";
import { CSSProperties, useContext, useState } from "react";
import { Habit, HabitContext } from "../../Data/contexts/HabitsDataContext";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import HabitCard from "../../Components/habit-card/HabitCard";
import HabitAddForm from "./HabitAddForm";

export default function HabitPage() {
  const { darkMode } = useContext(DarkModeContext);
  const { habits, removeHabitAt, updateHabitAt } = useContext(HabitContext);
  const [editingHabit, setEditingHabit] = useState<{
    index: number;
    habit: Habit;
  } | null>(null);

  const cardStyle: CSSProperties = darkMode
    ? { backgroundColor: "#555", color: "lightBlue", marginTop: 8 }
    : { marginTop: 8 };

  const handleRemoveHabitItem = (index: number) => {
    removeHabitAt(index);
  };

  const handleEditHabitItem = (index: number, habit: Habit) => {
    setEditingHabit({ index, habit });
  };

  const handleSaveEditedHabit = (updatedHabit: Habit) => {
    if (editingHabit) {
      updateHabitAt(editingHabit.index, updatedHabit);
      setEditingHabit(null);
    }
  };

  return (
    <Paper
      style={
        darkMode
          ? { backgroundColor: "#444", color: "lightBlue", height: "100%" }
          : { color: "blue", height: "100%" }
      }
    >
      <Box p={1}>
        <Typography pb={2} variant="h3">
          Habits
        </Typography>

        <Grid2 container spacing={2}>
          {habits.map((habitItem, habitIndex) => (
            <Grid2 key={habitIndex} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
              <HabitCard
                habit={habitItem}
                style={cardStyle}
                onDeleteClick={() => handleRemoveHabitItem(habitIndex)}
                onEditClick={() => handleEditHabitItem(habitIndex, habitItem)}
                isEditing={editingHabit?.index === habitIndex}
                onSave={handleSaveEditedHabit}
                onCancel={() => setEditingHabit(null)}
              />
            </Grid2>
          ))}
        </Grid2>

        <HabitAddForm style={cardStyle} />
      </Box>
    </Paper>
  );
}
