import moment from "moment";
import { createContext, ReactNode, useEffect, useState } from "react";

export type Habit = {
  name: string;
  completed: boolean;
  lastDone: Date | null;
  dayStreak: number;
  categoryId?: number;
};
type HabitDataContext = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  removeHabitAt: (index: number) => void;
  handleHabitsDoneToday: (index: number) => void;
};
export const HabitContext = createContext<HabitDataContext>({
  habits: [],
  addHabit: () => {},
  removeHabitAt: () => {},
  handleHabitsDoneToday: () => {},
});

export default function HabitProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>([]);
  const saveHabitsToLocalStorege = (habitName: Habit[]) => {
    const habitStr = JSON.stringify(habitName);
    localStorage.setItem("habit", habitStr);
  };
  const loadHabitsFromLocalStorage = () => {
    const habitStr = localStorage.getItem("habit");
    if (habitStr) {
      const newHabit: Habit[] = JSON.parse(habitStr);
      setHabits(newHabit);
    }
  };
  const addHabit = (newHabit: Habit) => {
    const newHabits = [...habits, newHabit];
    setHabits(newHabits);
    saveHabitsToLocalStorege(newHabits);
  };
  const removeHabitAt = (index: number) => {
    const newHabit = [...habits];
    newHabit.splice(index, 1);
    setHabits(newHabit);
    saveHabitsToLocalStorege(newHabit);
  };
  useEffect(() => {
    loadHabitsFromLocalStorage();
  }, []);
  const handleHabitsDoneToday = (index: number) => {
    const newHabit = [...habits];
    // Part 1:
    const ld = newHabit[index].lastDone;
    const startOfToday = moment().startOf("day");
    if (ld && startOfToday.isSame(ld, "day")) {
      return;
    }
    // Part 2:
    const Yesterday = startOfToday.subtract(1, "day");
    if (Yesterday.isSameOrBefore(ld)) {
      habits[index].dayStreak = habits[index].dayStreak + 1;
    } else {
      habits[index].dayStreak = 1;
    }
    // Part 3:
    if (habits[index].dayStreak >= 30) {
      habits[index].completed = true;
    }
    habits[index].lastDone = moment().startOf("day").toDate();
    setHabits(newHabit);
    saveHabitsToLocalStorege(newHabit);
  };

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, removeHabitAt, handleHabitsDoneToday }}
    >
      {children}
    </HabitContext.Provider>
  );
}
