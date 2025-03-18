import { createContext, ReactNode, useState } from "react";

type Habit = {
  name: string;
  completed: boolean;
};
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
  const [habits, setHabits] = useState<Habit[]>([
    { name: "wakeup early", completed: true },
    { name: "exercise", completed: false },
  ]);
  const addHabit = (newHabit: Habit) => {
    setHabits([...habits, newHabit]);
  };
  const removeHabitAt = (index: number) => {
    const newHabit = [...habits];
    newHabit.splice(index, 1);
    setHabits(newHabit);
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, removeHabitAt }}>
      {children}
    </HabitContext.Provider>
  );
}
