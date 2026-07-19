import { useState } from "react";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ProgressCard from "../components/ProgressCard";
import FloatingButton from "../components/FloatingButton";
import AddHabitModal from "../components/AddHabitModal";

import PrayerSection from "../components/PrayerSection";
import HabitSection from "../components/HabitSection";
import StreakCard from "../components/StreakCard";

import { today } from "../utils/date";
import { getTodayChecklist } from "../utils/checklist";

import {
  getHabits,
  saveHabits,
  updateTodayData,
  calculateProgress,
} from "../utils/storage";

function Home() {
  const date = today();

  const [checklist, setChecklist] = useState(getTodayChecklist());
  const [showModal, setShowModal] = useState(false);

  // Toggle Prayer
  const togglePrayer = (id) => {
    const updated = {
      ...checklist,
      prayers: checklist.prayers.map((prayer) =>
        prayer.id === id
          ? { ...prayer, completed: !prayer.completed }
          : prayer
      ),
    };

    setChecklist(updated);
    updateTodayData(date, updated);
  };

  // Toggle Habit
  const toggleHabit = (id) => {
    const updated = {
      ...checklist,
      habits: checklist.habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      ),
    };

    setChecklist(updated);
    updateTodayData(date, updated);
  };

  // Add Habit
  const addHabit = (habit) => {
    const habits = getHabits();

    habits.push(habit);
    saveHabits(habits);

    const updated = {
      ...checklist,
      habits: [
        ...checklist.habits,
        {
          ...habit,
          completed: false,
        },
      ],
    };

    setChecklist(updated);
    updateTodayData(date, updated);
  };

  // Delete Habit
  const deleteHabit = (id) => {
    const updated = {
      ...checklist,
      habits: checklist.habits.filter(
        (habit) => habit.id !== id
      ),
    };

    setChecklist(updated);
    updateTodayData(date, updated);

    const masterHabits = getHabits().filter(
      (habit) => habit.id !== id
    );

    saveHabits(masterHabits);
  };

  const progress = calculateProgress(checklist);

  return (
    <div className="container">
      <Header />

      <ProgressCard
        percent={progress.percent}
        completed={progress.completed}
        total={progress.total}
      />
      
      <PrayerSection
        prayers={checklist.prayers}
        onToggle={togglePrayer}
      />

      <br />

      <HabitSection
        habits={checklist.habits}
        onToggle={toggleHabit}
        onDelete={deleteHabit}
      />

      <BottomNav />

      <FloatingButton
        onClick={() => setShowModal(true)}
      />

      <AddHabitModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={addHabit}
      />
    </div>
  );
}

export default Home;