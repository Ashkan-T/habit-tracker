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
    <Grid2>
      <Card style={style}>
        <Box p={1}>
          {cate != undefined && (
            <Grid2 container spacing={1} alignItems={"center"}>
              <Grid2>{cate.icon}</Grid2>
              <Typography flexGrow={1}>{cate.name}</Typography>
            </Grid2>
          )}
        </Box>
        <CardActions>
          <Grid2 container spacing={1} alignItems={"center"} width={"100%"}>
            <Typography flexGrow={1}>{habit.name}</Typography>
            <Grid2>
              {habit.completed && <Done />}
              <IconButton onClick={onDeleteClick}>
                <DeleteForever color="error" />
              </IconButton>
            </Grid2>
          </Grid2>
        </CardActions>
      </Card>
    </Grid2>
  );
}
