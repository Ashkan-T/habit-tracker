import { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Screens/home/Home";
import About from "./Screens/about/About";
import DarkModeProvider from "./Data/contexts/DarkMode.context";
import SettingsPage from "./Components/settingspage/SettingsPage";
import HabitProvider from "./Data/contexts/HabitsDataContext";
import HabitPage from "./Screens/habit/HabitPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const changePage = (pageName: string) => {
    setCurrentPage(pageName);
  };
  const backHome = () => {
    setCurrentPage("home");
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
        </div>
      </HabitProvider>
    </DarkModeProvider>
  );
}

export default App;
