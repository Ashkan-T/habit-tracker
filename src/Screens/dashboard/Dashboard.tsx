import {
  Box,
  Button,
  Card,
  CardActions,
  Grid2,
  Typography,
} from "@mui/material";
import { CSSProperties, useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";
import { HabitContext } from "../../Data/contexts/HabitsDataContext";
import Categories from "../../Data/static/Categories";
import moment from "moment";

export default function Dashboard() {
  const { darkMode } = useContext(DarkModeContext);
  const { habits, handleHabitsDoneToday } = useContext(HabitContext);
  const cardstyle: CSSProperties = darkMode
    ? {
        backgroundColor: "#555",
        color: "lightBlue",
        marginTop: 8,
        height: "100%",
      }
    : { marginTop: 8, height: "100%" };

  return (
    <Box
      style={
        darkMode
          ? { backgroundColor: "#444", color: "lightBlue", paddingTop: 8 }
          : {}
      }
    >
      <Box p={1}>
        <Typography pb={2} variant="h3">
          Dashboard
        </Typography>
        <Grid2 container spacing={1}>
          {habits.map((habitItems, habitIndex) => {
            const Category = Categories.find(
              (cat) => cat.id == habitItems.categoryId
            );
            const doneToday =
              habitItems.lastDone &&
              moment().isSame(habitItems.lastDone, "day");

            return (
              <Grid2
                size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}
                alignItems={"center"}
              >
                <Card style={cardstyle}>
                  <Box paddingTop={1} paddingLeft={0.5}>
                    <Grid2 container spacing={1} alignItems={"center"}>
                      <Grid2>{Category && Category.icon}</Grid2>
                      <Typography flexGrow={1}>{habitItems.name}</Typography>
                    </Grid2>
                  </Box>

                  <CardActions>
                    <Grid2 container flexGrow={1} alignItems={"center"}>
                      <Typography variant="caption" flexGrow={1}>
                        Day Streak: {habitItems.dayStreak}
                      </Typography>
                      <Grid2>
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
                      </Grid2>
                    </Grid2>
                  </CardActions>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
}
