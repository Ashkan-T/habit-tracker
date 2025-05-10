import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Screens/home/Home";
import About from "./Screens/about/About";
import DarkModeProvider from "./Data/contexts/DarkMode.context";
import SettingsPage from "./Components/settingspage/SettingsPage";
import HabitProvider from "./Data/contexts/HabitsDataContext";
import HabitPage from "./Screens/habit/HabitPage";
import Dashboard from "./Screens/dashboard/Dashboard";

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
        <div className="App">
          <Header title="Habit tracker" onLogoClick={backHome} />
          {currentPage == "home" && <Home onPageSelect={changePage} />}
          {currentPage == "about" && <About />}
          {currentPage == "settings" && <SettingsPage />}
          {currentPage == "habits" && <HabitPage />}
          {currentPage == "dashboard" && <Dashboard />}
        </div>
      </HabitProvider>
    </DarkModeProvider>
  );
}

export default App;
