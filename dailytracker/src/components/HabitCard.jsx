import { FaTrash } from "react-icons/fa6";

function HabitCard({ habit, onToggle, onDelete }) {
  return (
    <div className="habit-card">
      <div className="habit-info">
        <h3>{habit.name}</h3>

        <span className={`category ${habit.category?.toLowerCase()}`}>
          {habit.category || "Personal"}
        </span>
      </div>

      <div className="habit-actions">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
        />

        <button
          className="delete-btn"
          onClick={() => onDelete(habit.id)}
          title="Delete Habit"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default HabitCard;