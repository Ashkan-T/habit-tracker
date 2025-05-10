import { DeleteForever, Done } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";
import { Habit } from "../../Data/contexts/HabitsDataContext";
import Categories from "../../Data/static/Categories";

interface HabitCardProps {
  habit: Habit;
  style: CSSProperties;
  onDeleteClick?: () => void;
}

export default function HabitCard({
  habit,
  style,
  onDeleteClick,
}: HabitCardProps) {
  const cate = Categories.find((categoryItem) => {
    return categoryItem.id == habit.categoryId;
  });

  return (
    <Card style={style}>
      <Box p={1}>
        {cate != undefined && (
          <Grid2>
            {cate.icon}
            <Typography>{cate.name}</Typography>
          </Grid2>
        )}
        <Typography>{habit.name}</Typography>
        {habit.completed && <Done />}
      </Box>
      <CardActions>
        <IconButton onClick={onDeleteClick}>
          <DeleteForever color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
