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
export const updateTodayData = (date, updatedChecklist) => {
  const data = getDailyData();

  data[date] = updatedChecklist;

  saveDailyData(data);
};

export const calculateProgress = (checklist) => {
  const total =
    checklist.prayers.length + checklist.habits.length;

  const completed =
    checklist.prayers.filter((p) => p.completed).length +
    checklist.habits.filter((h) => h.completed).length;

  return {
    total,
    completed,
    percent:
      total === 0
        ? 0
        : Math.round((completed / total) * 100),
  };
};