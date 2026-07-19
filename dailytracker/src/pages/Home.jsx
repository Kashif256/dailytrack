import { useState } from "react";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ProgressCard from "../components/ProgressCard";
import FloatingButton from "../components/FloatingButton";
import AddHabitModal from "../components/AddHabitModal";
import HabitCard from "../components/HabitCard";

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
      prayers: checklist.prayers.map((p) =>
        p.id === id
          ? { ...p, completed: !p.completed }
          : p
      ),
    };

    setChecklist(updated);
    updateTodayData(date, updated);
  };

  // Toggle Habit
  const toggleHabit = (id) => {
    const updated = {
      ...checklist,
      habits: checklist.habits.map((h) =>
        h.id === id
          ? { ...h, completed: !h.completed }
          : h
      ),
    };

    setChecklist(updated);
    updateTodayData(date, updated);
  };

  // Add Habit
  const addHabit = (habit) => {
    // Save in master habit list
    const habits = getHabits();

    habits.push(habit);

    saveHabits(habits);

    // Add instantly to today's checklist
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
    // Remove from today's checklist
    const updated = {
      ...checklist,
      habits: checklist.habits.filter(
        (habit) => habit.id !== id
      ),
    };

    setChecklist(updated);

    updateTodayData(date, updated);

    // Remove from master habits
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

      {/* Prayer Tracker */}

      <div className="habit-list">
        <h2>🕌 Prayer Tracker</h2>

        {checklist.prayers.map((prayer) => (
          <div
            className="habit-item"
            key={prayer.id}
          >
            <label>
              <input
                type="checkbox"
                checked={prayer.completed}
                onChange={() =>
                  togglePrayer(prayer.id)
                }
              />

              {prayer.name}
            </label>
          </div>
        ))}
      </div>

      <br />

      {/* Daily Habits */}

      <div className="habit-list">
        <h2>⭐ Daily Habits</h2>

        {checklist.habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={toggleHabit}
            onDelete={deleteHabit}
          />
        ))}
      </div>

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