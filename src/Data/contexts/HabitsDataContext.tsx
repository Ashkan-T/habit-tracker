import { createContext, ReactNode, useState } from "react";

type Habit = string;
type HabitDataContext = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  removeHabitAt: (index: number) => void;
};
export const HabitContext = createContext<HabitDataContext>({
  habits: [],
  addHabit: () => {},
  removeHabitAt: () => {},
});

export default function HabitProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useState([
    "wake up",
    "sleep",
    "exercise",
    "work",
  ]);
  const addHabit = (newHabit: Habit) => {
    setHabits([...habits, newHabit]);
  };
  const removeHabitAt = (index: number) => {
    //remove later!
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, removeHabitAt }}>
      {children}
    </HabitContext.Provider>
  );
}
