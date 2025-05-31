import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import homeScreenCardImage from "../../Assets/Images/home-screen";
import { CSSProperties, useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";

interface AboutProps {
  onPageSelect: (pageName: string) => void;
}

export default function Home({ onPageSelect }: AboutProps) {
  const { darkMode } = useContext(DarkModeContext);
  const handleNavClick = (pageName: string) => {
    onPageSelect(pageName);
  };
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#555", color: "lightblue" }
    : {};
  const cardSize = { xs: 12, sm: 6, lg: 4, xl: 3 };

  return (
    <Paper
      style={{ backgroundColor: darkMode ? "#444" : undefined, height: "100%" }}
    >
      <Grid2 container>
        <Grid2 padding={3} size={cardSize}>
          <Card style={cardstyle}>
            <CardActionArea
              onClick={() => {
                handleNavClick("habits");
              }}
            >
              <CardMedia
                component="img"
                height={180}
                image={
                  darkMode
                    ? homeScreenCardImage.darkHabitImage
                    : homeScreenCardImage.habitImage
                }
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="div">
                  Habits
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 padding={3} size={cardSize}>
          <Card style={cardstyle}>
            <CardActionArea
              onClick={() => {
                handleNavClick("dashboard");
              }}
            >
              <CardMedia
                component="img"
                height={180}
                image={
                  darkMode
                    ? homeScreenCardImage.darkDashboardImage
                    : homeScreenCardImage.dashboardImage
                }
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="div">
                  Dashboard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 padding={3} size={cardSize}>
          <Card style={cardstyle}>
            <CardActionArea
              onClick={() => {
                handleNavClick("settings");
              }}
            >
              <CardMedia
                component="img"
                height={180}
                image={
                  darkMode
                    ? homeScreenCardImage.darkSettingsImage
                    : homeScreenCardImage.settingImage
                }
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="div">
                  Settings
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 padding={3} size={cardSize}>
          <Card style={cardstyle}>
            <CardActionArea
              onClick={() => {
                handleNavClick("about");
              }}
            >
              <CardMedia
                component="img"
                height={180}
                image={
                  darkMode
                    ? homeScreenCardImage.darkAboutImage
                    : homeScreenCardImage.aboutImage
                }
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="div">
                  About
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
