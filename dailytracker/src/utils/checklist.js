import { getHabits, getDailyData, saveDailyData } from "./storage";
import { today } from "./date";

const PRAYERS = [
  "Fajr",
  "Zuhr",
  "Asr",
  "Maghrib",
  "Isha",
];

export function getTodayChecklist() {
  const date = today();

  const data = getDailyData();

  if (!data[date]) {
    const habits = getHabits();

    data[date] = {
      prayers: PRAYERS.map((name, index) => ({
        id: index + 1,
        name,
        completed: false,
      })),

      habits: habits.map((habit) => ({
        ...habit,
        completed: false,
      })),
    };

    saveDailyData(data);
  }

  return data[date];
}