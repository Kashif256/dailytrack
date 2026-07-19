const HABITS_KEY = "dailytracker_habits";
const DATA_KEY = "dailytracker_data";

// ---------- Habit Functions ----------

export const getHabits = () => {
  const habits = localStorage.getItem(HABITS_KEY);

  return habits
    ? JSON.parse(habits)
    : [
        { id: 1, name: "Workout" },
        { id: 2, name: "Coding" },
        { id: 3, name: "Drink Water" },
        { id: 4, name: "Reading" },
      ];
};

export const saveHabits = (habits) => {
  localStorage.setItem(HABITS_KEY, JSON.stringify(habits));
};

// ---------- Daily Data ----------

export const getDailyData = () => {
  return JSON.parse(localStorage.getItem(DATA_KEY)) || {};
};

export const saveDailyData = (data) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
};