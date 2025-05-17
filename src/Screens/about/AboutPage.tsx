import {
  CheckCircle,
  ExpandMore,
  Instagram,
  Telegram,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardContent,
  Grid2,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { CSSProperties, useContext } from "react";
import { DarkModeContext } from "../../Data/contexts/DarkMode.context";

const features = [
  {
    title: "Track Habits",
    description: "Easily log and monitor your habits daily.",
    icon: <CheckCircle />,
  },
  {
    title: "Custom Reminders",
    description: "Set personalized reminders to stay on track.",
    icon: <CheckCircle />,
  },
  {
    title: "Progress Analytics",
    description: "Analyze your progress with visual charts.",
    icon: <CheckCircle />,
  },
];
const Team = [
  { name: "Ashkan Taherkhani", role: "Designer" },
  { name: "AmirMohammad Azadeh", role: "Developer" },
];
const FQA = [
  {
    q: "How can I track a habit?",
    a: "Add a new habit through the Habits page and track it in Dashboard.",
  },
];

const AboutPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  const cardstyle: CSSProperties = darkMode
    ? {
        backgroundColor: "#555",
        color: "lightBlue",
        marginTop: 8,
        height: "100%",
      }
    : { marginTop: 8, height: "100%" };
  const cardSize = { xs: 12, sm: 6, lg: 4, xl: 3 };
  return (
    <Paper
      style={darkMode ? { backgroundColor: "#333", color: "lightBlue" } : {}}
    >
      <Box textAlign={"center"} pt={5} pb={6}>
        <Typography variant="h3">About Habit Tracker</Typography>
        <Typography variant="subtitle1">
          A powerful tool designed to help users build and maintain positive
          habits.
        </Typography>
      </Box>
      <Box textAlign={"center"} pb={5}>
        <Typography variant="h5">
          This project is part of a comprehensive video course on frontend
          development.
        </Typography>
        <Typography variant="h6">
          A core module within the Dive Into React Program.
        </Typography>
        <Typography variant="subtitle1">
          Designed for beginners eager to master React.
        </Typography>
      </Box>
      <Box textAlign={"center"} pb={3}>
        <Typography variant="h6">Explore the project on GitHub:</Typography>
        <Link
          href="https://github.com/Ashkan-T/habit-tracker.git"
          style={{ textDecoration: "none" }}
        >
          Habit Tracker GitHub Repository
        </Link>
      </Box>
      <Grid2 container p={1} spacing={1} justifyContent={"space-around"}>
        {features.map((featureItem, featureIndex) => {
          return (
            <Grid2 size={cardSize} key={featureIndex} alignItems={"center"}>
              <Card style={cardstyle}>
                <CardContent>
                  {featureItem.icon}
                  <Typography variant="h6">{featureItem.title}</Typography>
                  <Typography variant="body2">
                    {featureItem.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
      <Typography pl={1} mt={4} variant="h4">
        Meet Our Team
      </Typography>
      <Grid2 container spacing={1} mb={4} p={1} justifyContent={"space-evenly"}>
        {Team.map((teamItem, teamIndex) => {
          return (
            <Grid2 size={cardSize} key={teamIndex} alignItems={"center"}>
              <Card style={cardstyle}>
                <CardContent>
                  <Avatar sx={{ width: 60, height: 60, mb: 2 }} />
                  <Typography>{teamItem.name}</Typography>
                  <Typography>{teamItem.role}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
      <Grid2 p={1}>
        <Typography mb={2} variant="h4">
          Frequantly Asked Questions
        </Typography>
        {FQA.map((FQAItem, FQAIndex) => {
          return (
            <Accordion key={FQAIndex} style={cardstyle}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{FQAItem.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{FQAItem.a}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>{FQAItem.a}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid2>
      <Box textAlign={"center"} mt={4} pb={2}>
        <Typography variant="h6">Connect with Us</Typography>
        <Typography variant="body1">
          <Telegram /> @Biker_A_83
        </Typography>
        <Typography variant="body1">
          <Instagram /> @a_thr_2004
        </Typography>
      </Box>
    </Paper>
  );
};
export default AboutPage;
