import { useState } from "react";
import {
  FaMoon,
  FaSun,
  FaTrash,
  FaCircleInfo,
  FaListCheck,
  FaMobileScreen,
} from "react-icons/fa6";

import BackButton from "../components/BackButton";
import { getHabits } from "../utils/storage";
import {
  getTheme,
  saveTheme,
} from "../utils/theme";

function Settings() {
  const [habits, setHabits] = useState(getHabits());
  const [theme, setTheme] = useState(getTheme());

  // Delete Habit
  const deleteHabit = (id) => {
    if (!window.confirm("Delete this habit?")) return;

    const updatedHabits = habits.filter(
      (habit) => habit.id !== id
    );

    setHabits(updatedHabits);

    localStorage.setItem(
      "dailytracker_habits",
      JSON.stringify(updatedHabits)
    );
  };

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme =
      theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    saveTheme(newTheme);
  };

  // Clear All Data
  const clearAllData = () => {
    if (
      !window.confirm(
        "Are you sure you want to delete ALL tracker data?"
      )
    )
      return;

    localStorage.removeItem("dailytracker_data");
    localStorage.removeItem("dailytracker_habits");

    alert("All tracker data has been deleted.");

    window.location.reload();
  };

  return (
    <div className="container">
      <BackButton />

      <h1>⚙️ Settings</h1>

      {/* App Info */}

      <div className="settings-card">
        <h2>
          <FaMobileScreen />
          DailyTracker
        </h2>

        <p>
          <strong>Version:</strong> 1.0.0
        </p>

        <p>
          Track your daily habits, prayers and
          improve consistency every day.
        </p>
      </div>

      {/* Manage Habits */}

      <div className="settings-card">
        <h2>
          <FaListCheck />
          Manage Habits
        </h2>

        {habits.length === 0 ? (
          <p>No habits added.</p>
        ) : (
          habits.map((habit) => (
            <div
              className="habit-row"
              key={habit.id}
            >
              <div>
                <h4>{habit.name}</h4>

                <small>{habit.category}</small>
              </div>

              <button
                className="delete-small"
                onClick={() =>
                  deleteHabit(habit.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Dark Mode */}

      <div className="settings-card">
        <h2>
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <FaSun />
          )}

          Appearance
        </h2>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "light"
            ? "🌙 Enable Dark Mode"
            : "☀️ Enable Light Mode"}
        </button>
      </div>

      {/* About */}

      <div className="settings-card">
        <h2>
          <FaCircleInfo />
          About
        </h2>

        <p>
          DailyTracker helps you build healthy
          habits, complete daily prayers and stay
          productive through simple daily tracking.
        </p>
      </div>

      {/* Danger Zone */}

      <div className="settings-card danger">
        <h2>
          <FaTrash />
          Danger Zone
        </h2>

        <button
          className="danger-btn"
          onClick={clearAllData}
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
}

export default Settings;