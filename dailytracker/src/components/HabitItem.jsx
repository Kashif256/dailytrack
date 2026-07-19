function HabitItem({ title }) {
  return (
    <div className="habit-item">

      <label>

        <input type="checkbox" />

        <span>{title}</span>

      </label>

    </div>
  );
}

export default HabitItem;