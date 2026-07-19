import HabitItem from "./HabitItem";

function HabitList() {

  return (

    <div className="habit-list">

      <h2>Today's Habits</h2>

      <HabitItem title="Wake Up Before 6 AM" />

      <HabitItem title="Prayer" />

      <HabitItem title="Workout" />

      <HabitItem title="Coding" />

      <HabitItem title="Drink Water" />

      <HabitItem title="Reading" />

    </div>

  );
}

export default HabitList;