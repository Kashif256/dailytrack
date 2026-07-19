import { useState } from "react";
import { getHabits, saveHabits } from "../utils/storage";

function Settings() {
  const [habits, setHabits] = useState(getHabits());

  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (!newHabit.trim()) return;

    const updated = [
      ...habits,
      {
        id: Date.now(),
        name: newHabit,
      },
    ];

    setHabits(updated);

    saveHabits(updated);

    setNewHabit("");
  };

  const deleteHabit = (id) => {
    const updated = habits.filter((h) => h.id !== id);

    setHabits(updated);

    saveHabits(updated);
  };

  return (
    <div className="container">

      <h1>⚙ Settings</h1>

      <br />

      <input
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Add new habit..."
      />

      <button onClick={addHabit}>
        Add Habit
      </button>

      <br />

      <br />

      {habits.map((habit) => (
        <div key={habit.id} className="habit-row">

          {habit.name}

          <button onClick={() => deleteHabit(habit.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default Settings;