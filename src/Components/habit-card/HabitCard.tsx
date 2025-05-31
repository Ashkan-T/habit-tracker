import { DeleteForever, Done, Edit, Save, Cancel } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  IconButton,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid2,
} from "@mui/material";
import { CSSProperties, useState } from "react";
import { Habit } from "../../Data/contexts/HabitsDataContext";
import Categories from "../../Data/static/Categories";

interface HabitCardProps {
  habit: Habit;
  style: CSSProperties;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  isEditing?: boolean;
  onSave?: (updatedHabit: Habit) => void;
  onCancel?: () => void;
}

export default function HabitCard({
  habit,
  style,
  onDeleteClick,
  onEditClick,
  isEditing,
  onSave,
  onCancel,
}: HabitCardProps) {
  const [editedName, setEditedName] = useState(habit.name);
  const [editedCategoryId, setEditedCategoryId] = useState(habit.categoryId);

  const currentCategory = Categories.find((c) => c.id === habit.categoryId);

  const handleSave = () => {
    if (onSave) {
      onSave({
        ...habit,
        name: editedName,
        categoryId: editedCategoryId,
      });
    }
  };

  return (
    <Card style={style}>
      <Box p={2}>
        {isEditing ? (
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel>Categories</InputLabel>
            <Select
              value={editedCategoryId}
              onChange={(e) => setEditedCategoryId(+e.target.value)}
              label="Category"
            >
              {Categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  <Box display="flex" alignItems="center">
                    {category.icon}
                    <Box ml={1}>{category.name}</Box>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          currentCategory && (
            <Box display="flex" alignItems="center">
              {currentCategory.icon}
              <Typography variant="body1" ml={1}>
                {currentCategory.name}
              </Typography>
            </Box>
          )
        )}
      </Box>

      <CardActions>
        <Box width="100%" display="flex" alignItems="center">
          {isEditing ? (
            <Grid2 flexGrow={1} pb={2}>
              <TextField
                fullWidth
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                variant="standard"
                size="small"
              />
            </Grid2>
          ) : (
            <Typography flexGrow={1} variant="body2">
              {habit.name}
            </Typography>
          )}

          <Box>
            {habit.completed && <Done color="success" />}
            {isEditing ? (
              <Grid2 container>
                <Grid2>
                  <IconButton onClick={handleSave} size="small">
                    <Save color="primary" />
                  </IconButton>
                </Grid2>
                <Grid2>
                  <IconButton onClick={onCancel} size="small">
                    <Cancel color="warning" />
                  </IconButton>
                </Grid2>
              </Grid2>
            ) : (
              <>
                <IconButton onClick={onEditClick} size="small">
                  <Edit color="primary" />
                </IconButton>
                <IconButton onClick={onDeleteClick} size="small">
                  <DeleteForever color="error" />
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
