import { useState } from "react";

function AddHabitModal({ open, onClose, onSave }) {
  const [habit, setHabit] = useState("");
  const [category, setCategory] = useState("Personal");

  if (!open) return null;

  const handleSave = () => {
    if (!habit.trim()) return;

    onSave({
      id: Date.now(),
      name: habit,
      category,
    });

    setHabit("");
    setCategory("Personal");
    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Add New Habit</h2>

        <input
          type="text"
          placeholder="Habit Name"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Personal</option>
          <option>Health</option>
          <option>Study</option>
          <option>Fitness</option>
          <option>Religion</option>
        </select>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddHabitModal;