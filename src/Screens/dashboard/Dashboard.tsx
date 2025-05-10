import { Box, Button, Card, CardActions, Typography } from "@mui/material";
import { CSSProperties, useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import { HabitContext } from "../../Data/contexts/HabitsDataContext";
import Categories from "../../Data/static/Categories";
import moment from "moment";

export default function Dashboard() {
  const { darkMode } = useContext(DarkModeContext);
  const { habits, handleHabitsDoneToday } = useContext(HabitContext);
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#555", color: "lightBlue", marginTop: 8 }
    : { marginTop: 8 };

  return (
    <Card
      style={
        darkMode
          ? { backgroundColor: "#555", color: "lightBlue", paddingTop: 8 }
          : {}
      }
    >
      <Box p={1}>
        <Typography>Dashboard</Typography>
      </Box>
      <Box>
        {habits.map((habitItems, habitIndex) => {
          const Category = Categories.find(
            (cat) => cat.id == habitItems.categoryId
          );
          const doneToday =
            habitItems.lastDone && moment().isSame(habitItems.lastDone, "day");

          return (
            <Card style={cardstyle}>
              <Box paddingTop={1} paddingLeft={2}>
                {Category && Category.icon}
                <Typography>{habitItems.name}</Typography>
                <Typography variant="caption">
                  Day Streak: {habitItems.dayStreak}
                </Typography>
              </Box>
              <CardActions>
                <Button
                  style={{ marginBottom: 8, marginLeft: 8 }}
                  variant="outlined"
                  onClick={() => {
                    handleHabitsDoneToday(habitIndex);
                  }}
                  disabled={Boolean(doneToday)}
                >
                  Done
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Card>
  );
}
