import HabitCard from "./HabitCard";

function HabitSection({
  habits,
  onToggle,
  onDelete,
}) {
  return (
    <div className="habit-list">
      <h2>⭐ Daily Habits</h2>

      {habits.length === 0 ? (
        <p>No habits added yet.</p>
      ) : (
        habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default HabitSection;