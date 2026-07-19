import { useState } from "react";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ProgressCard from "../components/ProgressCard";

import { today } from "../utils/date";

import { getTodayChecklist } from "../utils/checklist";

import {
  updateTodayData,
  calculateProgress,
} from "../utils/storage";

function Home() {

  const date = today();

  const [checklist, setChecklist] = useState(
    getTodayChecklist()
  );

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

  const progress = calculateProgress(checklist);

  return (
    <div className="container">

      <Header />

      <ProgressCard
        percent={progress.percent}
        completed={progress.completed}
        total={progress.total}
      />

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

      <div className="habit-list">

        <h2>⭐ Daily Habits</h2>

        {checklist.habits.map((habit) => (

          <div
            className="habit-item"
            key={habit.id}
          >

            <label>

              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() =>
                  toggleHabit(habit.id)
                }
              />

              {habit.name}

            </label>

          </div>

        ))}

      </div>

      <BottomNav />

    </div>
  );
}

export default Home;