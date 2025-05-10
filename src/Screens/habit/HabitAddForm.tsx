import {
  Box,
  Button,
  Card,
  CardActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, CSSProperties, useContext, useState } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import { HabitContext } from "../../Data/contexts/HabitsDataContext";
import Categories from "../../Data/static/Categories";

interface HabitAddFormProps {
  style: CSSProperties;
}

export default function HabitAddForm({ style }: HabitAddFormProps) {
  const { darkMode } = useContext(DarkModeContext);
  const { addHabit } = useContext(HabitContext);
  const [newHabitName, setNewHabitName] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  function handlNewHabitNameChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setNewHabitName(event.target.value);
  }
  function handleAddNewHabitName() {
    addHabit({
      name: newHabitName,
      completed: false,
      categoryId,
      lastDone: null,
      dayStreak: 0,
    });
  }

  return (
    <Card style={style}>
      <Box p={1}>
        <Typography
          style={darkMode ? { color: "lightgray" } : { color: "blue" }}
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
      </Box>
      <FormControl fullWidth>
        <InputLabel id="Category-select-label">Category</InputLabel>
        <Select
          labelId="Category-select-label"
          value={categoryId}
          label="Category"
          onChange={(event) => {
            setCategoryId(+event.target.value);
          }}
        >
          {Categories.map((Category) => (
            <MenuItem value={Category.id}>
              {Category.icon}
              {Category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CardActions>
        <Button
          style={darkMode ? { color: "lightgray" } : { color: "blue" }}
          onClick={handleAddNewHabitName}
        >
          add
        </Button>
      </CardActions>
    </Card>
  );
}
