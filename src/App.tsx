import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Screens/home/Home";
import DarkModeProvider from "./Data/contexts/DarkMode.context";
import SettingsPage from "./Components/settingspage/SettingsPage";
import HabitProvider from "./Data/contexts/HabitsDataContext";
import HabitPage from "./Screens/habit/HabitPage";
import Dashboard from "./Screens/dashboard/Dashboard";
import AboutPage from "./Screens/about/AboutPage";
import { Container, Grid2 } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const changePage = (pageName: string) => {
    setCurrentPage(pageName);
    localStorage.setItem("currentPage", pageName);
  };
  useEffect(() => {
    const handlePage = localStorage.getItem("currentPage");
    changePage(handlePage ?? "home");
  }, []);
  const backHome = () => {
    changePage("home");
  };
  return (
    <DarkModeProvider>
      <HabitProvider>
        <Container style={{ padding: 0 }} maxWidth="xl" className="App">
          <Grid2
            container
            flexDirection={"column"}
            height={"100dvh"}
            wrap="nowrap"
          >
            <Header title="Habit tracker" onLogoClick={backHome} />
            <Grid2 flexGrow={1}>
              {currentPage == "home" && <Home onPageSelect={changePage} />}
              {currentPage == "about" && <AboutPage />}
              {currentPage == "settings" && <SettingsPage />}
              {currentPage == "habits" && <HabitPage />}
              {currentPage == "dashboard" && <Dashboard />}
            </Grid2>
          </Grid2>
        </Container>
      </HabitProvider>
    </DarkModeProvider>
  );
}

export default App;
